# Bättre proportioner i sidans element

Endast justering av storlekar, avstånd och bredder i befintliga sektioner. Inga nya element, ingen ändring av innehåll, färger eller routing/deploy.

## Genomgående
- Gemensam maxbredd på innehållet (ca 1100 px) så texten inte sträcks ut på stora skärmar.
- Enhetlig vertikal rytm mellan sektioner: samma paddingskala (mobil / surfplatta / desktop) i Om oss, Tjänster och Kontakt.
- Enhetlig rubrikskala: H1 större än H2, H2 något mindre än idag så hierarkin blir tydligare.

## Hero
- Minskad minhöjd på mobil så knappen syns utan att skrolla, behållen luftig känsla på desktop.
- Rubrikens radbredd begränsas så raderna blir jämnare; avstånd mellan rubrik, brödtext och knapp balanseras.

## Om oss
- Rubrik och text får samma vänsterkant och en läsbar radlängd (ca 65 tecken).
- Jämnare avstånd mellan rubrik och stycken.

## Tjänster
- Korten får lika höjd i raden och mer balanserad innerpadding.
- Något större mellanrum mellan korten på desktop, tätare på mobil.

## Kontakt
- Kolumnerna får jämn bredd och samma vertikala avstånd mellan ikon, rubrik och text.
- Ikonstorlek anpassas till texten (något mindre) för bättre balans.

## Footer
- Padding anpassas till sidans övriga rytm.

## Filer som ändras
`src/components/HeroSection.tsx`, `AboutSection.tsx`, `ServicesSection.tsx`, `ContactSection.tsx`, `Footer.tsx`, `Navbar.tsx` (endast höjd/avstånd), samt eventuellt `tailwind.config.ts` för container-maxbredd.

Inget rörs i `vite.config.ts`, `src/App.tsx` eller `.github/workflows/deploy.yml`.
