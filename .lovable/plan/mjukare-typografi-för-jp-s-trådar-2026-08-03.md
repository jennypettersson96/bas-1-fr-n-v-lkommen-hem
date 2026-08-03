# Mjukare typografi för JP's trådar

Byter från systemets standardtypsnitt till en mjuk, chic kombination: **Cormorant Garamond** (rubriker) och **Karla** (brödtext), samt en lätt skrivstil för logotyp och sektionsrubriker.

## Vad som ändras

- Logotypen "JP's trådar" i navbar och footer får handstilskänsla (Cormorant Garamond i kursiv, ljus vikt, större grad).
- Sektionsrubrikerna (Om oss, Tjänster, Kontakt) och hero-rubriken får samma mjuka serif i kursiv istället för fet sans-serif.
- All brödtext, knappar, navigationslänkar och kontaktuppgifter sätts i Karla för god läsbarhet.
- Rubrikvikten sänks från `font-bold` till lättare vikt så att uttrycket blir luftigt och skandinaviskt.
- Storlekarna justeras något uppåt för rubriker eftersom serif i kursiv upplevs mindre.

Inget innehåll, inga färger, inga nya sektioner eller element ändras.

## Teknisk detalj

- `index.html`: lägg till Google Fonts-länk för Cormorant Garamond (400/500, italic) och Karla (400/500/600).
- `tailwind.config.ts`: lägg till `fontFamily.sans` = Karla och `fontFamily.display` = Cormorant Garamond.
- `src/index.css`: sätt `body` till sans-typsnittet.
- `src/components/Navbar.tsx`, `HeroSection.tsx`, `AboutSection.tsx`, `ServicesSection.tsx`, `ContactSection.tsx`, `Footer.tsx`: byt rubrikklasser till `font-display italic font-medium` och justera storlek/spacing.

Ingen påverkan på Vite-konfig, routing eller GitHub Pages-deploy.
