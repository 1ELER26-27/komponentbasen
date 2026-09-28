---
id: ACT-001
navn: RGB LED-modul (KY-016)
kategori: lys-og-indikatorer
lokasjon: Uavklart
driftsspenning: "Må bekreftes for modulen"
signalspenning: "R/G/B-pinner drives av mikrokontroller; strøm og polaritet må bekreftes"
signaltype: "Tre LED-kanaler, PWM mulig"
esp32_kompatibilitet: "Må verifiseres; bruk strømbegrensning og 3,3 V GPIO"
arduino_uno_kompatibilitet: "Må verifiseres mot nøyaktig Uno-variant"
bibliotek: "Ingen"
status: "I sortiment"
publisering: utkast
kilde: "docs/sensorer_midlertidig.md"
---

# RGB LED-modul (KY-016)

| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | Uavklart |
| **Signaltype** | Tre LED-kanaler; PWM kan brukes hvis kortet støtter det |
| **Driftsspenning** | Må bekreftes |
| **Signalspenning** | GPIO-styresignal; LED-strøm/polaritet må kontrolleres |
| **Bibliotek** | Ingen |

## 1. Beskrivelse
Modulen kan blande rødt, grønt og blått lys ved å styre tre kanaler. Felles anode/katode og innebygde strømbegrensningsmotstander må identifiseres på akkurat dette kortet.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **R / G / B** | Fargekanaler | Egne digitale/PWM-pinner | Ikke koble til før strømbegrensning og polaritet er bekreftet. |
| **- / felles** | Felles LED-tilkobling | GND eller forsyning, avhengig av type | Finn ut om modulen er felles anode eller katode. |

> **Viktig sikkerhetsvarsel:** Ikke koble LED-kanaler direkte til GPIO før det er bekreftet at modulen har passende motstander. Bruk en driver hvis kanalstrømmen overstiger kortets GPIO-grense.

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)
En enkel digital test av én kanal, etter at strømbegrensning og aktiv polaritet er kontrollert.

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
* **Fargen er invertert eller uteblir:** Kontroller felles anode/katode og polaritet.
* **LED eller kort blir varmt:** Koble fra og kontroller strømbegrensning.
* **Feil lysstyrke:** PWM-API og kanalpolaritet kan variere med kort og Arduino-kjerne.