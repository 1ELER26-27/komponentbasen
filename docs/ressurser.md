# Eksterne ressurser og eksempelkode

Dette dokumentet er en veiledning og referanseliste for lærere og elever når det skal legges til nye komponenter, skrives eksempelkode eller feilsøkes i **Komponentbasen**.

---

## 1. De beste kildene på nett for kode og koblingsskjemaer

Når du skal legge til en ny sensor eller finne fungerende kode, er disse nettstedene og GitHub-arkivene de mest pålitelige:

### A. [`arduinomodules.info`](https://arduinomodules.info)
* **Hva det er:** Det mest komplette og brukte oppslagsverket for standard «KY-sensormoduler» (KY-001 til KY-053).
* **Beste bruksområde:** 
  * Finne kretsdiagrammer (skjematikk) for å se hvilke motstander og kondensatorer som sitter på kortet.
  * Forstå hvordan komparator-kretser (LM393) og trimmepotensiometre fungerer på modulen.
  * Enkle, gjennomtestede Arduino C++ kodesnutter for hver modul.
* **Direkte lenke:** [https://arduinomodules.info](https://arduinomodules.info)

---

### B. Keyestudio ESP32 & Arduino 37-in-1 Sensor Kit (GitHub)
* **Hva det er:** Offisielle åpne undervisningshefter fra produsenten Keyestudio.
* **Beste bruksområde:**
  * **Spesifikk C++-kode for ESP32:** Mange sensor-guider på nett er kun tilpasset 5 V Arduino Uno. Keyestudio har et eget repo der all koden er tilpasset ESP32 med riktige pinner og 3,3 V logikk.
  * Trinn-for-trinn forklaringer av teori, oppkobling og forventet terminalutskrift.
* **Viktige GitHub-lenker:**
  * **ESP32 37-in-1 kit:** [`keyestudio/KS5005-KS5006-Keyestudio-ESP32-37-in-1-Sensor-Kit`](https://github.com/keyestudio/KS5005-KS5006-Keyestudio-ESP32-37-in-1-Sensor-Kit)
  * **Arduino Uno 37-in-1 kit:** [`keyestudio/KS0487-Keyestudio-37-in-1-Sensor-Kit-Upgraded-v3.0`](https://github.com/keyestudio/KS0487-Keyestudio-37-in-1-Sensor-Kit-Upgraded-v3.0)

---

### C. [`sensorkit.joy-it.net`](https://sensorkit.joy-it.net)
* **Hva det er:** Dokumentasjonsportal fra den tyske produsenten Joy-IT for alle standard sensor- og aktuatormoduler.
* **Beste bruksområde:**
  * Tydelige pinout-oversikter og tekniske spesifikasjoner (driftsspenning, strømtrekk).
  * Eksempelkode i tre varianter for hver sensor: **Arduino (C++)**, **Raspberry Pi (Python)** og **BBC micro:bit**.
  * Rene bilder og kretssymboler.
* **Direkte lenke:** [https://sensorkit.joy-it.net/en/](https://sensorkit.joy-it.net/en/)

---

### D. [`Random Nerd Tutorials`](https://randomnerdtutorials.com)
* **Hva det er:** Den beste opplæringsbloggen på nett for **ESP32**, **ESP8266** og Arduino-kompatibel maskinvare.
* **Beste bruksområde:**
  * Når elevene skal ta sensorene videre til WiFi, Bluetooth, MQTT eller webservere (IoT-prosjekter).
  * Grundige guider på ESP32 pinout (hvilke GPIO-pinner som er trygge å bruke, og hvilke som er «strapping pins»).
  * Kalibrering og linærisering av ESP32 ADC (analog-til-digital omformer).
* **Direkte lenke:** [https://randomnerdtutorials.com](https://randomnerdtutorials.com)

---

### E. Fritzing-koblingstegninger på GitHub
* **[`engrpanda/37-in-1-Sensors-and-fritzing-files`](https://github.com/engrpanda/37-in-1-Sensors-and-fritzing-files)**
  * Inneholder Fritzing-deler (`.fzpz`) for samtlige moduler i settet.
  * Nyttig hvis du eller elevene vil lage fine illustrasjoner av koblingsbrett til rapporter eller oppgavehefter.
* **[`josejuansanchez/37-in-1-arduino-sensor-kit`](https://github.com/josejuansanchez/37-in-1-arduino-sensor-kit)**
  * Ryddig mappeoversikt (`001` til `040`) med rask tilgang til kildekoden for hver modul.

---

## 2. Hurtigoppslag: Standard KY-sensormoduler

Mange av sensorene i klasserommet stammer fra den klassiske «37-in-1»-standarden. Her er en referansetabell:

| Modell | Type | Standard funksjon | Signal | Typiske biblioteker |
| :--- | :--- | :--- | :--- | :--- |
| **KY-001** | Sensor | DS18B20 digital temperatur | 1-Wire | `OneWire`, `DallasTemperature` |
| **KY-002** | Sensor | Vibrasjonsbryter (fjær) | Digital | Ingen |
| **KY-003** | Sensor | Hall-effekt magnetbryter (3144) | Digital | Ingen |
| **KY-004** | Sensor | Taktil trykknapp | Digital | Ingen (bruk `INPUT_PULLUP`) |
| **KY-005** | Aktuator | Infrarød LED-sender (38 kHz) | Digital / PWM | `IRremote` |
| **KY-006** | Aktuator | Passiv piezo-buzzer | PWM / Tone | `ledcWrite` (ESP32) / `tone()` (Uno) |
| **KY-008** | Aktuator | Lasersender (650 nm rød) | Digital | Ingen |
| **KY-009** | Aktuator | SMD 5050 RGB LED | 3× PWM | Ingen |
| **KY-010** | Sensor | Optisk gaffelsensor (interrupter) | Digital | Ingen |
| **KY-011** | Aktuator | 5 mm Tofarget LED (Rød/Grønn) | 2× Digital | Ingen |
| **KY-012** | Aktuator | Aktiv buzzer (fast tone) | Digital ON/OFF| Ingen |
| **KY-013** | Sensor | NTC-termistor (analog temp) | Analog | Steinhart-Hart formel i koden |
| **KY-015** | Sensor | DHT11 temperatur og fuktighet | 1-leder digital | `DHT sensor library` |
| **KY-016** | Aktuator | 5 mm RGB LED (4 pinner) | 3× PWM | Ingen |
| **KY-017** | Sensor | Kvikksølv vippesensor | Digital | Ingen |
| **KY-018** | Sensor | Fotomotstand (LDR / lyssensor) | Analog | Ingen |
| **KY-020** | Sensor | Kule-vippesensor (ball tilt) | Digital | Ingen |
| **KY-021** | Sensor | Mini magnetisk reed-bryter | Digital | Ingen |
| **KY-022** | Sensor | Infrarød mottaker (VS1838B) | Digital (38 kHz) | `IRremote` |
| **KY-024** | Sensor | Lineær magnetisk Hall-sensor m/pot| Digital + Analog| Ingen |
| **KY-025** | Sensor | Reed-modul m/komparator og pot | Digital + Analog| Ingen |
| **KY-026** | Sensor | Flamme-/IR-sensor m/komparator | Digital + Analog| Ingen |
| **KY-027** | Aktuator | Magic Light Cup (Tilt + LED) | Digital | Ingen |
| **KY-028** | Sensor | Digital temperatur m/termistor | Digital + Analog| Ingen |
| **KY-029** | Aktuator | 3 mm Tofarget LED | 2× Digital | Ingen |
| **KY-031** | Sensor | Riste-/slagsensor (knock sensor) | Digital | Ingen |
| **KY-032** | Sensor | IR hindringssensor (reflekterende) | Digital | Ingen |
| **KY-033** | Sensor | Linjefølger / linjesensor (TCRT5000)| Digital | Ingen |
| **KY-034** | Aktuator | 7-fargers blinkende LED (auto) | Strøm (VCC/GND)| Ingen |
| **KY-035** | Sensor | Analog Hall-sensor (49E) | Analog | Ingen |
| **KY-036** | Sensor | Berøringssensor (touch / metall) | Digital + Analog| Ingen |
| **KY-037** | Sensor | Mikrofon / lyd (høy følsomhet) | Digital + Analog| Ingen |
| **KY-038** | Sensor | Mikrofon / lyd (standard) | Digital + Analog| Ingen |
| **KY-039** | Sensor | Pulsmåler (optisk fingerpuls) | Analog | Ingen |
| **KY-040** | Sensor | Roterende enkoder m/knapp | 3× Digital | `Encoder` eller avlesing via interrupts |

---

## 3. Viktige forskjeller ved tilpasning til ESP32

Når du kopierer eksempler fra nettet (som oftest er skrevet for en 5 V Arduino Uno), må du gjøre følgende tilpasninger for **ESP32**:

1. **Spenning og innganger:**
   * **Maks 3,3 V:** ESP32 GPIO-pinner tåler kun 3,3 V. Signaler over 3,6 V kan brenne pinnen.
   * Moduler med analog utgang som forsynes med 5 V vil gi opptil 5 V ut – forsyn dem heller med 3,3 V fra ESP32-kortet dersom modulen fungerer på 3,3 V.
2. **Analoge innganger (`analogRead`):**
   * Arduino Uno: **10-bit** oppløsning (`0` til `1023`).
   * ESP32: **12-bit** oppløsning (`0` til `4095`).
   * *Merk:* På ESP32 kan ikke ADC2-pinnene brukes til `analogRead()` samtidig som WiFi er aktivert. Bruk ADC1-pinnene (GPIO 32–39) for sensorer.
3. **Pinner som kun er innganger:**
   * På ESP32 er GPIO 34, 35, 36 (VP) og 39 (VN) kun innganger (input only). De har ikke interne pull-up eller pull-down motstander, og kan ikke settes som `OUTPUT`.
4. **PWM og lyd (`tone`):**
   * Arduino Uno bruker `tone(pin, freq)` og `analogWrite(pin, val)`.
   * ESP32 bruker LEDC-maskinvaren for PWM:
     ```cpp
     // På nyere ESP32 Arduino Core v3.x:
     ledcAttach(pin, 5000, 8); // pin, frekvens, 8-bit oppløsning
     ledcWrite(pin, 128);      // 50 % duty cycle
     ```

---

## 4. Oppskrift for å legge til en ny komponent i Komponentbasen

1. **Finn bilde:**
   * Ta bilde eller hent et rent produktbilde.
   * Lagre som `<ID>.jpg` (f.eks. `SEN-020.jpg`) i [`docs/public/bilder/komponenter/`](file:///home/ingve/Projects/komponentbasen/docs/public/bilder/komponenter/).
2. **Opprett Markdown-fil:**
   * Opprett fil i riktig undermappe, f.eks. `docs/komponenter/<kategori>/<ID>_<navn>.md`.
   * Fyll ut standardblokkene: Frontmatter, bilde, nøkkelfakta, beskrivelse, pinout-tabell, C++ kodeeksempel og feilsøkingstips.
3. **Legg til i oversikten:**
   * Legg til en rad med miniatyrbilde i [`docs/komponenter/index.md`](file:///home/ingve/Projects/komponentbasen/docs/komponenter/index.md).
   * Legg til lenke i sidemenyen i [`docs/.vitepress/config.mts`](file:///home/ingve/Projects/komponentbasen/docs/.vitepress/config.mts).
4. **Bygg og publiser:**
   ```bash
   npm run build
   git add .
   git commit -m "feat: legg til <ID>"
   git push origin main
   ```
