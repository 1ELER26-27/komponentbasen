---
id: SEN-008
navn: Flamme- og IR-sensor (KY-026)
kategori: gass-og-flamme
lokasjon: Uavklart
driftsspenning: "Må bekreftes for modulen"
signalspenning: "A0- og D0-nivå må bekreftes separat"
signaltype: "Analog og digital IR-sensorutgang"
esp32_kompatibilitet: "Må verifiseres; ingen utgang må overstige 3,3 V"
arduino_uno_kompatibilitet: "Må verifiseres mot nøyaktig Uno-variant"
bibliotek: "Ingen"
status: "I sortiment"
publisering: utkast
kilde: "docs/sensorer_midlertidig.md"
---

# Flamme- og IR-sensor (KY-026)

![Flamme- og IR-sensor (KY-026)](/bilder/komponenter/SEN-008.jpg)


| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | S1-rad D er satt av til kategorien; nøyaktig skuffnummer er ikke fastsatt |
| **Signaltype** | Analog A0 og digital D0, ifølge inventarnotatet |
| **Driftsspenning** | Må bekreftes |
| **Signalspenning** | A0 og D0 må kontrolleres hver for seg |
| **Bibliotek** | Ingen |

## 1. Beskrivelse
Modulen reagerer på infrarød stråling. En analog utgang kan gi en rå måleverdi, mens en komparatorutgang kan skifte tilstand ved en innstilt terskel. Den er ikke en sertifisert brannvarsler.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **A0** | Analog utgang | ADC-inngang | Bekreft maksimalt spenningsnivå. |
| **D0** | Digital utgang | Digital GPIO | Bekreft logikknivå og polaritet. |
| **+ / VCC** | Forsyning | Må bekreftes | Ikke gjett driftsspenning. |
| **G / GND** | Jord | GND | Kontroller silketrykk. |

> **Viktig sikkerhetsvarsel:** En modul forsyning på 5 V kan gi 5 V på utgangene. ESP32 tåler ikke dette; mål A0 og D0 før tilkobling.

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)
Bruk kun når analogutgangen er bekreftet trygg for kortets ADC.

```cpp
#include <Arduino.h>
const int flamePin = 36;

void setup() {
  Serial.begin(115200);
}

void loop() {
  Serial.println(analogRead(flamePin));
  delay(250);
}
```

## 4. Feilsøking (Typiske elevfeil)
* **D0 skifter ikke:** Juster terskeltrimmeren og kontroller polaritet.
* **A0-verdien mettes:** Kontroller ADC-område og signalspenning.
* **Brukes som brannalarm:** Modulen er kun et undervisnings-/eksperimentkort.