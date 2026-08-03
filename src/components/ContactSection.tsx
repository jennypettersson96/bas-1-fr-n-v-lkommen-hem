import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="kontakt" className="py-16 scroll-mt-16 sm:py-20">
    <div className="container">
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Kontakt</h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        <div className="flex flex-col items-center gap-3 text-center">
          <Mail className="h-8 w-8 text-primary" />
          <h3 className="font-semibold text-foreground">E-post</h3>
          <a
            href="mailto:jpstradar@outlook.com"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            jpstradar@outlook.com
          </a>
        </div>
        <div className="flex flex-col items-center gap-3 text-center">
          <Phone className="h-8 w-8 text-primary" />
          <h3 className="font-semibold text-foreground">Telefon</h3>
          <a
            href="tel:+4670xxxxxxx"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            +4670xxxxxxx
          </a>
        </div>
        <div className="flex flex-col items-center gap-3 text-center">
          <MapPin className="h-8 w-8 text-primary" />
          <h3 className="font-semibold text-foreground">Adress</h3>
          <p className="text-sm text-muted-foreground">
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
