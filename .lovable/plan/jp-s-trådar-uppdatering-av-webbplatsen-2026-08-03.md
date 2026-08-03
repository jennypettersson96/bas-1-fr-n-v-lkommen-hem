# JP's trådar — uppdatering av webbplatsen

Sidan får företagsnamn, svenskt innehåll och en ljus, skandinavisk stil i beige, vitt och rosa. Ingen ny sektion eller nytt element läggs till — endast befintliga uppdateras.

## Designsystem (src/index.css + tailwind.config.ts)
- Nya ljusa tokens: bakgrund varmvit/beige, kort vitt, primär dammig rosa, accent beige, dämpad text i varmgrå.
- Mjukare radie och lätt skugga för chic känsla. Inga hårdkodade färger i komponenter.
- Dark mode-tokens hålls kvar men justeras så de inte krockar.

## Innehåll (svenska)
- **Navbar**: logotyp-text "JP's trådar". Länkar Om oss / Tjänster / Kontakt med smooth scroll — oförändrad funktion.
- **Hero**: rubrik och underrubrik om sömnad/textil, knappen "Kontakta oss" behålls.
- **Om oss**: två stycken om verksamheten — sömnad, ändringar och hantverk med omsorg om detaljer.
- **Tjänster**: tre befintliga kort fylls med relevanta erbjudanden (t.ex. ändringsskrädderi, sömnad på beställning, lagning och omsyning).
- **Kontakt**: e-post jpstradar@outlook.com, telefon +4670xxxxxxx, adress JPs Trådar, Danska Vägen 65d, 41659 Göteborg.
- **Footer**: "© <år> JP's trådar. Alla rättigheter förbehållna."

## Favicon
- Ersätter `public/favicon.svg` med en enkel nål-och-tråd-symbol i sidans rosa/beige. `index.html` pekar redan på `/favicon.svg`, så ingen ny fil behövs.

## Metadata
- `index.html`: titel och beskrivningar uppdateras till JP's trådar med kort svensk beskrivning (title, description, og:title, og:description).

## Responsivitet
- Befintliga responsiva klasser behålls och kontrolleras i mobil- och desktopvy; textstorlekar och grid justeras vid behov.

## Filer som ändras
`src/index.css`, `tailwind.config.ts`, `src/components/Navbar.tsx`, `HeroSection.tsx`, `AboutSection.tsx`, `ServicesSection.tsx`, `ContactSection.tsx`, `Footer.tsx`, `public/favicon.svg`, `index.html`.

Inget rörs i `vite.config.ts`, `src/App.tsx` eller `.github/workflows/deploy.yml` — GitHub Pages-deployen påverkas inte.
