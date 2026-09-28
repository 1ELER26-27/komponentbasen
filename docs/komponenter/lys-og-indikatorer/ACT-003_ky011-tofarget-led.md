---
id: ACT-003
navn: Tofarget LED-modul (KY-011)
kategori: lys-og-indikatorer
lokasjon: Uavklart
driftsspenning: "Må bekreftes for modulen"
signalspenning: "LED-kanaler styres av GPIO; polaritet og strøm må bekreftes"
signaltype: "To LED-kanaler"
esp32_kompatibilitet: "Må verifiseres; strømbegrensning og polaritet må kontrolleres"
arduino_uno_kompatibilitet: "Må verifiseres mot nøyaktig Uno-variant"
bibliotek: "Ingen"
status: "I sortiment"
publisering: utkast
kilde: "docs/sensorer_midlertidig.md"
---

# Tofarget LED-modul (KY-011)

| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | Uavklart |
| **Signaltype** | To LED-kanaler |
| **Driftsspenning** | Må bekreftes |
| **Signalspenning** | GPIO-styring; LED-strøm/polaritet må bekreftes |
| **Bibliotek** | Ingen |

## 1. Beskrivelse
Modulen har to LED-farger som kan styres hver for seg. Felles pinne kan være anode eller katode, og strømbegrensning på kortet må kontrolleres.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **R / G** | Fargekanaler | Egne GPIO-er | Kontroller kanalrekkefølge og strømbegrensning. |
| **Felles pinne** | Anode/katode | Forsyning eller GND | Må identifiseres før strøm kobles til. |

> **Viktig sikkerhetsvarsel:** Ikke koble ukjent LED-modul direkte til GPIO. Bekreft motstander, polaritet og kortets strømgrenser.

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)

```cpp
#include <Arduino.h>
const int colorPin = 22;

void setup() {
  Serial.begin(115200);
  pinMode(colorPin, OUTPUT);
}

void loop() {
  digitalWrite(colorPin, HIGH);
  Serial.println("Kanal på");
  delay(500);
  digitalWrite(colorPin, LOW);
  Serial.println("Kanal av");
  delay(500);
}
```

## 4. Feilsøking (Typiske elevfeil)
* **Bare én farge virker:** Kontroller begge kanalene og polariteten.
* **Ingen lys:** Bekreft felles pinne og eventuell motstand.
* **Overbelastet GPIO:** Bruk egnet strømbegrensning og driver ved behov.