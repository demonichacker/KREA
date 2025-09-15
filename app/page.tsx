import { Navigation } from "@/components/navigation"
import { HeroCards } from "@/components/hero-cards"
import { ToolGrid } from "@/components/tool-grid"
import { GallerySection } from "@/components/gallery-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container max-w-screen-2xl mx-auto px-4 py-8 space-y-12">
        {/* Hero Cards Section */}
        <section>
          <HeroCards />
        </section>

        {/* Tools Section */}
        <section>
          <ToolGrid />
        </section>

        {/* Gallery Section */}
        <section>
          <GallerySection />
        </section>
      </main>

      <Footer />
    </div>
  )
}
