const HeroSection = () => (
  <section className="flex min-h-[56vh] flex-col items-center justify-center bg-accent/40 px-5 py-16 text-center sm:min-h-[62vh] sm:py-20 lg:min-h-[68vh] lg:py-24">
    <h1 className="max-w-[18ch] text-3xl font-bold leading-tight tracking-tight text-foreground sm:max-w-[22ch] sm:text-4xl lg:text-5xl">
      Sömnad och ändringar med känsla för detaljer
    </h1>
    <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
      JP's trådar är en liten sömnadsateljé i Göteborg. Vi syr om, lagar och skapar nytt –
      med noggrant hantverk och omsorg om varje plagg.
    </p>
    <div className="mt-7 sm:mt-8">
      <a
        href="#kontakt"
        className="inline-flex h-11 items-center rounded-md bg-primary px-7 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:px-8"
      >
        Kontakta oss
      </a>
    </div>
  </section>
);

export default HeroSection;
