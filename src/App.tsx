import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contacto from "./pages/Contacto";
import Becas from "./pages/Becas";
import BecasDetalle from "./pages/BecasDetalle"
import Eventos from "./pages/Eventos";
import EventoDetalle from "./pages/EventoDetalle";
import Salud from "./pages/Salud";
import Psicologia from "./pages/Psicologia";
import ScrollToTop from "./components/home/ScrollToTop"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/becas" element={<Becas />} />
          <Route path="/becas/:slug" element={<BecasDetalle />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/eventos/:slug" element={<EventoDetalle />} />
          <Route path="/salud" element={<Salud />} />
          <Route path="/psicologia" element={<Psicologia />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
