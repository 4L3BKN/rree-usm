import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Becas y Beneficios", href: "/becas" },
  { name: "Salud y Apoyo Psicológico", href: "/salud" },
  { name: "Eventos", href: "/eventos" },
  { name: "Deportes y Cultura", href: "/deportes", showPopup: true, description: "Sección de deportes, actividades culturales y recreativas para estudiantes." },
  { name: "Acompañamiento Estudiantil", href: "/acompanamiento", showPopup: true, description: "Servicios de tutoría, orientación académica y apoyo estudiantil personalizado." },
  { name: "Contacto", href: "/contacto" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover-scale">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
              <span className="text-lg font-bold text-white">USM</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-semibold text-primary">Relaciones Estudiantiles</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-smooth ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted hover:text-primary"
                }`}
                onClick={(e) => handleNavClick(item, e)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar servicios..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Mobile Search */}
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Buscar servicios..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10"
                  />
                </div>
              </div>
              
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-smooth ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`}
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    handleNavClick(item, e);
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}