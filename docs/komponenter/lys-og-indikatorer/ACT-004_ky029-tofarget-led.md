---
id: ACT-004
navn: Tofarget LED-modul (KY-029)
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

# Tofarget LED-modul (KY-029)

![Tofarget LED-modul (KY-029)](/bilder/komponenter/ACT-004.jpg)


| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | Uavklart |
| **Signaltype** | To LED-kanaler |
| **Driftsspenning** | Må bekreftes |
| **Signalspenning** | GPIO-styring; LED-strøm/polaritet må bekreftes |
| **Bibliotek** | Ingen |

## 1. Beskrivelse
Modulen har to LED-farger. KY-029 og KY-011 skal ikke antas å ha samme pinout eller felles polaritet; kontroller komponenten fysisk.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **R / G** | Fargekanaler | Egne GPIO-er | Bekreft pinnefunksjon. |
| **Felles pinne** | Anode/katode | Forsyning eller GND | Identifiser type før tilkobling. |

> **Viktig sikkerhetsvarsel:** Kontroller strømbegrensning før LED-en kobles til GPIO. Ikke anta at kortet har seriemotstander.

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
* **Fargene virker ikke som forventet:** Kontroller felles anode/katode.
* **LED-en lyser svakt eller ikke:** Kontroller pinout og strømbegrensning.
* **GPIO blir overbelastet:** Bruk riktig driver dersom strømkravet overskrider pinnegrensen.