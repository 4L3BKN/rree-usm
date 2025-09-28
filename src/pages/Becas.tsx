import { useState, useMemo } from "react";
import { Search, ExternalLink, Calendar } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import becasData from "@/data/becas.json";

interface Beca {
  id: string;
  nombre: string;
  descripcion: string;
  requisitos: string[];
  pasos: string[];
  enlaces: Array<{
    texto: string;
    url: string;
  }>;
  estado: "abierta" | "cerrada" | "proximamente";
  fechaLimite: string;
}

const Becas = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const allBecas = [
    ...becasData.becasInternas.map(beca => ({ ...beca, categoria: "Becas Internas" })),
    ...becasData.becasExternas.map(beca => ({ ...beca, categoria: "Becas Externas" })),
    ...becasData.beneficiosEstudiantiles.map(beca => ({ ...beca, categoria: "Beneficios Estudiantiles" }))
  ];

  const filteredBecas = useMemo(() => {
    if (!searchTerm) return allBecas;
    
    return allBecas.filter(beca => 
      beca.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      beca.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      beca.requisitos.some(req => req.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm, allBecas]);

  const groupedBecas = filteredBecas.reduce((acc, beca) => {
    if (!acc[beca.categoria]) {
      acc[beca.categoria] = [];
    }
    acc[beca.categoria].push(beca);
    return acc;
  }, {} as Record<string, typeof allBecas>);

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case "abierta":
        return <Badge variant="default" className="bg-primary text-primary-foreground">Abierta</Badge>;
      case "cerrada":
        return <Badge variant="secondary" className="bg-destructive text-destructive-foreground">Cerrada</Badge>;
      case "proximamente":
        return <Badge variant="outline" className="border-accent text-accent-foreground">Próximamente</Badge>;
      default:
        return <Badge variant="outline">{estado}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-CL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
                Becas y Beneficios Estudiantiles
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Encuentra las oportunidades de financiamiento que te ayudarán a alcanzar tus metas académicas
              </p>
              
              {/* Buscador */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Buscar becas o beneficios..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/90 border-0 text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {searchTerm && (
              <div className="mb-8 text-center">
                <p className="text-muted-foreground">
                  {filteredBecas.length} resultado(s) encontrado(s) para "{searchTerm}"
                </p>
              </div>
            )}

            {Object.entries(groupedBecas).map(([categoria, becas]) => (
              <div key={categoria} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-foreground border-b border-border pb-2">
                  {categoria}
                </h2>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {becas.map((beca) => (
                    <AccordionItem 
                      key={beca.id} 
                      value={beca.id}
                      className="border border-border rounded-lg bg-card shadow-sm"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <div className="flex items-center justify-between w-full">
                          <div className="text-left">
                            <h3 className="font-semibold text-lg mb-1">{beca.nombre}</h3>
                            <p className="text-muted-foreground text-sm">{beca.descripcion}</p>
                          </div>
                          <div className="flex items-center gap-2 ml-4">
                            {getEstadoBadge(beca.estado)}
                          </div>
                        </div>
                      </AccordionTrigger>
                      
                      <AccordionContent className="px-6 pb-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Requisitos */}
                          <div>
                            <h4 className="font-semibold mb-3 text-foreground">Requisitos</h4>
                            <ul className="space-y-2">
                              {beca.requisitos.map((requisito, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                  <span className="text-sm text-muted-foreground">{requisito}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Pasos de postulación */}
                          <div>
                            <h4 className="font-semibold mb-3 text-foreground">Pasos de postulación</h4>
                            <ol className="space-y-2">
                              {beca.pasos.map((paso, index) => (
                                <li key={index} className="flex items-start gap-3">
                                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center font-medium flex-shrink-0">
                                    {index + 1}
                                  </span>
                                  <span className="text-sm text-muted-foreground">{paso}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        </div>

                        {/* Fecha límite */}
                        <div className="mt-6 p-4 bg-muted rounded-lg">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>Fecha límite: {formatDate(beca.fechaLimite)}</span>
                          </div>
                        </div>

                        {/* Enlaces */}
                        {beca.enlaces.length > 0 && (
                          <div className="mt-6">
                            <h4 className="font-semibold mb-3 text-foreground">Enlaces oficiales</h4>
                            <div className="flex flex-wrap gap-3">
                              {beca.enlaces.map((enlace, index) => (
                                <Button 
                                  key={index} 
                                  variant="outline" 
                                  size="sm"
                                  className="gap-2"
                                  asChild
                                >
                                  <a href={enlace.url} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-3 w-3" />
                                    {enlace.texto}
                                  </a>
                                </Button>
                              ))}
                            </div>
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            {filteredBecas.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No se encontraron becas que coincidan con tu búsqueda.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setSearchTerm("")}
                  className="mt-4"
                >
                  Limpiar búsqueda
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Becas;