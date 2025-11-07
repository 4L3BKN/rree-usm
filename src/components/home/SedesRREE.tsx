import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

interface SedeInfo {
  nombre: string;
  direccion: string;
  telefono: string;
  email: string;
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

const sedes: SedeInfo[] = [
  {
    nombre: "Sede Concepción",
    direccion: "Arteaga Alemparte 943, Edificio H, Hualpén, Concepción",
    telefono: "(+56-41) 2407622",
    email: "rree.concepcion@usm.cl",
    social: {
      facebook: "https://www.facebook.com/rreeusm.concepcion/",
      instagram: "https://www.instagram.com/rreeusm_concepcion/",
      linkedin: "https://www.linkedin.com/company/direcci%C3%B3n-de-relaciones-estudiantiles/",
      youtube: "https://www.youtube.com/@rrree_usantamaria",
    },
  },
  {
    nombre: "Campus San Joaquín",
    direccion:
      "Av. Vicuña Mackenna 3939, Edificio F, San Joaquín, Santiago",
    telefono: "(+56-2) 23037070",
    email: "rree.cssj@usm.cl",
    social: {
      facebook: "https://www.facebook.com/rreeusm.sanjoaquin",
      instagram: "https://www.instagram.com/rreeusm_sanjoaquin/",
      linkedin: "https://www.linkedin.com/company/direcci%C3%B3n-de-relaciones-estudiantiles/",
      youtube: "https://www.youtube.com/@rrree_usantamaria",
    },
  },
  {
    nombre: "Campus Vitacura",
    direccion:
      "Av. Santa María 6400, Edificio A, Vitacura, Santiago",
    telefono: "(+56-2) 32028070",
    email: "rree.csv@usm.cl",
    social: {
      facebook: "https://www.facebook.com/rreeusm.vitacura",
      instagram: "https://www.instagram.com/rreeusm_vitacura/",
      linkedin: "https://www.linkedin.com/company/direcci%C3%B3n-de-relaciones-estudiantiles/",
      youtube: "https://www.youtube.com/@rrree_usantamaria",
    },
  },
  {
    nombre: "Sede Viña del Mar",
    direccion:
      "Av. Federico Santa María 6090, Edificio B, Viña del Mar",
    telefono: "(+56-32) 2277881 / (+56-32) 2277891",
    email: "consultasbienestar.jmc@usm.cl",
    social: {
      facebook: "https://www.facebook.com/rreeusm.jmc/",
      instagram: "https://www.instagram.com/rreeusm_vina/",
      linkedin: "https://www.linkedin.com/company/direcci%C3%B3n-de-relaciones-estudiantiles/",
      youtube: "https://www.youtube.com/@rrree_usantamaria",
    },
  },
  {
    nombre: "Campus Casa Central Valparaíso",
    direccion: "Av. España 1680, Edificio R, Valparaíso",
    telefono: "(+56-32) 2652889",
    email: "info.rree@usm.cl",
    social: {
      facebook: "https://www.facebook.com/rreeusm.casacentral/",
      instagram: "https://www.instagram.com/rreeusm_valparaiso/",
      linkedin: "https://www.linkedin.com/company/direcci%C3%B3n-de-relaciones-estudiantiles/",
      youtube: "https://www.youtube.com/@rrree_usantamaria",
    },
  },
];


export function SedesRREE() {
  return (
    <section className="py-20 bg-background">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
        Sedes y Contactos de Bienestar Estudiantil
      </h2>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-12">
        {sedes.map((sede) => (
          <div
            key={sede.nombre}
            className="flex flex-col items-center md:items-start min-h-[300px] justify-start"
            >
            {/* TÍTULO */}
            <h3 className="text-xl font-semibold text-foreground mb-4 text-center md:text-left">
              {sede.nombre}
            </h3>

            {/* INFORMACIÓN */}
            <div className="space-y-3 text-center md:text-left">
              <div className="flex items-start md:items-center gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <p className="text-muted-foreground leading-tight">{sede.direccion}</p>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <p className="text-muted-foreground">{sede.telefono}</p>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <p className="text-muted-foreground">{sede.email}</p>
              </div>
            </div>

            {/* REDES SOCIALES */}
            <div className="flex justify-center md:justify-start gap-4 pt-6 mt-4"> 
              {sede.social.facebook && (
                <a
                  href={sede.social.facebook}
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-foreground/10 hover:bg-primary hover:text-primary-foreground transition"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}

              {sede.social.instagram && (
                <a
                  href={sede.social.instagram}
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-foreground/10 hover:bg-primary hover:text-primary-foreground transition"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}

              {sede.social.linkedin && (
                <a
                  href={sede.social.linkedin}
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-foreground/10 hover:bg-primary hover:text-primary-foreground transition"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}

              {sede.social.youtube && (
                <a
                  href={sede.social.youtube}
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-foreground/10 hover:bg-primary hover:text-primary-foreground transition"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
