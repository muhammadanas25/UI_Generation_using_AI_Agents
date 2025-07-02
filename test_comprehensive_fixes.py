#!/usr/bin/env python3
"""
Comprehensive test script using ORIGINAL GENERATED CODE
Tests all fixes on real-world scenarios from the provided JSON responses
"""

import json
import subprocess
import sys
import os
import re

# Real code samples from the provided JSON responses
ORIGINAL_CODE_SAMPLES = {
    "image_gallery_with_loops": '''
import React, { useState } from 'react';
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronUp, X } from "lucide-react"

const images = [
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
  "/placeholder.svg?height=300&width=400",
]

export default function ImageGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  const openModal = (image: string) => {
    setActiveImage(image);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveImage("");
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 py-4 shadow-md bg-background">
        <h1 className="text-2xl font-bold">Image Gallery</h1>
      </header>
      <main className="flex-grow">
        <ScrollArea className="h-[300px] md:h-[500px] p-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="object-cover w-full h-full cursor-pointer transition-transform hover:scale-105"
                  width={400}
                  height={400}
                  onClick={() => openModal(image)}
                />
              </div>
            ))}
          </div>
        </ScrollArea>
      </main>
      <footer className="px-4 py-4 bg-background">
        <Button onClick={scrollToTop} className="fixed bottom-4 right-4">
          Scroll to Top
          <ChevronUp className="ml-2 h-4 w-4" />
        </Button>
      </footer>
      <Dialog open={isModalOpen} onOpenChange={closeModal}>
        <DialogContent className="max-w-4xl w-full p-0">
          <DialogHeader>
            <DialogTitle className="sr-only">Image Viewer</DialogTitle>
          </DialogHeader>
          <div className="relative">
            <Image
              src={activeImage}
              alt="Active"
              className="object-cover w-full h-[80vh]"
              width={800}
              height={600}
            />
            <Button
              variant="outline"
              className="absolute top-4 right-4 rounded-full"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
''',

    "car_selling_with_loops": '''
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Car, Search, User, Star, Menu, X, ShoppingCart } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cars = [
    {
      id: 1,
      name: "2023 Tesla Model S",
      price: "$89,999",
      image: "/placeholder.png",
      rating: 4.8
    },
    {
      id: 2,
      name: "2020 Ford F-150",
      price: "$38,500",
      image: "/placeholder.png",
      rating: 4.5
    },
    {
      id: 3,
      name: "2019 Honda CR-V",
      price: "$27,999",
      image: "/placeholder.png",
      rating: 4.7
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1">
        <section className="w-full py-12 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Listings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cars.map((car) => (
                <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-800">{car.name}</h3>
                    <div className="flex items-center mt-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm text-gray-600 ml-1">{car.rating}</span>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="font-bold text-indigo-600">{car.price}</span>
                      <Button size="sm" variant="secondary">View Details</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
''',

    "simple_component_no_loops": '''
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from 'lucide-react';

export default function SimpleComponent() {
  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <img src="/hero-image.jpg" alt="Hero Image" className="w-full h-48 object-cover rounded" />
          <p className="mt-4">This is a simple component.</p>
          <Button className="mt-4">
            <Search className="h-4 w-4 mr-2" />
            Get Started
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
''',

    "problematic_code_with_text_tags": '''// Warning: Code validation had issues but proceeding with original code
<text>Here's a simple image gallery website using React, ShadCN, and Tailwind CSS.</text>

<code>
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Search, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Component() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages = [
    '/gallery1.jpg',
    '/gallery2.jpg',
    '/gallery3.jpg',
    '/gallery4.jpg',
    '/gallery5.jpg',
    '/gallery6.jpg'
  ].filter(img => img.includes(searchQuery))

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Gallery</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredImages.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-lg"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer hover:shadow-2xl transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-pink-500">Featured Image {index + 1}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <img
                          alt={`Gallery image ${index + 1}`}
                          className="aspect-video object-cover rounded-lg"
                          src={img}
                          onClick={() => setSelectedImage(img)}
                        />
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0">
                    <img src={selectedImage} alt={`Large view of image ${index + 1}`} className="w-full h-auto" />
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
</code>'''
}

