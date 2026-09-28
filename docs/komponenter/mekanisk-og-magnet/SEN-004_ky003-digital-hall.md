---
id: SEN-004
navn: Digital Hall-sensor (KY-003)
kategori: mekanisk-og-magnet
lokasjon: Uavklart
driftsspenning: "Må bekreftes for modulen"
signalspenning: "Digitalutgangens nivå og polaritet må bekreftes"
signaltype: "Digital Hall-effekt"
esp32_kompatibilitet: "Må verifiseres; ESP32 GPIO tåler ikke 5 V"
arduino_uno_kompatibilitet: "Må verifiseres mot nøyaktig Uno-variant"
bibliotek: "Ingen"
status: "I sortiment"
publisering: utkast
kilde: "docs/sensorer_midlertidig.md"
---

# Digital Hall-sensor (KY-003)

| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | Uavklart |
| **Signaltype** | Digital Hall-effekt |
| **Driftsspenning** | Må bekreftes |
| **Signalspenning** | Må bekreftes |
| **Bibliotek** | Ingen |

## 1. Beskrivelse
En Hall-sensor reagerer på et magnetfelt. KY-003 er oppført som digital variant; aktiv polaritet og om utgangen er åpen kollektor må kontrolleres på den konkrete modulen.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **S / OUT** | Digital signal | Digital GPIO | Bekreft navn, polaritet og utgangskrets. |
| **+** | Forsyning | Må bekreftes | Ikke anta 3,3 V eller 5 V. |
| **-** | Jord | GND | Verifiser pinnen på silketrykket. |

> **Viktig sikkerhetsvarsel:** ESP32 GPIO tåler ikke 5 V. Kontroller om utgangen krever pull-up, og at eventuell pull-up går til 3,3 V.

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)
Les digital tilstand etter at signalnivået er kontrollert.

```cpp
#include <Arduino.h>
const int hallPin = 18;

void setup() {
  Serial.begin(115200);
  pinMode(hallPin, INPUT);
}

void loop() {
  Serial.println(digitalRead(hallPin));
  delay(100);
}
```

## 4. Feilsøking (Typiske elevfeil)
* **Ingen reaksjon på magnet:** Prøv ulike avstander og magnetens poler.
* **Inngangen flyter:** Kontroller databladet for krav til pull-up.
* **ESP32 får 5 V:** Koble fra og kontroller utgangsnivået.