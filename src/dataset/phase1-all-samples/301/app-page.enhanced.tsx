"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const creators = [
  {
    id: 1,
    name: "Alice's Tech Blog",
    description: "Latest in tech and programming",
    price: 10,
    image: "/images/alice.jpg",
  },
  {
    id: 2,
    name: "Bob's Cooking Channel",
    description: "Delicious recipes and cooking tips",
    price: 5,
    image: "/images/bob.jpg",
  },
  {
    id: 3,
    name: "Carol's Fitness Journey",
    description: "Workout routines and health advice",
    price: 8,
    image: "/images/carol.jpg",
  },
  {
    id: 4,
    name: "Dave's Travel Diaries",
    description: "Exploring the world one place at a time",
    price: 7,
    image: "/images/dave.jpg",
  },
  {
    id: 5,
    name: "Eve's Art Gallery",
    description: "Showcasing stunning digital art",
    price: 12,
    image: "/images/eve.jpg",
  },
];

export default function Component() {
  const [search, setSearch] = useState("");

  const filteredCreators = creators.filter(
    (creator) =>
      creator.name.toLowerCase().includes(search.toLowerCase()) ||
      creator.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-6 sm:px-6 lg:px-8">
      <header className="flex flex-col items-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-2 sm:mb-4 text-center">
          SubChain
        </h1>
        <p className="text-base sm:text-lg text-gray-600 text-center">
          Decentralized Subscription Service
        </p>
        <div className="mt-4 sm:mt-6 w-full max-w-md">
          <div className="relative">
            <Input
              placeholder="Search creators..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 focus:border-indigo-500 rounded-md"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
      </header>
      <main>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 text-center sm:text-left">
          Content Creators
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredCreators.map((creator) => (
            <Card
              key={creator.id}
              className="transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <CardHeader className="relative h-48 p-0">
                <Image
                  src={creator.image}
                  alt={creator.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-4 rounded-b-lg">
                  <CardTitle className="text-white text-lg sm:text-xl">
                    {creator.name}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="py-4">
                <CardDescription className="text-gray-600 text-sm sm:text-base">
                  {creator.description}
                </CardDescription>
                <p className="mt-4 text-lg sm:text-xl font-bold text-indigo-600">
                  {creator.price} tokens/month
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/creator/${creator.id}`}
                  passHref
                  className="w-full"
                >
                  <Button className="w-full transition-colors duration-200 hover:bg-indigo-700">
                    Subscribe Now
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <footer className="mt-8 sm:mt-12 text-center text-gray-500 text-sm sm:text-base">
        © {new Date().getFullYear()} SubChain. All rights reserved.
      </footer>
    </div>
  );
}
