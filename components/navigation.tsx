"use client"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Search, Bell, User, Menu, Home, Zap, ImageIcon, Users } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Image from "next/image"

export function Navigation() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2 transition-all duration-300" href="/">
            {mounted && (
              <div className="relative h-6 w-6 transition-all duration-300">
                <Image
                  src={theme === "dark" ? "/images/krea-logo-dark.png" : "/images/krea-logo-light.png"}
                  alt="Krea AI"
                  width={24}
                  height={24}
                  className="transition-all duration-300"
                />
              </div>
            )}
            {!mounted && <div className="h-6 w-6 rounded bg-primary animate-pulse" />}
            <span className="hidden font-bold sm:inline-block transition-colors duration-300">Krea AI</span>
          </a>
          <nav className="flex items-center gap-6 text-sm">
            <a className="transition-colors duration-300 hover:text-foreground/80 text-foreground/60" href="/">
              <Home className="h-4 w-4 transition-all duration-300" />
            </a>
            <a className="transition-colors duration-300 hover:text-foreground/80 text-foreground/60" href="/models">
              <Zap className="h-4 w-4 transition-all duration-300" />
            </a>
            <a className="transition-colors duration-300 hover:text-foreground/80 text-foreground/60" href="/gallery">
              <ImageIcon className="h-4 w-4 transition-all duration-300" />
            </a>
            <a className="transition-colors duration-300 hover:text-foreground/80 text-foreground/60" href="/community">
              <Users className="h-4 w-4 transition-all duration-300" />
            </a>
          </nav>
        </div>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden transition-all duration-300"
        >
          <Menu className="h-5 w-5 transition-all duration-300" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button
              variant="outline"
              className="relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64 transition-all duration-300 hover:bg-accent/50"
            >
              <Search className="mr-2 h-4 w-4 transition-all duration-300" />
              <span className="hidden lg:inline-flex">Search models...</span>
              <span className="inline-flex lg:hidden">Search...</span>
              <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex transition-all duration-300">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
          </div>
          <nav className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 transition-all duration-300 hover:bg-accent/50">
              <Bell className="h-4 w-4 transition-all duration-300" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 transition-all duration-300 hover:bg-accent/50">
              <User className="h-4 w-4 transition-all duration-300" />
              <span className="sr-only">User menu</span>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </nav>
  )
}