def test_import_extraction_on_original_code():
    """Test import extraction on all original code samples"""
    print("🔍 Testing Import Extraction on Original Generated Code")
    print("=" * 60)
    
    passed = 0
    total = len(ORIGINAL_CODE_SAMPLES)
    
    for sample_name, code in ORIGINAL_CODE_SAMPLES.items():
        print(f"\n📄 Testing: {sample_name}")
        print("-" * 40)
        
        try:
            # Extract clean code first (handle <text> tags)
            test_code = code
            code_blocks = re.findall(r'<code>([\s\S]*?)</code>', code)
            if code_blocks:
                test_code = "\n".join(code_blocks)
                print("✅ Extracted code from <code> tags")
            
            # Test AI functions script
            result = subprocess.run(
                ['node', 'src/ai/functions/babel-import-util.js', test_code],
                capture_output=True,
                text=True,
                check=True
            )
            imports = json.loads(result.stdout)
            
            print(f"✅ Extracted {len(imports)} imports: {list(imports.keys())[:5]}...")
            
            # Verify format is correct (dict with import_name: source)
            if isinstance(imports, dict):
                print("✅ Correct dictionary format")
                
                # Check for expected imports
                expected_imports = []
                if 'React' in test_code:
                    expected_imports.append('React')
                if 'useState' in test_code:
                    expected_imports.append('useState')
                if 'Button' in test_code:
                    expected_imports.append('Button')
                
                found_expected = 0
                for expected in expected_imports:
                    if expected in imports:
                        found_expected += 1
                        print(f"  ✅ Found expected import: {expected} -> {imports[expected]}")
                    else:
                        print(f"  ⚠️  Missing expected import: {expected}")
                
                if found_expected > 0:
                    print(f"✅ Found {found_expected}/{len(expected_imports)} expected imports")
                    passed += 1
                else:
                    print("❌ No expected imports found")
            else:
                print("❌ Wrong format - not a dictionary")
                
        except subprocess.CalledProcessError as e:
            print(f"❌ Node.js script failed: {e}")
        except json.JSONDecodeError as e:
            print(f"❌ JSON parsing failed: {e}")
        except Exception as e:
            print(f"❌ Unexpected error: {e}")
    
    print(f"\n📊 Import Extraction Results: {passed}/{total} samples passed")
    return passed == total

def test_image_detection_scenarios():
    """Test image detection on various scenarios"""
    print("\n🖼️  Testing Image Detection on Original Code")
    print("=" * 50)
    
    test_cases = [
        {
            "name": "Loop Images (images.map)",
            "code": ORIGINAL_CODE_SAMPLES["image_gallery_with_loops"],
            "expected_types": ["loop"],
            "min_images": 1
        },
        {
            "name": "Loop Images (cars.map)",  
            "code": ORIGINAL_CODE_SAMPLES["car_selling_with_loops"],
            "expected_types": ["loop"],
            "min_images": 1
        },
        {
            "name": "Regular Images Only",
            "code": ORIGINAL_CODE_SAMPLES["simple_component_no_loops"],
            "expected_types": ["regular"],
            "min_images": 1
        },
        {
            "name": "Mixed Loop Images (filteredImages.map)",
            "code": ORIGINAL_CODE_SAMPLES["problematic_code_with_text_tags"],
            "expected_types": ["loop"],
            "min_images": 1
        }
    ]
    
    passed = 0
    total = len(test_cases)
    
    for test_case in test_cases:
        print(f"\n🔍 Testing: {test_case['name']}")
        print("-" * 30)
        
        try:
            # Extract code from <code> tags if present
            code = test_case['code']
            code_blocks = re.findall(r'<code>([\s\S]*?)</code>', code)
            if code_blocks:
                code = "\n".join(code_blocks)
                print("✅ Extracted code from <code> tags")
            
            # Test image detection
            result = subprocess.run(
                ['node', 'src/ai/functions/babel-img-util.js', code],
                capture_output=True,
                text=True,
                check=True
            )
            
            detected_nodes = json.loads(result.stdout)
            print(f"📊 Detected {len(detected_nodes)} image nodes")
            
            # Analyze detected nodes
            regular_images = 0
            loop_images = 0
            
            for node in detected_nodes:
                if isinstance(node, str):
                    try:
                        # Try to parse as JSON (loop image)
                        loop_data = json.loads(node)
                        if loop_data.get('type') == 'loop-image':
                            loop_images += 1
                            print(f"  🔄 Loop image: {loop_data.get('arraySource', 'unknown')}")
                        else:
                            regular_images += 1
                            print(f"  📷 Regular image: {node[:50]}...")
                    except json.JSONDecodeError:
                        # Regular string node
                        regular_images += 1
                        print(f"  📷 Regular image: {node[:50]}...")
                else:
                    regular_images += 1
                    print(f"  📷 Regular image: {str(node)[:50]}...")
            
            print(f"📈 Summary: {regular_images} regular, {loop_images} loop images")
            
            # Verify expectations
            success = True
            
            if len(detected_nodes) >= test_case['min_images']:
                print(f"✅ Found enough images ({len(detected_nodes)} >= {test_case['min_images']})")
            else:
                print(f"❌ Not enough images ({len(detected_nodes)} < {test_case['min_images']})")
                success = False
            
            expected_types = test_case['expected_types']
            if "regular" in expected_types and regular_images == 0:
                print("❌ Expected regular images but found none")
                success = False
            elif "regular" in expected_types and regular_images > 0:
                print(f"✅ Found expected regular images ({regular_images})")
                
            if "loop" in expected_types and loop_images == 0:
                print("❌ Expected loop images but found none")
                success = False
            elif "loop" in expected_types and loop_images > 0:
                print(f"✅ Found expected loop images ({loop_images})")
            
            if success:
                passed += 1
                print("✅ Test case PASSED")
            else:
                print("❌ Test case FAILED")
                
        except subprocess.CalledProcessError as e:
            print(f"❌ Node.js script failed: {e}")
        except json.JSONDecodeError as e:
            print(f"❌ JSON parsing failed: {e}")
        except Exception as e:
            print(f"❌ Unexpected error: {e}")
    
    print(f"\n📊 Image Detection Results: {passed}/{total} test cases passed")
    return passed == total

