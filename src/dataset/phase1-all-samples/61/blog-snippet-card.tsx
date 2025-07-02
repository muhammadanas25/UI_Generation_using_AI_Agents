import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="p-4 md:p-6 lg:p-8 flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="p-4 md:p-6">
          <CardTitle className="text-xl md:text-2xl font-bold leading-tight">The Future of AI in Web Development</CardTitle>
        </CardHeader>
        <CardContent className="p-4 md:p-6">
          <p className="text-sm md:text-base text-muted-foreground">
            Artificial Intelligence is revolutionizing the way we build and interact with websites.
            From intelligent chatbots to personalized user experiences, AI is shaping the future of web development.
            In this post, we explore the latest trends and technologies that are...
          </p>
        </CardContent>
        <CardFooter className="p-4 md:p-6">
          <Button variant="outline" className="w-full md:w-auto">Read More</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

