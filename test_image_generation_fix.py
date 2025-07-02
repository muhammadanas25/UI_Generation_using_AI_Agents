#!/usr/bin/env python3
"""
Comprehensive Image Generation Test
Tests the enhanced Gemini image generation with fallback mechanisms
"""

import os
import sys
import logging
import time
from dotenv import load_dotenv

# Add the src directory to the path
sys.path.append('./src')

# Load environment variables
load_dotenv('./src/.env')

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

def test_image_generation():
    """Test image generation with comprehensive fallback strategy."""
    try:
        from ai.agents.image_generator.agent import ImageGeneratorAgent
        from ai.const.models import AgentBrainModel
        
        print("🧪 TESTING ENHANCED IMAGE GENERATION WITH FALLBACKS")
        print("=" * 60)
        
        # Test descriptions
        test_descriptions = [
            "A premium ballpoint pen with sleek design and metallic finish",
            "A classic leather-bound notebook with elegant binding",
            "Colorful sticky notes arranged on a desk",
            "A modern desk organizer with multiple compartments",
            "Set of highlighter pens in vibrant colors"
        ]
        
        # Test with Gemini Flash (primary model)
        print("\n🔥 Testing with Gemini Flash (Primary Model)")
        print("-" * 40)
        
        agent = ImageGeneratorAgent(model=AgentBrainModel.gemini_flash_models)
        
        results = []
        for i, description in enumerate(test_descriptions, 1):
            print(f"\n[Test {i}/5] Generating: {description[:50]}...")
            
            start_time = time.time()
            try:
                image_url = agent.generate_image_url(description)
                generation_time = time.time() - start_time
                
                if image_url and image_url != "/placeholder.png" and "placeholder" not in image_url.lower():
                    print(f"✅ SUCCESS: Generated in {generation_time:.2f}s")
                    print(f"   URL: {image_url[:100]}...")
                    results.append({"status": "success", "url": image_url, "time": generation_time})
                else:
                    print(f"⚠️  FALLBACK: Used placeholder after {generation_time:.2f}s")
                    results.append({"status": "placeholder", "url": image_url, "time": generation_time})
                    
            except Exception as e:
                generation_time = time.time() - start_time
                print(f"❌ ERROR: {str(e)[:100]}... (after {generation_time:.2f}s)")
                results.append({"status": "error", "error": str(e), "time": generation_time})
            
            # Brief pause between tests
            time.sleep(1)
        
        # Summary
        print("\n📊 TEST RESULTS SUMMARY")
        print("=" * 40)
        
        success_count = sum(1 for r in results if r["status"] == "success")
        placeholder_count = sum(1 for r in results if r["status"] == "placeholder")
        error_count = sum(1 for r in results if r["status"] == "error")
        
        avg_time = sum(r["time"] for r in results) / len(results)
        
        print(f"✅ Successful generations: {success_count}/{len(test_descriptions)} ({success_count/len(test_descriptions)*100:.1f}%)")
        print(f"⚠️  Fallback to placeholder: {placeholder_count}/{len(test_descriptions)} ({placeholder_count/len(test_descriptions)*100:.1f}%)")
        print(f"❌ Errors: {error_count}/{len(test_descriptions)} ({error_count/len(test_descriptions)*100:.1f}%)")
        print(f"⏱️  Average generation time: {avg_time:.2f}s")
        
        # Test individual fallback mechanisms
        print("\n🔄 TESTING INDIVIDUAL FALLBACK MECHANISMS")
        print("=" * 50)
        
        # Test Google Imagen 3.0 backup directly
        print("\n📸 Testing Google Imagen 3.0 Backup...")
        try:
            start_time = time.time()
            imagen_result = agent._generate_image_gemini_imagen_backup("A beautiful landscape with mountains")
            imagen_time = time.time() - start_time
            
            if imagen_result:
                print(f"✅ Imagen 3.0 backup works: {imagen_time:.2f}s")
                print(f"   URL: {imagen_result[:100]}...")
            else:
                print(f"❌ Imagen 3.0 backup failed after {imagen_time:.2f}s")
        except Exception as e:
            print(f"❌ Imagen 3.0 backup error: {str(e)[:100]}...")
        
        # Test DALL-E fallback
        print("\n🎨 Testing DALL-E Fallback...")
        try:
            # Create a DALL-E agent
            dalle_agent = ImageGeneratorAgent(model=AgentBrainModel.DALL_E_3)
            start_time = time.time()
            dalle_result = dalle_agent._generate_image_dall_e("A futuristic robot in a modern office")
            dalle_time = time.time() - start_time
            
            if dalle_result:
                print(f"✅ DALL-E fallback works: {dalle_time:.2f}s")
                print(f"   URL: {dalle_result[:100]}...")
            else:
                print(f"❌ DALL-E fallback failed after {dalle_time:.2f}s")
        except Exception as e:
            print(f"❌ DALL-E fallback error: {str(e)[:100]}...")
        
        print("\n🎯 OVERALL ASSESSMENT")
        print("=" * 30)
        
        if success_count >= 3:
            print("🚀 EXCELLENT: Image generation system is working well!")
        elif success_count >= 1:
            print("✅ GOOD: System is functional with some fallbacks needed")
        elif placeholder_count > error_count:
            print("⚠️  DEGRADED: System is falling back to placeholders but stable")
        else:
            print("❌ CRITICAL: System needs immediate attention")
        
        # Performance analysis
        if avg_time < 5:
            print("⚡ Performance: Excellent (< 5s average)")
        elif avg_time < 10:
            print("🔥 Performance: Good (< 10s average)")
        elif avg_time < 15:
            print("⏳ Performance: Acceptable (< 15s average)")
        else:
            print("🐌 Performance: Needs optimization (> 15s average)")
            
        return {
            "success_rate": success_count / len(test_descriptions),
            "average_time": avg_time,
            "results": results
        }
        
    except ImportError as e:
        print(f"❌ Import Error: {e}")
        print("   Please ensure all dependencies are installed and paths are correct")
        return None
    except Exception as e:
        print(f"❌ Unexpected Error: {e}")
        return None

