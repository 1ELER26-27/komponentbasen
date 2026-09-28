---
id: SEN-010
navn: Optisk gaffelsensor (KY-010)
kategori: optisk-og-lys
lokasjon: Uavklart
driftsspenning: "Må bekreftes for modulen"
signalspenning: "Digitalutgangens nivå og behov for pull-up må bekreftes"
signaltype: "Digital optisk bryter"
esp32_kompatibilitet: "Må verifiseres; ESP32 GPIO tåler ikke 5 V"
arduino_uno_kompatibilitet: "Må verifiseres mot nøyaktig Uno-variant"
bibliotek: "Ingen"
status: "I sortiment"
publisering: utkast
kilde: "docs/sensorer_midlertidig.md"
---

# Optisk gaffelsensor (KY-010)

| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | Uavklart |
| **Signaltype** | Digital optisk bryter |
| **Driftsspenning** | Må bekreftes |
| **Signalspenning** | Må bekreftes; pull-up kan være nødvendig |
| **Bibliotek** | Ingen |

## 1. Beskrivelse
En sender og mottaker sitter på hver sin side av et spor. Når en gjenstand blokkerer lysbanen, endres utgangssignalet. Modulkortets utgangskrets må identifiseres før tilkobling.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **S / OUT** | Digital signal | Digital GPIO | Sjekk om utgangen er åpen kollektor. |
| **+** | Forsyning | Må bekreftes | Kontroller modulens spenning. |
| **-** | Jord | GND | Kontroller pinneplassering. |

> **Viktig sikkerhetsvarsel:** Ikke anta at OUT er 3,3 V. ESP32 GPIO tåler ikke 5 V. Kontroller også eventuell pull-up før interrupt brukes.

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)
Dette leser nivået; pulsregistrering med avbrudd kan legges til etter at utgangen er verifisert.

```cpp
#include <Arduino.h>
const int slotPin = 23;

void setup() {
  Serial.begin(115200);
  pinMode(slotPin, INPUT);
}

void loop() {
  Serial.println(digitalRead(slotPin));
  delay(100);
}
```

## 4. Feilsøking (Typiske elevfeil)
* **Tilstanden skifter ikke:** Før en ugjennomsiktig flik gjennom sporet.
* **Inngangen flyter:** Finn ut om modulen krever ekstern pull-up.
* **Pulsantall er ustabilt:** Kontroller signalpolaritet og avbruddsflanke.