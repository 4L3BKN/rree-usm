import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative overflow-hidden gradient-hero py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Bienvenido a{" "}
            <span className="text-accent">Relaciones Estudiantiles</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Tu portal integral para acceder a todos los servicios y apoyo que necesitas durante tu vida universitaria en la USM.
          </p>

          {/* Hero Search */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="¿Qué estás buscando? Ej: becas, apoyo psicológico, deportes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg bg-white/95 backdrop-blur border-0 shadow-medium"
              />
              <Button 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary-dark"
                size="sm"
              >
                Buscar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">15+</div>
              <div className="text-white/80 text-sm">Tipos de Becas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">24/7</div>
              <div className="text-white/80 text-sm">Apoyo Disponible</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">30+</div>
              <div className="text-white/80 text-sm">Actividades</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">8K+</div>
              <div className="text-white/80 text-sm">Estudiantes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}