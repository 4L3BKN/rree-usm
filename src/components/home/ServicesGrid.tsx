import { 
  GraduationCap, 
  Heart, 
  Trophy, 
  Users, 
  DollarSign, 
  Calendar,
  BookOpen,
  Phone,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const services = [
  {
    title: "Becas y Beneficios",
    description: "Accede a becas de alimentación, transporte, mantención y otras ayudas económicas.",
    icon: DollarSign,
    href: "/becas",
    color: "text-accent",
    stats: "15+ tipos disponibles"
  },
  {
    title: "Salud y Apoyo Psicológico",
    description: "Servicios de salud mental, bienestar emocional y acompañamiento profesional.",
    icon: Heart,
    href: "/salud",
    color: "text-red-500",
    stats: "Atención 24/7"
  },
  {
    title: "Deportes y Cultura",
    description: "Participa en actividades deportivas, talleres culturales y eventos estudiantiles.",
    icon: Trophy,
    href: "/deportes",
    color: "text-green-500",
    stats: "30+ actividades",
    showPopup: true
  },
  {
    title: "Acompañamiento Estudiantil",
    description: "Orientación académica, tutorías y apoyo en tu trayectoria universitaria.",
    icon: GraduationCap,
    href: "/acompanamiento",
    color: "text-blue-500",
    stats: "Personalizado",
    showPopup: true
  },
  {
    title: "Calendario de Eventos",
    description: "Mantente al día con todas las actividades y fechas importantes.",
    icon: Calendar,
    href: "/eventos",
    color: "text-purple-500",
    stats: "Actualizado diariamente"
  },
  {
    title: "Biblioteca de Recursos",
    description: "Guías, formularios y documentos útiles para estudiantes.",
    icon: BookOpen,
    href: "/recursos",
    color: "text-orange-500",
    stats: "100+ recursos",
    showPopup: true
  }
];

export function ServicesGrid() {
  const { toast } = useToast();

  const handleServiceClick = (service: typeof services[0], e: React.MouseEvent) => {
    if (service.showPopup) {
      e.preventDefault();
      toast({
        title: "Botón de redireccionamiento temporalmente sin función",
        description: `El acceso a ${service.title} estará disponible próximamente.`,
      });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Servicios para Estudiantes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuentra todo lo que necesitas para tu vida universitaria en un solo lugar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.title} className="group hover-lift border-0 shadow-soft hover:shadow-medium bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-3 rounded-lg bg-muted ${service.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {service.stats}
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
                    {service.description}
                  </CardDescription>
                  {service.showPopup ? (
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                      onClick={(e) => handleServiceClick(service, e)}
                    >
                      Acceder
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      <Link to={service.href}>
                        Acceder
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-xl p-6 text-center">
          <div className="flex items-center justify-center mb-3">
            <Phone className="h-6 w-6 text-red-600 mr-2" />
            <h3 className="text-lg font-semibold text-red-900">¿Necesitas ayuda urgente?</h3>
          </div>
          <p className="text-red-700 mb-4">
            Si tienes una emergencia o necesitas apoyo inmediato, contáctanos ahora
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="destructive" asChild>
              <a href="tel:+56322654000">
                Llamar: +56 32 265 4000
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contacto">
                Más opciones de contacto
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}