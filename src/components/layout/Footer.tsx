import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import LogoUSM from "../../assets/logo-usm-noletras.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">

        {/* Grid superior */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Columna 1 – Universidad + Enlaces + logo usm.cl */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={LogoUSM}
                alt="Logo USM"
                className="h-10 w-10 object-contain"
              />

              <div>
                <h3 className="font-semibold">
                  Universidad Técnica Federico Santa María
                </h3>
                <p className="text-sm text-primary-foreground/80">
                  Relaciones Estudiantiles
                </p>
              </div>
            </div>

            <p className="text-sm text-primary-foreground/80">
              Comprometidos con el bienestar y desarrollo integral de nuestros estudiantes.
            </p>

            <div>
              <h4 className="font-semibold mt-8 mb-4">UNIVERSIDAD</h4>
              <ul className="space-y-1 text-sm text-primary-foreground/90">
                <li>Nuestra Historia</li>
                <li>Federico Santa María</li>
                <li>Definiciones Estratégicas</li>
                <li>Modelo Educativo</li>
                <li>Organización</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mt-8 mb-4">CAMPUS Y SEDES</h4>
              <ul className="space-y-1 text-sm text-primary-foreground/90">
                <li>Información Campus y Sedes</li>
                <li>Tour Virtual</li>
              </ul>
            </div>

            {/* Política de privacidad */}
            <div className="flex items-center space-x-2 text-sm text-primary-foreground/80 mt-6">
              <span className="text-xl">⚑</span>
              <span>Política de Privacidad</span>
            </div>

            {/* ✅ Logo usm.cl con enlace */}
            <a
              href="https://usm.cl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://rree.usm.cl/wp-content/uploads/2025/06/usm_cl.svg"
                alt="usm.cl"
                className="w-40 md:w-48 mt-6 opacity-90 hover:opacity-100 transition-all cursor-pointer"
              />
            </a>
          </div>

          {/* Columna 2 */}
          <div>
            <h4 className="font-semibold mb-4">EXTENSIÓN Y CULTURA</h4>
            <ul className="space-y-1 text-sm text-primary-foreground/90">
              <li>Dirección de Comunicaciones</li>
              <li>Dirección General de Vinculación</li>
              <li>Dirección de Asuntos Internacionales</li>
              <li>Alumni</li>
              <li>Noticias</li>
              <li>Eventos</li>
              <li>Radio USM</li>
              <li>Cultura USM</li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div>
            <h4 className="font-semibold mb-4">SERVICIOS</h4>
            <ul className="space-y-1 text-sm text-primary-foreground/90">
              <li>Aula USM</li>
              <li>Biblioteca</li>
              <li>Portal de Autoservicio</li>
              <li>Tecnologías de la Información</li>
              <li>Sistema de Información Académica</li>
              <li>Sistema Argos</li>
              <li>Remuneraciones</li>
              <li>Directorio USM</li>
              <li>Trabaja con Nosotros</li>
            </ul>
          </div>

          {/* Columna 4 – ✅ Sello acreditación clickeable */}
          <div className="flex justify-center md:justify-end">
            <a
              href="https://acreditacion.usm.cl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://rree.usm.cl/wp-content/uploads/2025/06/sello-acreditacion-2028.svg"
                alt="Sello Acreditación 2028"
                className="w-48 md:w-56 lg:w-64 object-contain cursor-pointer"
              />
            </a>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-8"></div>

        {/* Redes sociales globales */}
        <div className="flex justify-center space-x-4 mb-6">

          <a
            href="https://www.facebook.com/usantamaria"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all"
          >
            <Facebook className="h-6 w-6" />
          </a>

          <a
            href="https://www.instagram.com/usantamaria/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all"
          >
            <Instagram className="h-6 w-6" />
          </a>

          <a
            href="https://www.youtube.com/channel/UCr5rEvayXIC0YnJxDAWuWtQ"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all"
          >
            <Youtube className="h-6 w-6" />
          </a>
        </div>

        <div className="text-center text-sm text-primary-foreground/80 pb-4">
          <p>&copy; 2025 Universidad Técnica Federico Santa María. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
}
