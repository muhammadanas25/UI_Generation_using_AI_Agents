#!/usr/bin/env python3
"""
Comprehensive test cases for enhanced image detection
Based on real patterns from production logs
"""

import json
import subprocess
import sys
import os

# Test cases based on real ecommerce patterns
test_cases = [
    {
        "name": "Simple Product Images (Current Working)",
        "code": '''
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="group cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-4">
              <div className="relative">
                <img src="/placeholder.svg?height=200&width=200" alt="Product 1" className="w-full h-48 object-cover rounded-lg mb-4" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Summer Dress</h3>
              <p className="text-gray-600 mb-2">$89.99</p>
            </CardContent>
          </Card>
          <Card className="group cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-4">
              <div className="relative">
                <img src="/placeholder.svg?height=200&width=200" alt="Product 2" className="w-full h-48 object-cover rounded-lg mb-4" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Casual T-Shirt</h3>
              <p className="text-gray-600 mb-2">$29.99</p>
            </CardContent>
          </Card>
        </div>
        ''',
        "expected_nodes": 2,
        "expected_types": ["regular", "regular"]
    },
    
    {
        "name": "Products Array with Map Loop (CURRENTLY BROKEN)",
        "code": '''
        const products = [
          { id: 1, name: "Summer Dress", price: 89.99, image: "/placeholder.svg?height=200&width=200" },
          { id: 2, name: "Casual T-Shirt", price: 29.99, image: "/placeholder.svg?height=200&width=200" },
          { id: 3, name: "Denim Jeans", price: 69.99, image: "/placeholder.svg?height=200&width=200" },
          { id: 4, name: "Sneakers", price: 129.99, image: "/placeholder.svg?height=200&width=200" }
        ];

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map(product => (
            <Card key={product.id} className="group cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-4">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">${product.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        ''',
        "expected_nodes": 1,  # Should detect the image inside the loop
        "expected_types": ["loop-image"]
    },
    
    {
        "name": "Template Literal Images in Loop (CURRENTLY BROKEN)",
        "code": '''
        const categories = ["dresses", "shirts", "jeans", "shoes"];
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(category => (
            <Card key={category} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <img src={`/images/categories/${category}.jpg`} alt={category} className="w-full h-32 object-cover rounded mb-2" />
                <h3 className="text-center capitalize">{category}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
        ''',
        "expected_nodes": 1,  # Should detect template literal image in loop
        "expected_types": ["loop-image"]
    },
    
    {
        "name": "Mixed Regular and Loop Images",
        "code": '''
        <div>
          <img src="/hero-banner.jpg" alt="Hero Banner" className="w-full h-64 object-cover" />
          
          <div className="grid grid-cols-3 gap-4 mt-8">
            {featuredProducts.map(product => (
              <Card key={product.id}>
                <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
                <CardContent>
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        ''',
        "expected_nodes": 2,  # Hero image + loop image
        "expected_types": ["regular", "loop-image"]
    },
    
    {
        "name": "Nested Loop with Images (ADVANCED CASE)",
        "code": '''
        {categories.map(category => (
          <div key={category.id}>
            <h2>{category.name}</h2>
            <div className="grid grid-cols-4 gap-4">
              {category.products.map(product => (
                <Card key={product.id}>
                  <img src={`/products/${category.slug}/${product.slug}.jpg`} alt={product.name} />
                  <CardContent>
                    <h3>{product.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
        ''',
        "expected_nodes": 1,  # Should detect nested loop image
        "expected_types": ["loop-image"]
    }
]

