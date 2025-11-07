import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Heart, Phone, Mail, Calendar, Stethoscope, Apple, Activity } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface Links {
  psicologiaFormUrl: string;
  emergencyPhone: string;
  emergencyEmail: string;
}

const Salud = () => {
  const [links, setLinks] = useState<Links | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>

        {/* ✅ HERO FULL-WIDTH estilo Becas */}
        <section className="bg-gradient-to-r from-primary via-primary-light to-accent py-16 mb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">

              <div className="inline-flex items-center gap-2 mb-4">
                <Heart className="h-10 w-10 opacity-90" />
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Salud y Apoyo Psicológico
                </h1>
              </div>

              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Tu bienestar es nuestra prioridad. Accede a servicios de salud física y mental 
                para acompañarte durante tu vida universitaria.
              </p>

            </div>
          </div>
        </section>

        {/* ✅ AHORA SÍ container para el resto del contenido */}
        <div className="container mx-auto px-4 py-8">

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

                    {servicio.nombre === "Psicología" && (
                      <div className="mt-4">
                        <Button
                          variant="outline"
                          className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                          onClick={() => navigate("/psicologia")}
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          Ver atención psicológica
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

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

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Salud;
