import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import logoUSM from "@/assets/logo-usm.png";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Becas y Beneficios", href: "/becas" },
  { name: "Salud y Apoyo Psicológico", href: "/salud" },
  { name: "Calendario de Eventos", href: "/eventos" },
];

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#003057] backdrop-blur supports-[backdrop-filter]:bg-[#003057]/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-auto min-h-16 items-center justify-between gap-3 py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center hover-scale flex-shrink-0">
            <img 
              src={logoUSM} 
              alt="Universidad Técnica Federico Santa María" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation - Always visible, can wrap */}
          <nav className="flex items-center justify-center gap-2 flex-wrap flex-1 max-w-3xl">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-2 py-1.5 text-xs font-medium rounded-md transition-smooth whitespace-nowrap ${
                  isActive(item.href)
                    ? "bg-white/20 text-white"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar - Right side */}
          {/*
          <div className="flex items-center flex-shrink-0">
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Buscar..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-40 pl-10 pr-10"
                      autoFocus
                      onBlur={() => {
                        if (!searchQuery) {
                          setIsSearchOpen(false);
                        }
                      }}
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="ml-1 text-white hover:bg-white/10 p-1"
                  >
                    ×
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-white hover:bg-white/10"
                >
                  <Search className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
          */}
        </div>
      </div>
    </header>
  );
}