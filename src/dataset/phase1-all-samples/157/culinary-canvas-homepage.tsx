import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChefHat, PlayCircle, Utensils } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">CulinaryCanvas</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#dishes" className="text-gray-600 hover:text-gray-900">Signature Dishes</a></li>
              <li><a href="#videos" className="text-gray-600 hover:text-gray-900">Cooking Videos</a></li>
              <li><a href="#collaborations" className="text-gray-600 hover:text-gray-900">Collaborations</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-20">
          <div className="container mx-auto px-4 flex items-center">
            <div className="w-1/2">
              <h2 className="text-4xl font-bold mb-4">Welcome to My Culinary World</h2>
              <p className="text-xl mb-6">Explore the art of flavor through my signature dishes, cooking videos, and restaurant collaborations.</p>
              <Button variant="secondary" size="lg">Explore Dishes</Button>
            </div>
            <div className="w-1/2">
              <img src="/placeholder.svg?height=400&width=600" alt="Featured Dish" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        <section id="dishes" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Signature Dishes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Truffle Risotto", description: "Creamy Arborio rice with black truffle" },
                { title: "Seared Scallops", description: "Pan-seared scallops with cauliflower purée" },
                { title: "Chocolate Soufflé", description: "Light and airy chocolate dessert" }
              ].map((dish, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{dish.title}</CardTitle>
                    <CardDescription>{dish.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img src={`/placeholder.svg?height=200&width=300`} alt={dish.title} className="rounded-lg" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="videos" className="bg-gray-200 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Cooking Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Mastering the Perfect Steak", duration: "15:30" },
                { title: "Quick and Easy Pasta Dishes", duration: "12:45" },
                { title: "Baking 101: Artisan Bread", duration: "20:15" },
                { title: "Sushi Rolling Techniques", duration: "18:00" }
              ].map((video, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <PlayCircle className="mr-2" />
                      {video.title}
                    </CardTitle>
                    <CardDescription>Duration: {video.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img src={`/placeholder.svg?height=200&width=400`} alt={video.title} className="rounded-lg" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="collaborations" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Restaurant Collaborations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Bistro Nouveau", location: "Paris, France" },
                { name: "Sakura Sushi", location: "Tokyo, Japan" },
                { name: "Rustic Table", location: "Tuscany, Italy" }
              ].map((restaurant, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Utensils className="mr-2" />
                      {restaurant.name}
                    </CardTitle>
                    <CardDescription>{restaurant.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img src={`/placeholder.svg?height=200&width=300`} alt={restaurant.name} className="rounded-lg" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">CulinaryCanvas</h3>
              <p>Elevating the art of cooking, one dish at a time.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Contact</h4>
              <p>Email: chef@culinarycanvas.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">Instagram</a>
                <a href="#" className="hover:text-gray-300">YouTube</a>
                <a href="#" className="hover:text-gray-300">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}