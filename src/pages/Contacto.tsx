import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    value: "+56 32 265 4000",
    description: "Lunes a Viernes, 8:00 - 18:00",
    link: "tel:+56322654000"
  },
  {
    icon: Mail,
    title: "Email",
    value: "relacionesestudiantes@usm.cl",
    description: "Respuesta en 24-48 horas",
    link: "mailto:relacionesestudiantes@usm.cl"
  },
  {
    icon: MapPin,
    title: "Ubicación",
    value: "Edificio Central, Piso 2",
    description: "Av. España 1680, Valparaíso",
    link: "https://maps.google.com"
  },
  {
    icon: Clock,
    title: "Horario de Atención",
    value: "Lunes a Viernes",
    description: "8:00 - 18:00 hrs",
    link: null
  }
];

const departments = [
  "Becas y Beneficios",
  "Salud y Apoyo Psicológico", 
  "Deportes y Cultura",
  "Acompañamiento Estudiantil",
  "Información General",
  "Otro"
];

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentId: "",
    department: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Mensaje enviado",
      description: "Tu consulta ha sido enviada exitosamente. Te responderemos pronto.",
    });

    setFormData({
      name: "",
      email: "",
      studentId: "",
      department: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-primary py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-white/90">
              Estamos aquí para ayudarte. Encuentra la información de contacto o envíanos un mensaje directamente.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info) => {
              const IconComponent = info.icon;
              return (
                <Card key={info.title} className="hover-lift shadow-soft hover:shadow-medium border-0 bg-white text-center">
                  <CardHeader className="pb-4">
                    <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="font-medium text-primary hover:text-primary-dark transition-smooth block mb-2"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium text-primary mb-2">{info.value}</p>
                    )}
                    <CardDescription>{info.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Envíanos un mensaje
                </h2>
                <p className="text-muted-foreground">
                  Completa el formulario y te responderemos lo antes posible.
                </p>
              </div>

              <Card className="shadow-medium border-0">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre completo *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="tu.email@usm.cl"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="studentId">RUT o ID Estudiante</Label>
                        <Input
                          id="studentId"
                          value={formData.studentId}
                          onChange={(e) => handleInputChange("studentId", e.target.value)}
                          placeholder="12.345.678-9"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department">Departamento *</Label>
                        <Select 
                          required 
                          value={formData.department} 
                          onValueChange={(value) => handleInputChange("department", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un departamento" />
                          </SelectTrigger>
                          <SelectContent>
                            {departments.map((dept) => (
                              <SelectItem key={dept} value={dept}>
                                {dept}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Asunto *</Label>
                      <Input
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="Breve descripción del tema"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Describe tu consulta o solicitud en detalle..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Enviando..."
                      ) : (
                        <>
                          Enviar mensaje
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <Card className="shadow-medium border-0 bg-accent/5">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2 text-accent" />
                    ¿Necesitas ayuda inmediata?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Si tu consulta es urgente o necesitas atención inmediata, puedes:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-accent mr-3"></div>
                      Llamar directamente a nuestro teléfono
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-accent mr-3"></div>
                      Visitar nuestras oficinas en horario de atención
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-accent mr-3"></div>
                      Usar el chat en línea (disponible próximamente)
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-0">
                <CardHeader>
                  <CardTitle>Horarios por Departamento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm">Becas y Beneficios</h4>
                    <p className="text-sm text-muted-foreground">Lunes a Viernes: 9:00 - 17:00</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Apoyo Psicológico</h4>
                    <p className="text-sm text-muted-foreground">Lunes a Viernes: 8:00 - 18:00</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Deportes y Cultura</h4>
                    <p className="text-sm text-muted-foreground">Lunes a Viernes: 10:00 - 16:00</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Atención General</h4>
                    <p className="text-sm text-muted-foreground">Lunes a Viernes: 8:00 - 18:00</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}