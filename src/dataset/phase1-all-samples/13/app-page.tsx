import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// This would typically come from a database or API
const poems = [
  { id: 1, title: "Whispers of Dawn", author: "Emily Frost", excerpt: "Soft hues paint the sky..." },
  { id: 2, title: "Urban Symphony", author: "Michael Stone", excerpt: "Concrete jungles hum..." },
  { id: 3, title: "Oceanic Dreams", author: "Sophia Waters", excerpt: "Waves crash, dreams unfold..." },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="py-4 sm:py-6 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-gray-800">VerseVault</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {poems.map((poem) => (
            <Card key={poem.id} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="font-serif text-lg sm:text-xl">{poem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">by {poem.author}</p>
                <p className="text-sm sm:text-base text-gray-700">{poem.excerpt}</p>
                <Link
                  href={`/poem/${poem.id}`}
                  className="inline-block mt-3 sm:mt-4 text-sm text-blue-600 hover:underline"
                >
                  Read more
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

