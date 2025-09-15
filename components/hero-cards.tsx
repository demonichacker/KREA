"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

export function HeroCards() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" })
    }
  }

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* WAN 2.2 Card */}
        <Card className="relative min-w-[45vw] max-w-[45vw] flex-shrink-0 snap-start overflow-hidden bg-gradient-to-br from-orange-500/20 to-pink-500/20 border-0 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group">
          <div className="absolute inset-0 transition-all duration-500 group-hover:scale-105">
            <img
              src="/portrait-woman-with-flowing-hair-artistic-lighting.jpg"
              alt="WAN 2.2 Model"
              className="h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500" />
          </div>
          <div className="relative p-6 h-[300px] flex flex-col justify-end transition-all duration-300">
            <Badge className="w-fit mb-3 bg-black/60 text-white border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-black/70">
              FEATURED MODEL
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-2 transition-all duration-300 group-hover:text-orange-100">
              WAN 2.2
            </h2>
            <p className="text-white/90 mb-4 text-sm transition-all duration-300">WAN 2.2 Image generation</p>
            <p className="text-white/80 text-xs mb-4 leading-relaxed transition-all duration-300">
              Generate complex images with the latest raw and powerful WAN 2.2 model. Exceptional prompt adherence and
              ultra-high quality.
            </p>
            <Button className="w-fit bg-white text-black hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Try WAN 2.2
            </Button>
          </div>
        </Card>

        {/* Anime Character Card */}
        <Card className="relative min-w-[45vw] max-w-[45vw] flex-shrink-0 snap-start overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-0 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group">
          <div className="absolute inset-0 transition-all duration-500 group-hover:scale-105">
            <img
              src="/anime-character-with-blonde-hair-and-headband-ninj.jpg"
              alt="Anime Model"
              className="h-full w-full object-cover opacity-70 transition-all duration-500 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500" />
          </div>
          <div className="relative p-6 h-[300px] flex flex-col justify-end transition-all duration-300">
            <Badge className="w-fit mb-3 bg-black/60 text-white border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-black/70">
              ANIME MODEL
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-2 transition-all duration-300 group-hover:text-blue-100">
              Anime Pro
            </h2>
            <p className="text-white/90 mb-4 text-sm transition-all duration-300">Specialized anime generation</p>
            <p className="text-white/80 text-xs mb-4 leading-relaxed transition-all duration-300">
              Create stunning anime characters and scenes with perfect style consistency and detailed artwork.
            </p>
            <Button className="w-fit bg-white text-black hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Generate Anime
            </Button>
          </div>
        </Card>

        {/* FLUX1 Krea Card */}
        <Card className="relative min-w-[45vw] max-w-[45vw] flex-shrink-0 snap-start overflow-hidden bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-0 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group">
          <div className="absolute inset-0 transition-all duration-500 group-hover:scale-105">
            <img
              src="/luxury-whiskey-bottle-on-dark-background-with-gold.jpg"
              alt="FLUX1 Krea Model"
              className="h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500" />
          </div>
          <div className="relative p-6 h-[300px] flex flex-col justify-end transition-all duration-300">
            <Badge className="w-fit mb-3 bg-black/60 text-white border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-black/70">
              FLUX MODEL
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-2 transition-all duration-300 group-hover:text-amber-100">
              Open Sour
            </h2>
            <p className="text-white/90 mb-4 text-sm transition-all duration-300">FLUX1 Krea</p>
            <p className="text-white/80 text-xs mb-4 leading-relaxed transition-all duration-300">
              Ultra-realistic product photography and commercial imagery with our model tailored for technical accuracy.
            </p>
            <Button className="w-fit bg-white text-black hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Try FLUX1
            </Button>
          </div>
        </Card>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm border hover:bg-background/90 transition-all duration-300 hover:scale-110 hover:shadow-lg"
      >
        <ChevronLeft className="h-4 w-4 transition-all duration-300" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm border hover:bg-background/90 transition-all duration-300 hover:scale-110 hover:shadow-lg"
      >
        <ChevronRight className="h-4 w-4 transition-all duration-300" />
      </Button>
    </div>
  )
}
