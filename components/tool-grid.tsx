"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ImageIcon, VideoIcon, Palette, Wand2, Layers, Zap, ArrowRight, ExternalLink, Mic } from "lucide-react"

const tools = [
  {
    name: "Image",
    description: "Create images with AI models",
    icon: ImageIcon,
    badge: "NEW",
    action: "Open",
    iconColor: "bg-gradient-to-br from-gray-300 to-gray-500",
    iconTextColor: "text-white",
  },
  {
    name: "Video",
    description: "Generate videos with Haiper, Kling, and more",
    icon: VideoIcon,
    badge: null,
    action: "Open",
    iconColor: "bg-yellow-500",
    iconTextColor: "text-white",
  },
  {
    name: "Realtime",
    description: "Real-time rendering as a camera",
    icon: Zap,
    badge: null,
    action: "Open",
    iconColor: "bg-sky-400",
    iconTextColor: "text-white",
  },
  {
    name: "Enhancer",
    description: "Enhance and upscale images and videos",
    icon: Wand2,
    badge: "NEW",
    action: "Open",
    iconColor: "bg-gradient-to-br from-gray-300 to-gray-500",
    iconTextColor: "text-white",
  },
  {
    name: "Edit",
    description: "Edit images with AI without prompts and generations",
    icon: Palette,
    badge: "NEW",
    action: "Open",
    iconColor: "bg-gradient-to-br from-purple-500 to-purple-700",
    iconTextColor: "text-white",
  },
  {
    name: "Video Lipsync",
    description: "Sync audio with video using AI lip-sync technology",
    icon: Mic,
    badge: "NEW",
    action: "Open",
    iconColor: "bg-gradient-to-br from-green-500 to-green-700",
    iconTextColor: "text-white",
  },
  {
    name: "Motion Transfer",
    description: "Transfer motion from one video to another",
    icon: Layers,
    badge: "NEW",
    action: "Open",
    iconColor: "bg-gray-500",
    iconTextColor: "text-white",
  },
  {
    name: "Train",
    description: "Train your own AI model to replicate your style, products, or characters",
    icon: Zap,
    badge: null,
    action: "Open",
    iconColor: "bg-primary/10 group-hover:bg-primary/20",
    iconTextColor: "text-primary",
  },
]

export function ToolGrid() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold transition-colors duration-300">Generate</h2>
        <Button
          variant="ghost"
          className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
        >
          View all
          <ArrowRight className="ml-1 h-3 w-3 transition-all duration-300" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {tools.map((tool) => {
          const IconComponent = tool.icon
          return (
            <Card
              key={tool.name}
              className="p-4 hover:bg-accent/50 transition-all duration-300 cursor-pointer group hover:scale-[1.02] hover:shadow-lg border-border/50 hover:border-border"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg transition-all duration-300 group-hover:scale-110 ${tool.iconColor}`}>
                    <IconComponent
                      className={`h-4 w-4 transition-all duration-300 group-hover:scale-110 ${tool.iconTextColor}`}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm transition-colors duration-300">{tool.name}</span>
                    {tool.badge && (
                      <Badge
                        variant="secondary"
                        className="text-xs px-1.5 py-0.5 h-5 transition-all duration-300 group-hover:scale-105"
                      >
                        {tool.badge}
                      </Badge>
                    )}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-105"
                >
                  {tool.action}
                  <ExternalLink className="ml-1 h-3 w-3 transition-all duration-300" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed transition-colors duration-300">
                {tool.description}
              </p>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
