# Komponentbasen

Søkbar, elevrettet oversikt over sensorer, aktuatorer og elektronikkmoduler i klasserommet for Vg1 Elektro og datateknologi.

Nettstedet er bygget med [VitePress](https://vitepress.dev/) og publiseres automatisk til GitHub Pages.

---

## 🚀 Lokal utvikling

Krever Node.js 20 eller nyere.

1. Installer avhengigheter:
   ```sh
   npm install
   ```
2. Start lokal utviklingsserver:
   ```sh
   npm run dev
   ```
   Åpne lenken som vises i terminalen (f.eks. `http://localhost:5173/komponentbasen/`).

3. Bygg statiske produksjonsfiler (valgfritt for testing):
   ```sh
   npm run build
   npm run preview
   ```

---

## 📝 Slik legger du til eller endrer en komponent

Alt innhold ligger i vanlige Markdown-filer under `docs/komponenter/`.

1. Velg riktig kategori under `docs/komponenter/<kategori>/` (f.eks. `miljo-og-klima/`, `optisk-og-lys/`, `lyd-output/` osv.).
2. Kopier malen fra [`docs/komponent-template.md`](docs/komponent-template.md) og lag en ny fil (f.eks. `SEN-020_ultralyd-hcsr04.md`).
3. Fyll inn:
   * **Nøkkelfakta:** Skuff-ID, signaltype, spenning, mikrokontroller-kompatibilitet og eventuelle biblioteker.
   * **Pinout-tabell:** Hvilke pinner på modulen som kobles til ESP32 eller Arduino.
   * **Kodeeksempel:** Minimal testkode (C++ for Arduino IDE eller PlatformIO med 115200 baud).
   * **Feilsøking:** 2–3 typiske elevfeil.
4. Legg til en lenke i [`docs/komponenter/index.md`](docs/komponenter/index.md) og i sidebaren i [`docs/.vitepress/config.mts`](docs/.vitepress/config.mts).
5. Push endringen til `main`-grenen. GitHub Pages bygger og oppdaterer siden automatisk!

---

## ⚡ Viktige regler

* **Spenning og sikkerhet:**
  * **ESP32 tåler IKKE 5 V på GPIO.** Sjekk alltid om modulen sender ut 5 V. Hvis modulen mates med 5 V, må signalet nivåtilpasses før det kobles til en ESP32-inngang.
  * **Arduino Uno R3** bruker normalt 5 V-logikk.
* **Skapsystem:**
  * **Skap 1 (`S1`):** Sensorer og signalmoduler (små skuffer A01–L05).
  * **Skap 2 (`S2`):** Aktuatorer, LED, displayer, motorer og releer.
  * Skuffer kan deles: f.eks. `S1-A01-A` og `S1-A01-B`.
* **Avgrensning:** Standard passive komponenter (motstander, kondensatorer, dioder) har egne hyller og skal ikke ha egne katalogoppføringer.

---

## 🌐 Publisering (GitHub Pages)

Prosjektet er satt opp med en GitHub Actions-arbeidsflyt i `.github/workflows/deploy.yml`.

For å aktivere publisering første gang:
1. Gå til repoet på GitHub: **Settings** -> **Pages**.
2. Under **Build and deployment** -> **Source**, velg **GitHub Actions**.
3. Neste gang du pusher til `main`, vil nettsiden automatisk rulles ut til `https://1eler26-27.github.io/komponentbasen/`.