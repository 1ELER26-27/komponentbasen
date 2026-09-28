---
id: SEN-017
navn: Trykknappmodul (KY-004)
kategori: brukergrensesnitt
lokasjon: Uavklart
driftsspenning: "Må bekreftes for modulen"
signalspenning: "Utgangsnivå og eventuell pull-up må bekreftes"
signaltype: "Digital bryter"
esp32_kompatibilitet: "Må verifiseres; signalet må være maks 3,3 V"
arduino_uno_kompatibilitet: "Må verifiseres mot nøyaktig Uno-variant"
bibliotek: "Ingen; debounce-bibliotek kan brukes"
status: "I sortiment"
publisering: utkast
kilde: "docs/sensorer_midlertidig.md"
---

# Trykknappmodul (KY-004)

| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | Uavklart |
| **Signaltype** | Digital bryter |
| **Driftsspenning** | Må bekreftes |
| **Signalspenning** | Må bekreftes; kontroller pull-up |
| **Bibliotek** | Ingen |

## 1. Beskrivelse
Trykknappen gir en digital tilstand når den trykkes. Modulen kan ha innebygde komponenter; bekreft om utgangen er aktiv HIGH eller LOW og om den trenger pull-up.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **S / OUT** | Digital signal | Digital GPIO | Bekreft aktiv tilstand. |
| **+** | Forsyning | Må bekreftes | Ikke anta pinnefunksjon. |
| **-** | Jord | GND | Kontroller silkeskjerm. |

> **Viktig sikkerhetsvarsel:** ESP32 GPIO tåler ikke 5 V. Kontroller at utgangen eller pull-up ikke kobles til 5 V.

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)

```cpp
#include <Arduino.h>
const int buttonPin = 15;

void setup() {
  Serial.begin(115200);
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  Serial.println(digitalRead(buttonPin));
  delay(50);
}
```

## 4. Feilsøking (Typiske elevfeil)
* **Tilstanden er alltid LOW:** Kontroller om knappen er aktiv når den trykkes og om pull-up er riktig.
* **Flere registreringer per trykk:** Kontaktsprett krever debounce.
* **ESP32 får feil:** Kontroller at signalet ikke trekkes opp til 5 V.