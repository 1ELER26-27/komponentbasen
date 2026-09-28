---
id: SEN-003
navn: NTC-temperaturmodul (KY-013)
kategori: miljo-og-klima
lokasjon: Uavklart
driftsspenning: "Må bekreftes for den konkrete modulen"
signalspenning: "Analogt nivå avhenger av modulens spenningsdeler; må bekreftes"
signaltype: "Analog spenningsdeler"
esp32_kompatibilitet: "Må verifiseres; ESP32 ADC tåler ikke 5 V"
arduino_uno_kompatibilitet: "Må verifiseres mot nøyaktig Uno-variant"
bibliotek: "Ingen"
status: "I sortiment"
publisering: utkast
kilde: "docs/sensorer_midlertidig.md"
---

# NTC-temperaturmodul (KY-013)

![NTC-temperaturmodul (KY-013)](/bilder/komponenter/SEN-003.jpg)


| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | Uavklart |
| **Signaltype** | Analog spenningsdeler |
| **Driftsspenning** | Må bekreftes |
| **Signalspenning** | Avhenger av spenningsdeleren; må bekreftes |
| **Bibliotek** | Ingen |

## 1. Beskrivelse
En NTC-termistor endrer motstand når temperaturen endres. Modulen gjør motstandsendringen om til et analogt spenningsnivå. NTC-verdi, seriemotstand og beta-verdi er ikke bekreftet for den aktuelle modulen.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **S** | Analog signal | ADC-inngang, for eksempel GPIO 35 eller A0 | Kontroller maksimalt signalnivå. |
| **+** | Forsyning | Må bekreftes | Ikke bruk 5 V før moduldata er kontrollert. |
| **-** | Jord | GND | Felles jord. |

> **Viktig sikkerhetsvarsel:** ESP32 ADC-innganger tåler ikke 5 V. Bekreft utgangsnivået og kortets tillatte ADC-område før tilkobling.

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)
Dette leser rå ADC-verdi. Temperaturberegning krever bekreftede NTC- og motstandsverdier.

```cpp
#include <Arduino.h>
const int ntcPin = 35;

void setup() {
  Serial.begin(115200);
}

void loop() {
  Serial.println(analogRead(ntcPin));
  delay(500);
}
```

## 4. Feilsøking (Typiske elevfeil)
* **Temperaturen virker urimelig:** Ikke bruk omregningsformel før motstandsverdier og NTC-data er kjent.
* **ADC-verdien står fast:** Kontroller pinout, felles jord og valgt ADC-pinne.
* **ESP32-inngangen får for høy spenning:** Koble fra og kontroller spenningsdeleren.