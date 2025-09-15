"use client"

import { Button } from "@/components/ui/button"
import { Home, FolderOpen, Video, Edit3, Check, Type, Archive, Bell, Settings, User, ChevronDown, Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Image from "next/image"

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="sticky top-0 z-50 w-full bg-background border-b border-border/20 transition-all duration-300">
      <div className="flex h-12 w-full max-w-screen-2xl mx-auto items-center justify-between px-2 sm:px-4">
        {/* Left section - Logo and user */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2">
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
            {!mounted && <div className="h-6 w-6 rounded-full bg-primary/20 animate-pulse" />}
          </div>

          <Button
            variant="ghost"
            className="hidden sm:flex h-8 px-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
          >
            <span>benevolentartbebop</span>
            <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200" />
          </Button>
        </div>

        {/* Center section - Tool icons (hidden on mobile) */}
        <div className="hidden lg:flex items-center gap-1 p-2 rounded-xl border border-transparent hover:border-border/40 hover:bg-accent/60 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground group-hover:bg-accent/50 hover:bg-accent/70 transition-all duration-200"
          >
            <Home className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground group-hover:bg-accent/50 hover:bg-accent/70 transition-all duration-200"
          >
            <FolderOpen className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground group-hover:bg-accent/50 hover:bg-accent/70 transition-all duration-200"
          >
            <Video className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground group-hover:bg-accent/50 hover:bg-accent/70 transition-all duration-200"
          >
            <Edit3 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground group-hover:bg-accent/50 hover:bg-accent/70 transition-all duration-200"
          >
            <Check className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground group-hover:bg-accent/50 hover:bg-accent/70 transition-all duration-200"
          >
            <Type className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground group-hover:bg-accent/50 hover:bg-accent/70 transition-all duration-200"
          >
            <Archive className="h-4 w-4" />
          </Button>
        </div>

        {/* Right section - User actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          <Button
            variant="ghost"
            className="hidden md:flex h-8 px-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
          >
            Gallery
          </Button>
          <Button
            variant="ghost"
            className="hidden md:flex h-8 px-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
          >
            Support
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
          >
            <Bell className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )
            ) : (
              <div className="h-4 w-4 rounded-full bg-muted animate-pulse" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
          >
            <Settings className="h-4 w-4" />
          </Button>
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
            <User className="h-3 w-3 text-white" />
          </div>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200 ml-1"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/20 bg-background/95 backdrop-blur-sm">
          <div className="w-full max-w-screen-2xl mx-auto px-4 py-3">
            {/* User section for mobile */}
            <div className="sm:hidden mb-3 pb-3 border-b border-border/20">
              <Button
                variant="ghost"
                className="w-full justify-start h-8 px-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
              >
                <span>benevolentartbebop</span>
                <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200" />
              </Button>
            </div>
            
            {/* Tool icons for mobile */}
            <div className="grid grid-cols-4 gap-2 mb-3">
              <Button
                variant="ghost"
                size="sm"
                className="h-10 flex flex-col gap-1 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
              >
                <Home className="h-4 w-4" />
                <span className="text-xs">Home</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-10 flex flex-col gap-1 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
              >
                <FolderOpen className="h-4 w-4" />
                <span className="text-xs">Files</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-10 flex flex-col gap-1 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
              >
                <Video className="h-4 w-4" />
                <span className="text-xs">Video</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-10 flex flex-col gap-1 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
              >
                <Edit3 className="h-4 w-4" />
                <span className="text-xs">Edit</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-10 flex flex-col gap-1 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
              >
                <Check className="h-4 w-4" />
                <span className="text-xs">Check</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-10 flex flex-col gap-1 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
              >
                <Type className="h-4 w-4" />
                <span className="text-xs">Type</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-10 flex flex-col gap-1 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
              >
                <Archive className="h-4 w-4" />
                <span className="text-xs">Archive</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="sm:hidden h-10 flex flex-col gap-1 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
              >
                <Bell className="h-4 w-4" />
                <span className="text-xs">Alerts</span>
              </Button>
            </div>
            
            {/* Additional options for mobile */}
            <div className="space-y-1 pt-2 border-t border-border/20">
              <Button
                variant="ghost"
                className="md:hidden w-full justify-start h-8 px-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
              >
                Gallery
              </Button>
              <Button
                variant="ghost"
                className="md:hidden w-full justify-start h-8 px-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
              >
                Support
              </Button>
              <Button
                variant="ghost"
                className="sm:hidden w-full justify-start h-8 px-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
              >
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
