---
id: SEN-019
navn: Mikrofon-/lydsensormodul (KY-038)
kategori: lyd-og-akustikk
lokasjon: Uavklart
driftsspenning: "Må bekreftes for modulen"
signalspenning: "A0- og D0-nivå må bekreftes separat"
signaltype: "Analog lydsignal og digital terskelutgang, ifølge notatet"
esp32_kompatibilitet: "Må verifiseres; ESP32-innganger tåler ikke 5 V"
arduino_uno_kompatibilitet: "Må verifiseres mot nøyaktig Uno-variant"
bibliotek: "Ingen"
status: "I sortiment"
publisering: utkast
kilde: "docs/sensorer_midlertidig.md"
---

# Mikrofon-/lydsensormodul (KY-038)

![Mikrofon-/lydsensormodul (KY-038)](/bilder/komponenter/SEN-019.jpg)


| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | Uavklart |
| **Signaltype** | Analog og digital terskelutgang, ifølge notatet |
| **Driftsspenning** | Må bekreftes |
| **Signalspenning** | A0 og D0 må kontrolleres separat |
| **Bibliotek** | Ingen |

## 1. Beskrivelse
Mikrofonen registrerer lyd og kan ha analogutgang samt en digital komparatorutgang. Variantens faktiske krets og aktive logikknivå må kontrolleres før bruk.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **A0** | Analog utgang | ADC-inngang | Bekreft maksimalt nivå. |
| **D0** | Digital utgang | Digital GPIO | Bekreft nivå og aktiv tilstand. |
| **+ / VCC** | Forsyning | Må bekreftes | Følg data for den konkrete modulen. |
| **G / GND** | Jord | GND | Kontroller silketrykk. |

> **Viktig sikkerhetsvarsel:** Ikke koble en utgang med ukjent spenningsnivå til ESP32. GPIO/ADC tåler ikke 5 V.

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)
Eksemplet leser analogverdien etter at signalnivået er kontrollert.

```cpp
#include <Arduino.h>
const int micPin = 39;

void setup() {
  Serial.begin(115200);
}

void loop() {
  Serial.println(analogRead(micPin));
  delay(50);
}
```

## 4. Feilsøking (Typiske elevfeil)
* **Ingen D0-reaksjon:** Juster terskelen og kontroller om HIGH eller LOW betyr lyd.
* **Ustabile målinger:** Kontroller forsyning, jord og plassering av mikrofonen.
* **Overspenning på ESP32:** Mål A0/D0 før tilkobling.