def test_gemini_decoding_strategies():
    """Test the specific Gemini decoding strategies."""
    print("\n🔬 TESTING GEMINI DECODING STRATEGIES")
    print("=" * 45)
    
    try:
        from ai.agents.image_generator.agent import ImageGeneratorAgent
        from ai.const.models import AgentBrainModel
        
        agent = ImageGeneratorAgent(model=AgentBrainModel.gemini_flash_models)
        
        # Test a simple image generation to see which strategy works
        print("Testing decoding strategies with a simple prompt...")
        
        start_time = time.time()
        result = agent._generate_image_gemini_flash("A simple red circle on white background")
        generation_time = time.time() - start_time
        
        if result:
            print(f"✅ Gemini decoding successful: {generation_time:.2f}s")
            print(f"   Generated URL: {result[:100]}...")
            print("   Check the logs above to see which decoding strategy worked!")
        else:
            print(f"❌ All Gemini decoding strategies failed after {generation_time:.2f}s")
            print("   Check the debug logs for detailed failure information")
            
    except Exception as e:
        print(f"❌ Error testing Gemini decoding: {str(e)}")

if __name__ == "__main__":
    print("🚀 Starting Comprehensive Image Generation Test")
    print("=" * 60)
    
    # Check environment variables
    required_vars = ["GEMINI_API_KEY", "aws_access_key_id", "aws_secret_access_key", "AWS_BUCKET_NAME", "AWS_REGION"]
    missing_vars = [var for var in required_vars if not os.getenv(var)]
    
    if missing_vars:
        print(f"❌ Missing environment variables: {', '.join(missing_vars)}")
        print("   Please check your .env file")
        sys.exit(1)
    
    print("✅ Environment variables configured")
    
    # Run tests
    results = test_image_generation()
    
    if results:
        test_gemini_decoding_strategies()
        
        print("\n🏁 TEST COMPLETED")
        print("=" * 20)
        print(f"Success Rate: {results['success_rate']*100:.1f}%")
        print(f"Average Time: {results['average_time']:.2f}s")
        
        if results['success_rate'] > 0.6:
            print("🎉 The image generation fix appears to be working!")
        else:
            print("🔧 More work may be needed on the image generation system")
    else:
        print("\n❌ Tests could not be completed due to setup issues") 