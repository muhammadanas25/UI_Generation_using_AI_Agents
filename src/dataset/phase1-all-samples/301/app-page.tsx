import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const creators = [
  { id: 1, name: "Alice's Tech Blog", description: "Latest in tech and programming", price: 10 },
  { id: 2, name: "Bob's Cooking Channel", description: "Delicious recipes and cooking tips", price: 5 },
  { id: 3, name: "Carol's Fitness Journey", description: "Workout routines and health advice", price: 8 },
]

export default function Component() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">SubChain Content Creators</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {creators.map((creator) => (
          <Card key={creator.id}>
            <CardHeader>
              <CardTitle>{creator.name}</CardTitle>
              <CardDescription>{creator.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{creator.price} tokens/month</p>
            </CardContent>
            <CardFooter>
              <Link href={`/creator/${creator.id}`} passHref>
                <Button className="w-full">View Creator</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}