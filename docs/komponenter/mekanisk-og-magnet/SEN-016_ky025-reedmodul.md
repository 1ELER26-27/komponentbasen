---
id: SEN-016
navn: Reed-brytermodul (KY-025)
kategori: mekanisk-og-magnet
lokasjon: Uavklart
driftsspenning: "Må bekreftes for modulen"
signalspenning: "D0/A0 og eventuell pull-up må bekreftes"
signaltype: "Magnetisk kontakt; utgangstype må bekreftes"
esp32_kompatibilitet: "Må verifiseres; utgangene må være maks 3,3 V"
arduino_uno_kompatibilitet: "Må verifiseres mot nøyaktig Uno-variant"
bibliotek: "Ingen"
status: "I sortiment"
publisering: utkast
kilde: "docs/sensorer_midlertidig.md"
---

# Reed-brytermodul (KY-025)

| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | Uavklart |
| **Signaltype** | Magnetisk bryter; utgangstype må kontrolleres |
| **Driftsspenning** | Må bekreftes |
| **Signalspenning** | A0/D0 eller bryterutgang må undersøkes |
| **Bibliotek** | Ingen |

## 1. Beskrivelse
Modulen registrerer nærvær av magnet med en reed-kontakt. KY-025-kort finnes i ulike utførelser; kontrollér om den aktuelle har analog/digital elektronikk og en justeringstrimmer.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **D0 / OUT** | Digital utgang | Digital GPIO | Kontroller logikknivå og aktiv tilstand. |
| **A0** | Analog utgang, hvis montert | ADC-inngang | Må ikke brukes før nivået er bekreftet. |
| **VCC / +** | Forsyning | Må bekreftes | Sjekk kortvariantens merking. |
| **GND / -** | Jord | GND | Felles jord. |

> **Viktig sikkerhetsvarsel:** ESP32 tåler ikke 5 V på GPIO eller ADC. Mål alle utganger hvis modulen forsynes med 5 V.

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)
Les digitalutgangen først etter elektrisk kontroll.

```cpp
#include <Arduino.h>
const int reedPin = 12;

void setup() {
  Serial.begin(115200);
  pinMode(reedPin, INPUT);
}

void loop() {
  Serial.println(digitalRead(reedPin));
  delay(100);
}
```

## 4. Feilsøking (Typiske elevfeil)
* **Utgangen skifter ikke:** Prøv magneten fra begge sider og juster eventuell trimmer.
* **A0/D0 forveksles:** Følg pinneetikettene på akkurat dette kortet.
* **ESP32-feil:** Kontroller 3,3 V-grensen før tilkobling.