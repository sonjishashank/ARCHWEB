import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavigationMenu } from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="/" className="text-2xl font-semibold">
          Ar. Supriya Biradar
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-neutral-900 hover:text-neutral-600">Home</a>
          <a href="/projects" className="text-neutral-900 hover:text-neutral-600">Projects</a>
          <a href="/about" className="text-neutral-900 hover:text-neutral-600">About</a>
          <a href="/services" className="text-neutral-900 hover:text-neutral-600">Services</a>
          <a href="/contact" className="text-neutral-900 hover:text-neutral-600">Contact</a>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col space-y-4 mt-8">
              <a href="/" className="text-lg">Home</a>
              <a href="/projects" className="text-lg">Projects</a>
              <a href="/about" className="text-lg">About</a>
              <a href="/services" className="text-lg">Services</a>
              <a href="/contact" className="text-lg">Contact</a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}