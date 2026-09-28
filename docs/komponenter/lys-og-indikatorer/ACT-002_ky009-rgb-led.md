---
id: ACT-002
navn: RGB LED-modul (KY-009)
kategori: lys-og-indikatorer
lokasjon: Uavklart
driftsspenning: "Må bekreftes for modulen"
signalspenning: "R/G/B-pinner drives av mikrokontroller; strøm og polaritet må bekreftes"
signaltype: "Tre LED-kanaler, PWM mulig"
esp32_kompatibilitet: "Må verifiseres; GPIO krever riktig strømbegrensning"
arduino_uno_kompatibilitet: "Må verifiseres mot nøyaktig Uno-variant"
bibliotek: "Ingen"
status: "I sortiment"
publisering: utkast
kilde: "docs/sensorer_midlertidig.md"
---

# RGB LED-modul (KY-009)

![RGB LED-modul (KY-009)](/bilder/komponenter/ACT-002.jpg)


| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | Uavklart |
| **Signaltype** | Tre LED-kanaler; PWM kan brukes hvis kortet støtter det |
| **Driftsspenning** | Må bekreftes |
| **Signalspenning** | GPIO-styresignal; LED-strøm/polaritet må kontrolleres |
| **Bibliotek** | Ingen |

## 1. Beskrivelse
RGB-LED-en har røde, grønne og blå kanaler som kan styres separat. KY-009 kan være en enkel LED-bærer uten innebygde strømbegrensningsmotstander; kontroller kretskortet før bruk.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **R / G / B** | LED-kanaler | Egne GPIO-er via riktig strømbegrensning | Bekreft kanalrekkefølge og polaritet. |
| **Felles pinne** | Anode eller katode | Riktig forsyningsskinne | Må identifiseres på konkret komponent. |

> **Viktig sikkerhetsvarsel:** Bruk ikke LED-en direkte på GPIO uten bekreftet strømbegrensning. Ikke gjett hvilken pinne som er felles.

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)
Test først én kanal med korrekt strømbegrensning.

```cpp
#include <Arduino.h>
const int redPin = 16;

void setup() {
  Serial.begin(115200);
  pinMode(redPin, OUTPUT);
}

void loop() {
  digitalWrite(redPin, HIGH);
  Serial.println("Rød kanal på");
  delay(500);
  digitalWrite(redPin, LOW);
  Serial.println("Rød kanal av");
  delay(500);
}
```

## 4. Feilsøking (Typiske elevfeil)
* **LED-en lyser ikke:** Kontroller polaritet og felles pinne.
* **LED-en skades eller blir varm:** Kontroller at hver kanal har strømbegrensning.
* **Fargene er byttet:** Kontroller pinout for R, G og B.