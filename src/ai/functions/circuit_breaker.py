import time
import threading
from enum import Enum
from typing import Callable, Any, Optional
from collections import defaultdict

class CircuitState(Enum):
    CLOSED = "CLOSED"      # Normal operation
    OPEN = "OPEN"          # Failures detected, blocking requests
    HALF_OPEN = "HALF_OPEN"  # Testing if service recovered

class CircuitBreaker:
    """
    Circuit Breaker Pattern Implementation
    
    Benefits:
    1. Prevents cascading failures
    2. Fail fast instead of waiting for timeouts
    3. System stability and resource protection
    4. Graceful degradation with fallbacks
    5. Auto recovery testing
    6. For image generation: Prevents overwhelming failed services and allows parallel processing
    """
    
    def __init__(self, 
                 failure_threshold: int = 5,
                 recovery_timeout: int = 60,
                 expected_exception: tuple = (Exception,),
                 name: str = "default"):
        self.failure_threshold = failure_threshold
        self.recovery_timeout = recovery_timeout
        self.expected_exception = expected_exception
        self.name = name
        
        # State management
        self.failure_count = 0
        self.last_failure_time = None
        self.state = CircuitState.CLOSED
        self.next_attempt_time = 0
        
        # Thread safety for concurrent image processing
        self._lock = threading.Lock()
        
        # Metrics
        self.total_requests = 0
        self.failed_requests = 0
        self.successful_requests = 0
        
    def call(self, func: Callable, *args, **kwargs) -> Any:
        """Execute function with circuit breaker protection"""
        with self._lock:
            self.total_requests += 1
            
            # Check if circuit is open
            if self.state == CircuitState.OPEN:
                if time.time() < self.next_attempt_time:
                    self.failed_requests += 1
                    raise CircuitBreakerOpenException(
                        f"Circuit breaker '{self.name}' is OPEN. "
                        f"Next attempt allowed at {time.ctime(self.next_attempt_time)}"
                    )
                else:
                    # Try to transition to half-open
                    self.state = CircuitState.HALF_OPEN
                    print(f"Circuit breaker '{self.name}' transitioning to HALF_OPEN for test")
        
        try:
            # Execute the function
            result = func(*args, **kwargs)
            
            # Success - handle state transitions
            with self._lock:
                self.successful_requests += 1
                if self.state == CircuitState.HALF_OPEN:
                    # Service recovered, reset circuit
                    self._reset_circuit()
                    print(f"Circuit breaker '{self.name}' recovered, transitioning to CLOSED")
                
            return result
            
        except self.expected_exception as e:
            # Handle failure
            with self._lock:
                self.failed_requests += 1
                self.failure_count += 1
                self.last_failure_time = time.time()
                
                if self.failure_count >= self.failure_threshold:
                    # Open the circuit
                    self.state = CircuitState.OPEN
                    self.next_attempt_time = time.time() + self.recovery_timeout
                    print(f"Circuit breaker '{self.name}' OPENED due to {self.failure_count} failures")
                
            raise e
    
    def _reset_circuit(self):
        """Reset circuit to healthy state"""
        self.failure_count = 0
        self.state = CircuitState.CLOSED
        self.last_failure_time = None
        self.next_attempt_time = 0
    
    def get_stats(self) -> dict:
        """Get circuit breaker statistics"""
        with self._lock:
            return {
                "name": self.name,
                "state": self.state.value,
                "total_requests": self.total_requests,
                "successful_requests": self.successful_requests,
                "failed_requests": self.failed_requests,
                "failure_count": self.failure_count,
                "failure_rate": self.failed_requests / max(self.total_requests, 1) * 100,
                "last_failure_time": self.last_failure_time,
                "next_attempt_time": self.next_attempt_time if self.state == CircuitState.OPEN else None
            }

class CircuitBreakerOpenException(Exception):
    """Raised when circuit breaker is open"""
    pass

# Global circuit breakers for different services
circuit_breakers = {
    'image_generation': CircuitBreaker(
        failure_threshold=3,
        recovery_timeout=300,  # 5 minutes
        name='image_generation'
    ),
    'image_description': CircuitBreaker(
        failure_threshold=3,
        recovery_timeout=180,  # 3 minutes
        name='image_description'
    ),
    'jsx_parsing': CircuitBreaker(
        failure_threshold=5,
        recovery_timeout=60,   # 1 minute
        name='jsx_parsing'
    ),
    'import_extraction': CircuitBreaker(
        failure_threshold=10,  # Increased from 5 to 10 for better tolerance
        recovery_timeout=120,  # 2 minutes
        name='import_extraction'
    )
}

def get_circuit_breaker(name: str) -> CircuitBreaker:
    """Get circuit breaker by name"""
    return circuit_breakers.get(name, circuit_breakers['image_generation']) 