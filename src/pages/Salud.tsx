import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Heart, Phone, Mail, Calendar, Stethoscope, Apple, Activity } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Links {
  psicologiaFormUrl: string;
  emergencyPhone: string;
  emergencyEmail: string;
}

const Salud = () => {
  const [links, setLinks] = useState<Links | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const loadLinks = async () => {
      try {
        const response = await fetch('/src/data/links.json');
        const data = await response.json();
        setLinks(data);
      } catch (error) {
        console.error('Error loading links:', error);
      }
    };

    loadLinks();
  }, []);

  const servicios = [
    {
      icon: Stethoscope,
      nombre: "Médico General",
      descripcion: "Atención médica general y consultas de salud",
      disponibilidad: "Lunes a Viernes"
    },
    {
      icon: Apple,
      nombre: "Nutricionista",
      descripcion: "Orientación nutricional y planes alimentarios",
      disponibilidad: "Martes y Jueves"
    },
    {
      icon: Activity,
      nombre: "Actividades de Bienestar",
      descripcion: "Talleres de mindfulness, yoga y relajación",
      disponibilidad: "Miércoles y Viernes"
    },
    {
      icon: Heart,
      nombre: "Psicología",
      descripcion: "Apoyo psicológico y orientación personal",
      disponibilidad: "Lunes a Viernes"
    }
  ];

  const pasos = [
    {
      numero: 1,
      titulo: "Completa el formulario",
      descripcion: "Llena el formulario online con tus datos personales y motivo de consulta"
    },
    {
      numero: 2,
      titulo: "Recibe confirmación por correo",
      descripcion: "Te enviaremos un email con la confirmación de tu hora y detalles de la cita"
    },
    {
      numero: 3,
      titulo: "Asiste a tu hora",
      descripcion: "Preséntate puntualmente en el lugar indicado con tu carnet universitario"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Salud y Apoyo Psicológico</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tu bienestar es nuestra prioridad. Accede a servicios de salud física y mental 
            para acompañarte durante tu vida universitaria.
          </p>
        </div>

        {/* Servicios de Salud */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            Servicios de Salud Disponibles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicios.map((servicio) => (
              <Card key={servicio.nombre} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <servicio.icon className="h-6 w-6 text-primary" />
                    {servicio.nombre}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{servicio.descripcion}</p>
                  <Badge variant="secondary">{servicio.disponibilidad}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sección Principal - Cómo agendar */}
        <Card className="mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-2">
              <Calendar className="h-6 w-6" />
              Cómo agendar una hora con el psicólogo
            </CardTitle>
            <CardDescription>
              Sigue estos simples pasos para solicitar tu cita de apoyo psicológico
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {pasos.map((paso) => (
              <div key={paso.numero} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  {paso.numero}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{paso.titulo}</h3>
                  <p className="text-muted-foreground">{paso.descripcion}</p>
                </div>
              </div>
            ))}
            
            <div className="text-center pt-6">
              <Button 
                size="lg" 
                className="px-8"
                onClick={() => {
                  toast({
                    title: "Hora agendada exitosamente",
                    description: "Recibirás un correo con los detalles de tu cita.",
                  });
                }}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Agendar hora
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Bloque de Urgencias */}
        <Card className="bg-destructive/5 border-destructive/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-destructive flex items-center justify-center gap-2">
              <Phone className="h-6 w-6" />
              Urgencias y Contacto de Emergencia
            </CardTitle>
            <CardDescription>
              Si necesitas ayuda inmediata, no dudes en contactarnos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div className="space-y-2">
                <Phone className="h-8 w-8 text-destructive mx-auto" />
                <h3 className="font-semibold text-foreground">Teléfono de Emergencia</h3>
                <p className="text-2xl font-bold text-destructive">
                  {links?.emergencyPhone || "+56-2-2303-7000"}
                </p>
                <p className="text-sm text-muted-foreground">Disponible 24/7</p>
              </div>
              
              <Separator orientation="vertical" className="hidden md:block h-24 mx-auto" />
              
              <div className="space-y-2">
                <Mail className="h-8 w-8 text-destructive mx-auto" />
                <h3 className="font-semibold text-foreground">Correo de Emergencia</h3>
                <p className="text-lg font-semibold text-destructive">
                  {links?.emergencyEmail || "emergencias@usm.cl"}
                </p>
                <p className="text-sm text-muted-foreground">Respuesta en 24 horas</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Salud;