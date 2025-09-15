export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-primary" />
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
