import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* USM Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <span className="text-lg font-bold text-accent-foreground">USM</span>
              </div>
              <div>
                <h3 className="font-semibold">Universidad Técnica Federico Santa María</h3>
                <p className="text-sm text-primary-foreground/80">Relaciones Estudiantiles</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Comprometidos con el bienestar y desarrollo integral de nuestros estudiantes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/becas" className="hover:text-accent transition-smooth">Becas y Beneficios</Link></li>
              <li><Link to="/salud" className="hover:text-accent transition-smooth">Salud y Apoyo</Link></li>
              <li><Link to="/deportes" className="hover:text-accent transition-smooth">Deportes y Cultura</Link></li>
              <li><Link to="/acompanamiento" className="hover:text-accent transition-smooth">Acompañamiento</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+56 32 265 4000</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>relacionesestudiantes@usm.cl</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Av. España 1680, Valparaíso, Chile</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-3">
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 Universidad Técnica Federico Santa María. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}