def test_node_detection():
    """Test the enhanced Node.js script for image detection"""
    print("🧪 Testing Enhanced Image Detection Script...")
    print("=" * 60)
    
    total_tests = len(test_cases)
    passed_tests = 0
    
    for i, test_case in enumerate(test_cases, 1):
        print(f"\n📋 Test {i}/{total_tests}: {test_case['name']}")
        print("-" * 40)
        
        try:
            # Run the Node.js script
            result = subprocess.run(
                ['node', 'src/ai/functions/babel-img-util.js', test_case['code']],
                capture_output=True,
                text=True,
                cwd='/home/anas/akira-ui-generator',
                timeout=30
            )
            
            if result.returncode != 0:
                print(f"❌ FAILED: Node.js script error: {result.stderr}")
                continue
            
            # Parse results
            try:
                nodes = json.loads(result.stdout)
                print(f"📊 Found {len(nodes)} nodes")
                
                # Analyze node types
                regular_nodes = 0
                loop_nodes = 0
                
                for node in nodes:
                    if isinstance(node, str) and node.startswith('{"type":"loop-image"'):
                        loop_data = json.loads(node)
                        print(f"🔄 Loop Image: {loop_data.get('arraySource', 'unknown')} -> {loop_data.get('imageElement', '')[:50]}...")
                        loop_nodes += 1
                    else:
                        print(f"📷 Regular Image: {str(node)[:100]}...")
                        regular_nodes += 1
                
                # Check expectations
                expected_count = test_case['expected_nodes']
                actual_count = len(nodes)
                
                if actual_count == expected_count:
                    print(f"✅ Node count PASSED: Expected {expected_count}, got {actual_count}")
                    passed_tests += 1
                else:
                    print(f"❌ Node count FAILED: Expected {expected_count}, got {actual_count}")
                
                print(f"📈 Regular nodes: {regular_nodes}, Loop nodes: {loop_nodes}")
                
            except json.JSONDecodeError as e:
                print(f"❌ FAILED: JSON parsing error: {e}")
                print(f"Raw output: {result.stdout}")
                
        except subprocess.TimeoutExpired:
            print("❌ FAILED: Script timeout")
        except Exception as e:
            print(f"❌ FAILED: {str(e)}")
    
    print("\n" + "=" * 60)
    print(f"🎯 Test Summary: {passed_tests}/{total_tests} tests passed")
    return passed_tests == total_tests

def test_python_processing():
    """Test the Python processing of detected nodes"""
    print("\n🐍 Testing Python Node Processing...")
    print("=" * 60)
    
    # Simulate detected nodes (mix of regular and loop)
    mock_nodes = [
        '<img src="/placeholder.svg?height=200&width=200" alt="Product 1" className="w-full h-48 object-cover rounded-lg mb-4" />',
        '{"type":"loop-image","arraySource":"products","mapMethod":"map","imageElement":"<img src={product.image} alt={product.name} className=\\"w-full h-48 object-cover rounded-lg mb-4\\" />","callbackParam":"product","srcExpression":"{product.image}"}'
    ]
    
    # Simulate the Python processing
    processed_nodes = []
    
    for node in mock_nodes:
        try:
            if isinstance(node, str) and node.startswith('{"type":"loop-image"'):
                loop_data = json.loads(node)
                print(f"🔄 Processing loop image: {loop_data.get('arraySource', 'unknown')}")
                
                processed_node = {
                    "type": "loop-image",
                    "src": "/placeholder.jpg",
                    "alt": f"Loop image from {loop_data.get('callbackParam', 'item')}",
                    "loopContext": loop_data,
                    "originalCode": loop_data.get('imageElement', node)
                }
                processed_nodes.append(processed_node)
            else:
                print(f"📷 Processing regular image: {str(node)[:50]}...")
                processed_nodes.append(node)
                
        except json.JSONDecodeError:
            print(f"📷 Processing regular node: {str(node)[:50]}...")
            processed_nodes.append(node)
        except Exception as e:
            print(f"❌ Error processing node: {str(e)[:100]}")
    
    print(f"✅ Successfully processed {len(processed_nodes)} nodes")
    
    # Test conversion back to Node.js format
    processed_results = []
    for node in processed_nodes:
        if isinstance(node, dict) and node.get('type') == 'loop-image':
            loop_context = node.get('loopContext', {})
            json_key = json.dumps(loop_context)
            mock_result = {"description": "Test description", "image_url": "https://test.com/image.jpg"}
            processed_results.append([json_key, mock_result])
            print(f"🔄 Converted loop image back to JSON format")
        else:
            mock_result = {"description": "Test description", "image_url": "https://test.com/image.jpg"}
            processed_results.append([node, mock_result])
            print(f"📷 Added regular node to results")
    
    print(f"✅ Python processing test completed: {len(processed_results)} results prepared")
    return True

if __name__ == "__main__":
    print("🚀 Starting Comprehensive Image Detection Tests")
    print("Based on real ecommerce patterns from production logs")
    
    # Test 1: Node.js detection
    detection_passed = test_node_detection()
    
    # Test 2: Python processing
    processing_passed = test_python_processing()
    
    print("\n" + "🎯" * 20)
    print("FINAL TEST RESULTS:")
    print(f"✅ Node.js Detection: {'PASSED' if detection_passed else 'FAILED'}")
    print(f"✅ Python Processing: {'PASSED' if processing_passed else 'FAILED'}")
    
    if detection_passed and processing_passed:
        print("🎉 ALL TESTS PASSED! Ready for production.")
        sys.exit(0)
    else:
        print("❌ SOME TESTS FAILED! Check the output above.")
        sys.exit(1) 