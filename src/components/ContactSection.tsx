import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="kontakt" className="scroll-mt-16 py-14 sm:py-16 lg:py-20">
    <div className="container">
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Kontakt</h2>
      <div className="mt-6 grid gap-8 sm:mt-8 sm:grid-cols-3 sm:gap-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <Mail className="h-6 w-6 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">E-post</h3>
          <a
            href="mailto:jpstradar@outlook.com"
            className="text-sm leading-relaxed text-muted-foreground transition-colors hover:text-foreground"
          >
            jpstradar@outlook.com
          </a>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <Phone className="h-6 w-6 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">Telefon</h3>
          <a
            href="tel:+4670xxxxxxx"
            className="text-sm leading-relaxed text-muted-foreground transition-colors hover:text-foreground"
          >
            +4670xxxxxxx
          </a>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <MapPin className="h-6 w-6 text-primary" />
          <h3 className="text-sm font-semibold text-foreground">Adress</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            JPs Trådar
            <br />
            Danska Vägen 65d
            <br />
            41659 Göteborg
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
