# Om Komponentbasen og skapsystemet

Komponentbasen er et oppslagsverk for elever og lærere på Vg1 Elektro og datateknologi. Målet er at du raskt skal finne riktig modul i hyllene, koble den opp riktig og teste den med mikrokontroller.

---

## 1. Fysisk skapsystem og skuff-ID

Utstyret er organisert i to sortimentskap på verkstedet:

* **Skap 1 (S1) – Sensorer og små signalmoduler:**
  * 60 små skuffer fordelt på 12 rader (**A–L**) og 5 kolonner (**1–5**).
* **Skap 2 (S2) – Aktuatorer, I/O og større utstyr:**
  * 30 små skuffer (Rader **A–F**, kolonner 1–5): LED, knapper, buzzere, moduler.
  * 9 store skuffer (Rader **G–I**, kolonner 1–3): Releer, motorer, skjermer.
  * 1 ekstra stor skuff (**J01**): Fellesutstyr, kabler, mikrokontrollere.

### Slik leser du skuff-ID-en:
Formatet er `S<Skap>-<Rad><Kolonne>[-Seksjon]`:
* `S1-A01` = Skap 1, Rad A, Skuff 1 (hel skuff).
* `S1-A01-A` / `S1-A01-B` = Skap 1, Rad A, Skuff 1 (delt skuff med skillevegg: A = venstre/foran, B = høyre/bak).
* `S2-G01` = Skap 2, Stor skuff 1.

---

## 2. Kategoriinndeling

Komponentene er delt inn etter funksjon:
1. **Miljø og klima:** Temperatur, luftfuktighet, trykk, vann/regn.
2. **Optisk og lys:** LDR (fotomotstand), linjesensor, gaffelsensor, IR.
3. **Mekanisk og magnetisk:** Hall-effekt, Reed-kontakter, vippebrytere, vibrasjon.
4. **Gass og flamme:** Røyk-, gass- og flammedeteksjon.
5. **Avstand og rom:** Ultralyd, optisk avstand (ToF), PIR bevegelse, IMU/akselerometer.
6. **Brukergrensesnitt:** Potensiometre, roterende enkodere, trykknapper.
7. **Lyd og akustikk:** Mikrofoner og lydsensorer.
8. **Lys og indikatorer:** Enkelt-LED, tofargede LED, RGB-moduler, 7-segment, displayer.
9. **Lydutgang:** Aktive og passive buzzere, høyttalere.
10. **Kraft og styring:** Relemoduler, MOSFET, motordrivere.

---

## 3. Viktig sikkerhetsregel: Spenningsnivåer!

Før du kobler en modul til et mikrokontrollerkort, må du skille mellom **driftsspenning** (VCC) og **signalspenning**:

::: danger ESP32 tåler IKKE 5 V på GPIO!
* **ESP32** opererer med **3,3 V logikknivå**. Hvis en sensor sender 5 V inn på en GPIO-pinne, kan mikrokontrolleren bli permanent ødelagt.
* Hvis modulen drives av 5 V, må signalet nivåtilpasses (spenningsdeler eller nivåskifter) før det kobles til ESP32, med mindre modulen har en egen 3,3 V-utgang.
:::

::: tip Arduino Uno R3
* **Arduino Uno R3** bruker normalt **5 V logikknivå**. Mange 3,3 V-sensorer må derfor beskyttes eller ha nivåtilpasning hvis de kobles til Uno. Sjekk alltid hvilken variant du bruker.
:::

---

## 4. Hvordan legge til eller oppdatere en komponent

Alt innhold ligger som enkle Markdown-filer i repoet under `docs/komponenter/<kategori>/`:

1. Ta utgangspunkt i malen i [`komponent-template.md`](/komponent-template).
2. Opprett en ny fil, f.eks. `docs/komponenter/avstand-og-rom/SEN-020_hcsr04-ultralyd.md`.
3. Fyll inn tabellene, kodeeksempel og feilsøkingstips.
4. Gjør `git commit` og `git push` til `main`. GitHub Pages oppdaterer nettsiden automatisk på ca. 30 sekunder!
