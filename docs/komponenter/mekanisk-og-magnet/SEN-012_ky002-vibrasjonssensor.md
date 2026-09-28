---
id: SEN-012
navn: Vibrasjonssensor (KY-002)
kategori: mekanisk-og-magnet
lokasjon: Uavklart
driftsspenning: "Må bekreftes for modulen"
signalspenning: "Digitalutgangens nivå og polaritet må bekreftes"
signaltype: "Digital vibrasjons-/bevegelsesutgang"
esp32_kompatibilitet: "Må verifiseres; signalet må være maks 3,3 V"
arduino_uno_kompatibilitet: "Må verifiseres mot nøyaktig Uno-variant"
bibliotek: "Ingen"
status: "I sortiment"
publisering: utkast
kilde: "docs/sensorer_midlertidig.md"
---

# Vibrasjonssensor (KY-002)

![Vibrasjonssensor (KY-002)](/bilder/komponenter/SEN-012.jpg)


| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | Uavklart |
| **Signaltype** | Digital vibrasjons-/bevegelsesutgang |
| **Driftsspenning** | Må bekreftes |
| **Signalspenning** | Må bekreftes |
| **Bibliotek** | Ingen |

## 1. Beskrivelse
Modulen registrerer støt eller vibrasjon og gir en digital tilstandsendring eller puls. Utgangspolaritet og om kortet trenger pull-up må kontrolleres på den konkrete modulen.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **S / OUT** | Digital signal | Digital GPIO | Bekreft nivå og aktiv tilstand. |
| **+** | Forsyning | Må bekreftes | Ikke anta driftsspenning. |
| **-** | Jord | GND | Felles jord. |

> **Viktig sikkerhetsvarsel:** ESP32 tåler ikke 5 V på GPIO. Kontroller utgangsnivået og pull-up før du kobler til.

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)

```cpp
#include <Arduino.h>
const int vibrationPin = 14;

void setup() {
  Serial.begin(115200);
  pinMode(vibrationPin, INPUT);
}

void loop() {
  Serial.println(digitalRead(vibrationPin));
  delay(50);
}
```

## 4. Feilsøking (Typiske elevfeil)
* **Ingen utslag:** Prøv et lett støt og kontroller hvilken tilstand som er aktiv.
* **Inngangen flyter:** Avklar om modulen trenger pull-up eller pull-down.
* **ESP32-inngangen blir ustabil:** Kontroller jord og logikknivå.