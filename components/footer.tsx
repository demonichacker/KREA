"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Image from "next/image"

export function Footer() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-2">
          {mounted && (
            <div className="relative h-5 w-5 transition-all duration-300">
              <Image
                src={theme === "dark" ? "/images/krea-logo-dark.png" : "/images/krea-logo-light.png"}
                alt="Krea AI"
                width={20}
                height={20}
                className="transition-all duration-300"
              />
            </div>
          )}
          {!mounted && <div className="h-5 w-5 rounded bg-primary/20 animate-pulse" />}
          <span className="font-bold text-sm">Krea AI</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>created by</span>
          <div className="flex items-center gap-1 font-medium text-foreground">
            <div className="h-4 w-4 rounded bg-foreground" />
            <span>Mobbin</span>
          </div>
        </div>
      </div>
    </footer>
  )
}