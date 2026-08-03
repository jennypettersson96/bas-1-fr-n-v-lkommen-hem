const HeroSection = () => (
  <section className="flex min-h-[70vh] flex-col items-center justify-center bg-accent/40 px-4 py-20 text-center">
    <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
      Sömnad och ändringar med känsla för detaljer
    </h1>
    <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
      JP's trådar är en liten sömnadsateljé i Göteborg. Vi syr om, lagar och skapar nytt –
      med noggrant hantverk och omsorg om varje plagg.
    </p>
    <div className="mt-8">
      <a
        href="#kontakt"
        className="inline-flex h-11 items-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Kontakta oss
      </a>
    </div>
  </section>
);

export default HeroSection;
