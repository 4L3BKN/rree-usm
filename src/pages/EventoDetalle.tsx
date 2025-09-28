import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Users, Clock, ExternalLink, CheckCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
  descripcionCompleta: string;
  ponentes: Array<{
    nombre: string;
    cargo: string;
    empresa: string;
  }>;
  requisitos: string[];
  categoria: string;
  cupos: number;
  inscripcionUrl: string;
  contacto: string;
  estado: "abierto" | "cerrado" | "proximo";
}

const EventoDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const evento = eventosData.eventos.find((e: Evento) => e.slug === slug) as Evento;

  if (!evento) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-2xl font-bold mb-4">Evento no encontrado</h1>
            <p className="text-muted-foreground mb-8">
              El evento que buscas no existe o ha sido removido.
            </p>
            <Button onClick={() => navigate("/eventos")}>
              Volver a Eventos
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
    return `${formattedDate} a las ${hora}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb y botón volver */}
        <section className="py-6 border-b">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/eventos")}
              className="mb-4 gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a Eventos
            </Button>
            
            <nav className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Inicio</Link>
              <span className="mx-2">/</span>
              <Link to="/eventos" className="hover:text-primary">Eventos</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{evento.titulo}</span>
            </nav>
          </div>
        </section>

        {/* Header del evento */}
        <section className="py-12 bg-gradient-to-r from-primary/10 via-primary-light/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="outline" className="text-sm">
                      {evento.categoria}
                    </Badge>
                    {getEstadoBadge(evento.estado)}
                  </div>
                  
                  <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                    {evento.titulo}
                  </h1>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    {evento.descripcionCorta}
                  </p>

                  {/* Info rápida */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{formatDate(evento.fecha, evento.hora)}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{evento.campus}</p>
                        <p className="text-sm text-muted-foreground">{evento.sede} • {evento.ubicacion}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{evento.cupos} cupos</p>
                        <p className="text-sm text-muted-foreground">Disponibles</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Duración estimada</p>
                        <p className="text-sm text-muted-foreground">2-3 horas</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="lg:w-80">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-center">Inscripción</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {evento.estado === "abierto" && evento.inscripcionUrl ? (
                        <>
                          <Button asChild className="w-full" size="lg">
                            <a href={evento.inscripcionUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Inscribirse Ahora
                            </a>
                          </Button>
                          <p className="text-xs text-muted-foreground text-center">
                            Te redirigirá al sistema de inscripciones
                          </p>
                        </>
                      ) : evento.estado === "cerrado" ? (
                        <div className="text-center py-4">
                          <p className="text-muted-foreground">Las inscripciones están cerradas</p>
                        </div>
                      ) : (
                        <div className="text-center py-4">
                          <p className="text-muted-foreground">Las inscripciones abrirán pronto</p>
                        </div>
                      )}
                      
                      <Separator />
                      
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">¿Tienes dudas?</p>
                        <a 
                          href={`mailto:${evento.contacto}`}
                          className="text-sm text-primary hover:underline"
                        >
                          {evento.contacto}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contenido principal */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Descripción principal */}
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Descripción del Evento</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {evento.descripcionCompleta}
                    </p>
                  </div>

                  {/* Ponentes */}
                  {evento.ponentes && evento.ponentes.length > 0 && (
                    <div>
                      <h2 className="text-2xl font-bold mb-4">
                        {evento.ponentes.length === 1 ? "Ponente" : "Ponentes"}
                      </h2>
                      <div className="space-y-4">
                        {evento.ponentes.map((ponente, index) => (
                          <Card key={index}>
                            <CardContent className="pt-6">
                              <h3 className="font-semibold text-lg">{ponente.nombre}</h3>
                              <p className="text-primary">{ponente.cargo}</p>
                              <p className="text-muted-foreground">{ponente.empresa}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Requisitos */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        Requisitos
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {evento.requisitos.map((requisito, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm text-muted-foreground">{requisito}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Información adicional */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Información Adicional</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="text-sm font-medium">Modalidad</p>
                        <p className="text-sm text-muted-foreground">Presencial</p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <p className="text-sm font-medium">Dirigido a</p>
                        <p className="text-sm text-muted-foreground">Estudiantes USM</p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <p className="text-sm font-medium">Costo</p>
                        <p className="text-sm text-muted-foreground">Gratuito</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EventoDetalle;