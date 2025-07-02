import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-background">
      <header className="bg-foreground/5 py-4">
        <div className="container px-4 sm:px-6">
          <nav className="flex items-center justify-between">
            <a href="#" className="text-lg font-bold">
              PixelArt
            </a>
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="about" className="py-8 sm:py-12">
        <div className="container px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">About PixelArt</h2>
          <div className="space-y-4 text-base sm:text-lg">
            <p>
              PixelArt is a digital artist specializing in creating vibrant and nostalgic pixel art. With a passion for
              retro gaming aesthetics and modern pixel art techniques, PixelArt brings imagination to life one pixel at
              a time.
            </p>
            <p>
              From character designs to expansive landscapes, each piece is crafted with attention to detail and a love
              for the art form. Commission PixelArt for your next project and add a touch of pixelated magic to your
              world.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-muted py-6">
        <div className="container px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left text-sm leading-loose text-muted-foreground">
            © 2023 PixelArt. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

