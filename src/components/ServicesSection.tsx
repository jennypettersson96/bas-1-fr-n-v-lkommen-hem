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
  <section id="tjanster" className="bg-secondary/60 py-16 scroll-mt-16 sm:py-20">
    <div className="container">
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Tjänster</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Card key={i} className="border-border/70 bg-card shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">{s.title}</CardTitle>
              <CardDescription className="leading-relaxed">{s.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
