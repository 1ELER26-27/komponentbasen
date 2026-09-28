---
id: SEN-007
navn: Infrarød linjesensor (KY-033)
kategori: optisk-og-lys
lokasjon: Uavklart
driftsspenning: "Må bekreftes for den konkrete modulen"
signalspenning: "Digitalutgangens nivå må måles eller bekreftes"
signaltype: "Digital infrarød refleksjon"
esp32_kompatibilitet: "Må verifiseres; utgangen må ikke overstige 3,3 V"
arduino_uno_kompatibilitet: "Må verifiseres mot nøyaktig Uno-variant"
bibliotek: "Ingen"
status: "I sortiment"
publisering: utkast
kilde: "docs/sensorer_midlertidig.md"
---

# Infrarød linjesensor (KY-033)

![Infrarød linjesensor (KY-033)](/bilder/komponenter/SEN-007.jpg)


| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | Uavklart |
| **Signaltype** | Digital IR-refleksjon, ifølge inventarnotatet |
| **Driftsspenning** | Må bekreftes |
| **Signalspenning** | Digitalutgang må kontrolleres |
| **Bibliotek** | Ingen |

## 1. Beskrivelse
Modulen registrerer forskjeller i infrarød refleksjon fra underlaget, for eksempel mellom en mørk linje og en lys flate. Den faktiske oppførselen avhenger av modulversjonen og justeringen.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **OUT / S** | Digital utgang | Digital GPIO | Kontroller silkeskjerm og logikknivå. |
| **VCC / +** | Forsyning | Må bekreftes | Bruk datablad eller mål den konkrete modulen. |
| **GND / -** | Jord | GND | Felles jord. |

> **Viktig sikkerhetsvarsel:** Ikke koble ukjent digitalutgang til ESP32. GPIO tåler ikke 5 V; bekreft at utgangen holder seg innenfor 3,3 V.

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)
Dette viser rå digitaltilstand etter at signalnivået er kontrollert.

```cpp
#include <Arduino.h>
const int sensorPin = 19;

void setup() {
  Serial.begin(115200);
  pinMode(sensorPin, INPUT);
}

void loop() {
  Serial.println(digitalRead(sensorPin));
  delay(100);
}
```

## 4. Feilsøking (Typiske elevfeil)
* **Ingen tydelig skille mellom flater:** Juster høyde og eventuell trimmer.
* **Signalet er invertert:** Test hvilken logisk verdi som svarer til linje og bakgrunn.
* **ESP32-inngangen får 5 V:** Koble fra; bruk bare verifisert 3,3 V-logikk.