def test_code_extraction_and_cleaning():
    """Test code extraction from mixed content"""
    print("\n🧹 Testing Code Extraction and Cleaning")
    print("=" * 45)
    
    problematic_code = ORIGINAL_CODE_SAMPLES["problematic_code_with_text_tags"]
    
    print("📝 Testing extraction from problematic code with <text> tags...")
    
    try:
        # Test our extraction logic
        code_blocks = re.findall(r'<code>([\s\S]*?)</code>', problematic_code)
        if code_blocks:
            clean_code = "\n".join(code_blocks)
            print("✅ Successfully extracted code from <code> tags")
            print(f"📄 Clean code length: {len(clean_code)} characters")
            
            # Verify the clean code has no <text> tags
            if '<text>' in clean_code:
                print("❌ Clean code still contains <text> tags")
                return False
            else:
                print("✅ Clean code is free of <text> tags")
            
            # Test that import extraction works on clean code
            result = subprocess.run(
                ['node', 'src/ai/functions/babel-import-util.js', clean_code],
                capture_output=True,
                text=True,
                check=True
            )
            imports = json.loads(result.stdout)
            print(f"✅ Successfully extracted imports from clean code: {len(imports)} imports")
            
            # Test that image detection works on clean code
            result = subprocess.run(
                ['node', 'src/ai/functions/babel-img-util.js', clean_code],
                capture_output=True,
                text=True,
                check=True
            )
            images = json.loads(result.stdout)
            print(f"✅ Successfully detected images in clean code: {len(images)} images")
            
            return True
        else:
            print("❌ Failed to extract code blocks")
            return False
            
    except Exception as e:
        print(f"❌ Code extraction test failed: {e}")
        return False

def test_consistency_between_scripts():
    """Test that both babel import scripts return same format"""
    print("\n🔄 Testing Script Consistency")
    print("=" * 35)
    
    test_code = ORIGINAL_CODE_SAMPLES["simple_component_no_loops"]
    
    try:
        # Test AI functions script
        result1 = subprocess.run(
            ['node', 'src/ai/functions/babel-import-util.js', test_code],
            capture_output=True,
            text=True,
            check=True
        )
        imports1 = json.loads(result1.stdout)
        
        # Test root script  
        result2 = subprocess.run(
            ['node', 'src/babel-import-util.js', test_code],
            capture_output=True,
            text=True,
            check=True
        )
        imports2 = json.loads(result2.stdout)
        
        print(f"📊 AI Functions Script: {len(imports1)} imports")
        print(f"📊 Root Script: {len(imports2)} imports")
        
        if imports1 == imports2:
            print("✅ Both scripts return identical results!")
            return True
        else:
            print("❌ Scripts return different results!")
            print(f"   AI Functions: {imports1}")
            print(f"   Root: {imports2}")
            return False
            
    except Exception as e:
        print(f"❌ Consistency test failed: {e}")
        return False

def main():
    """Run all comprehensive tests"""
    print("🚀 COMPREHENSIVE TESTING OF ALL FIXES")
    print("🔧 Testing with ORIGINAL GENERATED CODE")
    print("=" * 80)
    
    tests = [
        ("Import Extraction on Original Code", test_import_extraction_on_original_code),
        ("Image Detection Scenarios", test_image_detection_scenarios),
        ("Code Extraction and Cleaning", test_code_extraction_and_cleaning),
        ("Script Consistency", test_consistency_between_scripts),
    ]
    
    passed = 0
    total = len(tests)
    
    for test_name, test_func in tests:
        print(f"\n🧪 Running: {test_name}")
        try:
            if test_func():
                print(f"✅ {test_name}: PASSED")
                passed += 1
            else:
                print(f"❌ {test_name}: FAILED")
        except Exception as e:
            print(f"❌ {test_name}: ERROR - {e}")
    
    print(f"\n" + "=" * 80)
    print(f"📊 FINAL RESULTS: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 ALL TESTS PASSED! All fixes work correctly with original code.")
        print("✅ Import format is consistent")
        print("✅ Image detection works for both loops and regular images") 
        print("✅ Code extraction handles problematic content")
        print("✅ Scripts are consistent between versions")
        return True
    else:
        print("⚠️  Some tests failed. Check the output above for details.")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1) 