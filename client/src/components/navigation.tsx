import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-200 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">Gliding</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("features")}
                className="text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection("benefits")}
                className="text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection("waitlist")}
                className="text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Join Waitlist
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="bg-primary text-white hover:bg-primary/90 transition-all duration-200 transform hover:scale-105">
              Download App
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <button
                onClick={() => scrollToSection("features")}
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection("waitlist")}
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors duration-200"
              >
                Join Waitlist
              </button>
              <div className="px-3 py-2">
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  Download App
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
