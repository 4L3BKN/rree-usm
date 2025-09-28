import { useState, useMemo } from "react";
import { Search, Calendar, MapPin, Users, Filter, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import eventosData from "@/data/eventos.json";

interface Evento {
  id: string;
  slug: string;
  titulo: string;
  fecha: string;
  hora: string;
  campus: string;
  sede: string;
  ubicacion: string;
  descripcionCorta: string;
  categoria: string;
  cupos: number;
  estado: "abierto" | "cerrado" | "proximo";
}

const Eventos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCampus, setSelectedCampus] = useState("todos");
  const [selectedSede, setSelectedSede] = useState("todos");
  const [sortOrder, setSortOrder] = useState("fecha-asc");

  const eventos = eventosData.eventos as Evento[];
  const campus = eventosData.campus;

  // Obtener sedes disponibles según el campus seleccionado
  const availableSedes = useMemo(() => {
    if (selectedCampus === "todos") return [];
    const campusData = campus.find(c => c.nombre === selectedCampus);
    return campusData ? campusData.sedes : [];
  }, [selectedCampus, campus]);

  // Filtrar y ordenar eventos
  const filteredAndSortedEventos = useMemo(() => {
    let filtered = eventos.filter(evento => {
      const matchesSearch = evento.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          evento.descripcionCorta.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          evento.categoria.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCampus = selectedCampus === "todos" || evento.campus === selectedCampus;
      const matchesSede = selectedSede === "todos" || evento.sede === selectedSede;
      
      return matchesSearch && matchesCampus && matchesSede;
    });

    // Ordenar por fecha
    filtered.sort((a, b) => {
      const dateA = new Date(a.fecha);
      const dateB = new Date(b.fecha);
      return sortOrder === "fecha-asc" ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });

    return filtered;
  }, [eventos, searchTerm, selectedCampus, selectedSede, sortOrder]);

  // Agrupar eventos por campus
  const eventosPorCampus = useMemo(() => {
    const grupos: Record<string, Evento[]> = {};
    filteredAndSortedEventos.forEach(evento => {
      if (!grupos[evento.campus]) {
        grupos[evento.campus] = [];
      }
      grupos[evento.campus].push(evento);
    });
    return grupos;
  }, [filteredAndSortedEventos]);

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case "abierto":
        return <Badge variant="default" className="bg-primary text-primary-foreground">Inscripciones Abiertas</Badge>;
      case "cerrado":
        return <Badge variant="secondary" className="bg-destructive text-destructive-foreground">Cerrado</Badge>;
      case "proximo":
        return <Badge variant="outline" className="border-accent text-accent-foreground">Próximamente</Badge>;
      default:
        return <Badge variant="outline">{estado}</Badge>;
    }
  };

  const formatDate = (dateString: string, hora: string) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('es-CL', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    return `${formattedDate} • ${hora}`;
  };

  const handleCampusChange = (value: string) => {
    setSelectedCampus(value);
    setSelectedSede("todos"); // Reset sede when campus changes
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary via-primary-light to-accent py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Calendario de Eventos
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Descubre todas las actividades, talleres y eventos que la USM tiene para ti
              </p>
            </div>
          </div>
        </section>

        {/* Filtros */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Buscador */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Buscar eventos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filtros */}
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Filtros:</span>
                </div>
                
                <Select value={selectedCampus} onValueChange={handleCampusChange}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Seleccionar Campus" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos los Campus</SelectItem>
                    {campus.map((c) => (
                      <SelectItem key={c.nombre} value={c.nombre}>
                        {c.nombre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select 
                  value={selectedSede} 
                  onValueChange={setSelectedSede}
                  disabled={selectedCampus === "todos"}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Seleccionar Sede" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todas las Sedes</SelectItem>
                    {availableSedes.map((sede) => (
                      <SelectItem key={sede} value={sede}>
                        {sede}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortOrder} onValueChange={setSortOrder}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fecha-asc">Próximos primero</SelectItem>
                    <SelectItem value="fecha-desc">Más lejanos primero</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Resultados encontrados */}
            <div className="mt-4 text-sm text-muted-foreground">
              {filteredAndSortedEventos.length} evento(s) encontrado(s)
              {searchTerm && ` para "${searchTerm}"`}
            </div>
          </div>
        </section>

        {/* Lista de Eventos */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {Object.keys(eventosPorCampus).length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No se encontraron eventos</h3>
                <p className="text-muted-foreground">
                  Intenta ajustar tus filtros de búsqueda.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCampus("todos");
                    setSelectedSede("todos");
                  }}
                  className="mt-4"
                >
                  Limpiar filtros
                </Button>
              </div>
            ) : (
              Object.entries(eventosPorCampus).map(([campusNombre, eventosDelCampus]) => (
                <div key={campusNombre} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-foreground border-b border-border pb-2 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {campusNombre}
                  </h2>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {eventosDelCampus.map((evento) => (
                      <Card key={evento.id} className="hover:shadow-lg transition-shadow hover-scale">
                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start mb-2">
                            <Badge variant="outline" className="text-xs">
                              {evento.categoria}
                            </Badge>
                            {getEstadoBadge(evento.estado)}
                          </div>
                          <CardTitle className="text-lg line-clamp-2">
                            {evento.titulo}
                          </CardTitle>
                        </CardHeader>
                        
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              {formatDate(evento.fecha, evento.hora)}
                            </div>
                            
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              {evento.sede} • {evento.ubicacion}
                            </div>
                            
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Users className="h-4 w-4" />
                              {evento.cupos} cupos disponibles
                            </div>
                            
                            <p className="text-sm text-muted-foreground line-clamp-3">
                              {evento.descripcionCorta}
                            </p>
                            
                            <Button asChild className="w-full mt-4">
                              <Link to={`/eventos/${evento.slug}`}>
                                Ver Detalles
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Eventos;