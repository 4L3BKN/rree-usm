import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Handshake, ArrowLeft, Calendar, MapPin, Users, Clock, ExternalLink, CheckCircle } from "lucide-react";
import becasData from "@/data/becas.json";




export default function BecasDetalle() {
    const { toast } = useToast();
    const { slug } = useParams();
    const navigate = useNavigate();
    const allBecas = [
        ...becasData.becasInternas,
        ...becasData.becasExternas,
        ...becasData.beneficiosEstudiantiles,
    ];

    const beca = allBecas.find((b) => b.slug === slug);

    if (!beca) {
        return (
            <div className="min-h-screen bg-background">
                <Header />
                <main className="pt-20">
                    <div className="container mx-auto px-4 py-16 text-center">
                        <h1 className="text-2xl font-bold mb-4">Beca no encontrada</h1>
                        <p className="text-muted-foreground mb-8">
                            La beca que buscas no existe o ha sido removida.
                        </p>
                        <Button onClick={() => navigate("/becas")}>
                            Volver a Becas
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />


            {/* Breadcrumb y botón volver */}
            <section className="py-6 border-b">
                <div className="container mx-auto px-4">
                    <Button
                        variant="ghost"
                        onClick={() => navigate("/becas")}
                        className="mb-4 gap-2"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Volver a Becas
                    </Button>

                    <nav className="text-sm text-muted-foreground">
                        <Link to="/" className="hover:text-primary">Inicio</Link>
                        <span className="mx-2">/</span>
                        <Link to="/becas" className="hover:text-primary">Becas</Link>
                        <span className="mx-2">/</span>
                        <span className="text-foreground">{beca.nombre}</span>
                    </nav>
                </div>
            </section>

            {/* Header de la beca */}
            <section className="py-12 bg-gradient-to-r from-primary/10 via-primary-light/10 to-accent/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-8 items-start">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <Badge variant="outline" className="text-sm">
                                        {beca.nombre}
                                    </Badge>
                                    {beca.estado && (
                                        <Badge variant={beca.estado === "abierta" ? "default" : "secondary"}>
                                            {beca.estado === "abierta" ? "Postulaciones Abiertas" : "Cerrada"}
                                        </Badge>
                                    )}
                                </div>

                                <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                                    {beca.nombre}
                                </h1>

                                <p className="text-lg text-muted-foreground mb-6">
                                    {beca.descripcion}
                                </p>

                                {/* Información general */}
                                <div className="grid sm:grid-cols-2 gap-4">

                                    <div className="flex items-center gap-3">
                                        <Users className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="font-medium">Dirigido a</p>
                                            <p className="text-sm text-muted-foreground">Todos</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Handshake className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="font-medium">Beneficio</p>
                                            <p className="text-sm text-muted-foreground">{beca.beneficio}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Calendar className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="font-medium">Cierre postulaciones</p>
                                            <p className="text-sm text-muted-foreground">{beca.fechaLimite}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Clock className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="font-medium">Duración beneficio</p>
                                            <p className="text-sm text-muted-foreground">{beca.duracionBeneficio}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="lg:w-80">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-center">Postulación</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {beca.estado === "abierta" ? (
                                            <>
                                                <Button
                                                    className="w-full"
                                                    size="lg"
                                                    onClick={() => 
                                                        toast({
                                                            title: "Redirección a página de postulación",
                                                        })
                                                    }
                                                >
                                                    <ExternalLink className="h-4 w-4 mr-2" />
                                                    Ir a la postulación
                                                </Button>
                                                <p className="text-xs text-muted-foreground text-center">
                                                    Postula directamente desde el sitio oficial
                                                </p>
                                            </>
                                        ) : (
                                            <div className="text-center py-4">
                                                <p className="text-muted-foreground">
                                                    Las postulaciones están cerradas
                                                </p>
                                            </div>
                                        )}
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

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            Descripcion
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {beca.descripcion}
                                    </CardContent>
                                </Card>

                                {/* Requisitos*/}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <CheckCircle className="h-5 w-5 text-primary" />
                                            Requisitos
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            {beca.requisitos.map((req, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                                    <span className="text-sm text-muted-foreground">{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Detalles</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <div>
                                            <p className="text-sm font-medium">Aplica para</p>
                                            <p className="text-sm text-muted-foreground">Estudiantes Pregrado diurno</p>
                                            <p className="text-sm text-muted-foreground">Estudiantes Pregrado vespertino</p>
                                            <p className="text-sm text-muted-foreground">Estudiantes Postgrados</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
}