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
  { name: "Deportes y Cultura", href: "/deportes", showPopup: true, description: "Sección de deportes, actividades culturales y recreativas para estudiantes." },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (item: typeof navigation[0], e: React.MouseEvent) => {
    if (item.showPopup) {
      e.preventDefault();
      toast({
        title: item.name,
        description: item.description,
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#003057] backdrop-blur supports-[backdrop-filter]:bg-[#003057]/95">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center hover-scale flex-shrink-0">
            <img 
              src={logoUSM} 
              alt="Universidad Técnica Federico Santa María" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation - Always visible */}
          <nav className="flex items-center space-x-4 flex-1 justify-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-smooth whitespace-nowrap ${
                  isActive(item.href)
                    ? "bg-white/20 text-white"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
                onClick={(e) => handleNavClick(item, e)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar - Right side */}
          <div className="flex items-center flex-shrink-0">
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Buscar servicios..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-64 pl-10 pr-10"
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
                    className="ml-2 text-white hover:bg-white/10"
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
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}