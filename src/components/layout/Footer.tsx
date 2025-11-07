import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import LogoUSM from "../../assets/logo-usm-noletras.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">

        {/* GRID SUPERIOR */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* COLUMNA 1 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={LogoUSM} alt="Logo USM" className="h-10 w-10" />
              <div>
                <h3 className="font-semibold">Universidad Técnica Federico Santa María</h3>
                <p className="text-sm text-primary-foreground/80">
                  Relaciones Estudiantiles
                </p>
              </div>
            </div>

            <p className="text-sm text-primary-foreground/80">
              Comprometidos con el bienestar y desarrollo integral de nuestros estudiantes.
            </p>

            {/* UNIVERSIDAD */}
            <div>
              <h4 className="font-semibold mt-8 mb-4">UNIVERSIDAD</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="https://usm.cl/la-universidad/nuestra-historia/" target="_blank">Nuestra Historia</a></li>
                <li><a href="https://usm.cl/la-universidad/federico-santa-maria/" target="_blank">Federico Santa María</a></li>
                <li><a href="https://usm.cl/la-universidad/definiciones-estrategicas/" target="_blank">Definiciones Estratégicas</a></li>
                <li><a href="https://usm.cl/la-universidad/modelo-educativo/" target="_blank">Modelo Educativo</a></li>
                <li><a href="https://usm.cl/la-universidad/organizacion/" target="_blank">Organización</a></li>
              </ul>
            </div>

            {/* CAMPUS Y SEDES */}
            <div>
              <h4 className="font-semibold mt-8 mb-4">CAMPUS Y SEDES</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="https://usm.cl/campus-y-sedes/" target="_blank">Información Campus y Sedes</a></li>
                <li><a href="https://tourvirtual.usm.cl/" target="_blank">Tour Virtual</a></li>
              </ul>
            </div>

            {/* POLÍTICA DE PRIVACIDAD */}
            <a
              href="https://usm.cl/politicas-de-privacidad/"
              target="_blank"
              className="flex items-center space-x-2 text-sm text-primary-foreground/80 mt-6"
            >
              <span className="text-xl">⚑</span>
              <span>Política de Privacidad</span>
            </a>

            {/* LOGO usm.cl */}
            <a href="https://usm.cl/" target="_blank">
              <img
                src="https://rree.usm.cl/wp-content/uploads/2025/06/usm_cl.svg"
                alt="usm.cl"
                className="w-40 md:w-48 mt-6 opacity-90 hover:opacity-100 transition"
              />
            </a>
          </div>

          {/* COLUMNA 2 – EXTENSIÓN */}
          <div>
            <h4 className="font-semibold mb-4">EXTENSIÓN Y CULTURA</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="https://usm.cl/direccion-de-comunicaciones/" target="_blank">Dirección de Comunicaciones</a></li>
              <li><a href="https://vinculacion.usm.cl/" target="_blank">Dirección General de Vinculación</a></li>
              <li><a href="https://internacional.usm.cl/" target="_blank">Dirección de Asuntos Internacionales</a></li>
              <li><a href="https://alumni.usm.cl/" target="_blank">Alumni</a></li>
              <li><a href="https://usm.cl/noticias/" target="_blank">Noticias</a></li>
              <li><a href="https://usm.cl/eventos/" target="_blank">Eventos</a></li>
              <li><a href="https://radiouniversitaria.usm.cl/" target="_blank">Radio USM</a></li>
              <li><a href="https://cultura.usm.cl/" target="_blank">Cultura USM</a></li>
            </ul>
          </div>

          {/* COLUMNA 3 – SERVICIOS */}
          <div>
            <h4 className="font-semibold mb-4">SERVICIOS</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="https://aula.usm.cl/" target="_blank">Aula USM</a></li>
              <li><a href="https://biblioteca.usm.cl/" target="_blank">Biblioteca</a></li>
              <li><a href="https://autoservicio.usm.cl/" target="_blank">Portal de Autoservicio</a></li>
              <li><a href="https://ddi.usm.cl/" target="_blank">Tecnologías de la Información</a></li>
              <li><a href="https://sia.usm.cl/" target="_blank">Sistema de Información Académica</a></li>
              <li><a href="https://argos.usm.cl/" target="_blank">Sistema Argos</a></li>
              <li><a href="https://remuneraciones.usm.cl/" target="_blank">Remuneraciones</a></li>
              <li><a href="https://usm.cl/directorio/" target="_blank">Directorio USM</a></li>
              <li><a href="https://usm.trabajando.com/" target="_blank">Trabaja con Nosotros</a></li>
            </ul>
          </div>

          {/* COLUMNA 4 – SELLO */}
          <div className="flex justify-center md:justify-end">
            <a href="https://acreditacion.usm.cl/" target="_blank">
              <img
                src="https://rree.usm.cl/wp-content/uploads/2025/06/sello-acreditacion-2028.svg"
                alt="Sello Acreditación"
                className="w-48 md:w-56 lg:w-64"
              />
            </a>
          </div>
        </div>

        {/* divisor */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-8"></div>

        {/* REDES USM */}
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://facebook.com/usantamaria" target="_blank" className="p-2 rounded-full bg-primary-foreground/10">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="https://instagram.com/usantamaria" target="_blank" className="p-2 rounded-full bg-primary-foreground/10">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="https://www.youtube.com/channel/UCr5rEvayXIC0YnJxDAWuWtQ" target="_blank" className="p-2 rounded-full bg-primary-foreground/10">
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
