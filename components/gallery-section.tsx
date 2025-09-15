"use client"

import { Button } from "@/components/ui/button"
import { User, Heart, Share } from "lucide-react"

export function GallerySection() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Gallery</h2>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4 mr-1" />
            User
          </Button>
          <Button variant="ghost" size="sm">
            <Share className="h-4 w-4 mr-1" />
            Pricing
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="group relative aspect-square overflow-hidden rounded-lg bg-muted">
            <img
              src={`/ai-generated-art.png?height=200&width=200&query=AI generated art ${i + 1}`}
              alt={`Gallery image ${i + 1}`}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="ghost" size="icon" className="h-6 w-6 bg-white/20 backdrop-blur-sm">
                <Heart className="h-3 w-3 text-white" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
