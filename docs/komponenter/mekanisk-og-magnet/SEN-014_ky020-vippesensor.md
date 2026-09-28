---
id: SEN-014
navn: Vippesensor-modul (KY-020)
kategori: mekanisk-og-magnet
lokasjon: Uavklart
driftsspenning: "Må bekreftes for modulen"
signalspenning: "Digitalutgangens nivå må bekreftes"
signaltype: "Digital tilt-/vippeutgang"
esp32_kompatibilitet: "Må verifiseres; signalet må være maks 3,3 V"
arduino_uno_kompatibilitet: "Må verifiseres mot nøyaktig Uno-variant"
bibliotek: "Ingen"
status: "I sortiment"
publisering: utkast
kilde: "docs/sensorer_midlertidig.md"
---

# Vippesensor-modul (KY-020)

![Vippesensor-modul (KY-020)](/bilder/komponenter/SEN-014.jpg)


| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | Uavklart |
| **Signaltype** | Digital tilt-/vippeutgang |
| **Driftsspenning** | Må bekreftes |
| **Signalspenning** | Må bekreftes |
| **Bibliotek** | Ingen |

## 1. Beskrivelse
Modulen er oppført som en digital vippesensor. Den faktiske brytertypen, aktive tilstand og pinout må bekreftes mot kortet.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **S / OUT** | Digital signal | Digital GPIO | Bekreft fysisk pinneetikett. |
| **+** | Forsyning | Må bekreftes | Ikke gjett spenning. |
| **-** | Jord | GND | Felles jord. |

> **Viktig sikkerhetsvarsel:** Bekreft signalnivå før GPIO-tilkobling. ESP32 tåler ikke 5 V.

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)

```cpp
#include <Arduino.h>
const int tiltPin = 13;

void setup() {
  Serial.begin(115200);
  pinMode(tiltPin, INPUT);
}

void loop() {
  Serial.println(digitalRead(tiltPin));
  delay(100);
}
```

## 4. Feilsøking (Typiske elevfeil)
* **Ingen endring:** Vipp sensoren langsomt i ulike retninger.
* **Tilfeldige verdier:** Kontroller om utgangen trenger pull-up eller pull-down.
* **Feil korttilkobling:** Følg dokumentert pinout, ikke bare modulens utseende.