import { Calendar, Heart, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Psicologia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>

        {/* ✅ HERO FULL WIDTH estilo Becas */}
        <section className="bg-gradient-to-r from-primary via-primary-light to-accent py-16 mb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">

              {/* Título EXACTO como lo tenías, solo cambiado a modo hero */}
              <div className="inline-flex items-center gap-2 mb-4">
                <Heart className="h-10 w-10 opacity-90" />
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Atención Psicológica USM
                </h1>
              </div>

              {/* Texto original, solo color blanco */}
              <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                Accede a apoyo psicológico profesional en la USM. 
                Recibe acompañamiento en tu bienestar académico, emocional y personal.  
                Esta página te guía paso a paso para solicitar tu hora a través del sistema oficial SIREB.
              </p>
            </div>
          </div>
        </section>


        {/* ✅ CONTENIDO NORMAL DESDE AQUÍ */}
        <div className="container mx-auto px-4 py-10">

          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-6">
            <ol className="flex items-center gap-2">
              <li className="hover:text-primary cursor-pointer" onClick={() => window.location.href = "/salud"}>
                Salud
              </li>
              <li>/</li>
              <li className="text-foreground font-medium">Atención Psicológica</li>
            </ol>
          </nav>

          {/* Cómo solicitar una hora */}
          <Card className="mb-14">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold">
                ¿Cómo solicito una hora con un psicólogo/a?
              </CardTitle>
              <CardDescription>
                Sigue estos pasos simples. El proceso completo se realiza en SIREB.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-10">

              {/* Steps */}
              <div className="space-y-6">

                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">Ingresa a SIREB</h4>
                    <p className="text-muted-foreground">
                      Dirígete a <strong>sireb.usm.cl</strong> e ingresa con tu usuario institucional 
                      (<strong>nombre.apellido</strong>) y contraseña USM.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">Servicio de Atención Alumnos</h4>
                    <p className="text-muted-foreground">
                      En el menú principal selecciona esta opción y luego ingresa a <strong>“Psicólogos”</strong>.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">Revisa la información oficial</h4>
                    <p className="text-muted-foreground">
                      SIREB te mostrará los profesionales, sedes, oficinas, correos y la forma correcta de coordinar tu hora.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">Sigue las indicaciones del sistema</h4>
                    <p className="text-muted-foreground">
                      Para algunos profesionales deberás coordinar la hora directamente con Secretaría del Servicio de Salud o Bienestar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  size="lg"
                  className="px-8"
                  onClick={() => window.open("https://sireb.usm.cl", "_blank")}
                >
                  Ir a SIREB
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Psicologia;
