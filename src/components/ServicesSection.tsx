import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    title: "Ändringar och passform",
    description:
      "Uppläggning av byxor och kjolar, insläpp, midjejustering och byte av dragkedjor – så att plagget sitter precis rätt.",
  },
  {
    title: "Sömnad på beställning",
    description:
      "Nysydda plagg, gardiner och hemtextil efter dina mått och önskemål, i tyger vi väljer tillsammans.",
  },
  {
    title: "Lagning och omsyning",
    description:
      "Osynlig lagning, stoppning och omsyning av älskade plagg – ett hållbart alternativ till att köpa nytt.",
  },
];

const ServicesSection = () => (
  <section id="tjanster" className="scroll-mt-16 bg-secondary/60 py-14 sm:py-16 lg:py-20">
    <div className="container">
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Tjänster</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:mt-8 lg:grid-cols-3 lg:gap-6">
        {services.map((s, i) => (
          <Card key={i} className="h-full border-border/70 bg-card shadow-sm">
            <CardHeader className="space-y-2 p-5 sm:p-6">
              <CardTitle className="text-base sm:text-lg">{s.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">{s.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
