import { Calendar, Clock, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const news = [
  {
    id: 1,
    title: "Nuevas Becas de Excelencia Académica 2024",
    description: "Se abren postulaciones para becas que cubren hasta el 100% del arancel para estudiantes destacados.",
    date: "2024-03-15",
    category: "Becas",
    priority: "high",
    readTime: "3 min"
  },
  {
    id: 2,
    title: "Programa de Apoyo Psicológico Online",
    description: "Nuevo servicio de teleconsultas psicológicas disponible 24/7 para todos los estudiantes.",
    date: "2024-03-12",
    category: "Salud",
    priority: "medium",
    readTime: "2 min"
  },
  {
    id: 3,
    title: "Inscripciones Abiertas: Talleres de Desarrollo Personal",
    description: "Talleres de liderazgo, comunicación efectiva y gestión del tiempo. Cupos limitados.",
    date: "2024-03-10",
    category: "Desarrollo",
    priority: "medium",
    readTime: "4 min"
  },
  {
    id: 4,
    title: "Torneo Interfacultades de Deportes 2024",
    description: "¡Representa a tu facultad! Inscripciones abiertas para fútbol, básquet, voleibol y más.",
    date: "2024-03-08",
    category: "Deportes",
    priority: "low",
    readTime: "2 min"
  }
];

const getCategoryColor = (category: string) => {
  const colors = {
    Becas: "bg-accent text-accent-foreground",
    Salud: "bg-red-100 text-red-800",
    Desarrollo: "bg-blue-100 text-blue-800",
    Deportes: "bg-green-100 text-green-800"
  };
  return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground";
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-CL', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });
};

export function NewsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Noticias y Anuncios
            </h2>
            <p className="text-lg text-muted-foreground">
              Mantente informado sobre las últimas novedades y oportunidades
            </p>
          </div>
          <Button variant="outline" className="hidden sm:flex">
            Ver todas las noticias
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured News */}
          <div className="lg:row-span-2">
            <Card className="h-full hover-lift shadow-soft hover:shadow-medium border-0 bg-white overflow-hidden">
              <div className="aspect-video bg-gradient-primary relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground">
                    <Star className="h-3 w-3 mr-1" />
                    Destacado
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className={getCategoryColor(news[0].category)} variant="secondary">
                    {news[0].category}
                  </Badge>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl hover:text-primary transition-smooth">
                  {news[0].title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {news[0].description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(news[0].date)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {news[0].readTime}
                    </div>
                  </div>
                </div>
                <Button className="w-full">
                  Leer más
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Other News */}
          <div className="space-y-6">
            {news.slice(1).map((item) => (
              <Card key={item.id} className="hover-lift shadow-soft hover:shadow-medium border-0 bg-white">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getCategoryColor(item.category)} variant="secondary">
                      {item.category}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {item.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight hover:text-primary transition-smooth">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {item.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(item.date)}
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs">
                      Leer más
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile "View All" Button */}
        <div className="mt-8 text-center sm:hidden">
          <Button variant="outline" className="w-full">
            Ver todas las noticias
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
