import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-display font-bold text-xl"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-50"></div>
            <div className="relative bg-background rounded-lg p-1.5">
              <Brain className="w-6 h-6 text-primary" />
            </div>
          </div>
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            TradeNova
          </span>
        </Link>

        <nav className="flex items-center gap-6 ml-auto">
          <Link
            to="/"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link
            to="/predict"
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            Predict
          </Link>
          <Button className="btn-gradient px-6">Get Started</Button>
        </nav>
      </div>
    </header>
  );
}
