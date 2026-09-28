---
id: SEN-005
navn: Analog Hall-sensor (KY-035)
kategori: mekanisk-og-magnet
lokasjon: Uavklart
driftsspenning: "Må bekreftes for modulen"
signalspenning: "Analogutgangens område må bekreftes"
signaltype: "Analog Hall-effekt"
esp32_kompatibilitet: "Må verifiseres; ESP32 ADC tåler ikke 5 V"
arduino_uno_kompatibilitet: "Må verifiseres mot nøyaktig Uno-variant"
bibliotek: "Ingen"
status: "I sortiment"
publisering: utkast
kilde: "docs/sensorer_midlertidig.md"
---

# Analog Hall-sensor (KY-035)

| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | Uavklart |
| **Signaltype** | Analog Hall-effekt, ifølge inventarnotatet |
| **Driftsspenning** | Må bekreftes |
| **Signalspenning** | Må bekreftes før ADC-tilkobling |
| **Bibliotek** | Ingen |

## 1. Beskrivelse
Modulen er oppført som en analog Hall-sensor der utgangen endres med magnetfeltet. Nøyaktig følsomhet, hvilenivå og utgangsområde er ikke dokumentert.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **S / OUT** | Analog signal | ADC-inngang, eksempel GPIO 34 eller A0 | Bekreft spenningsområde først. |
| **+** | Forsyning | Må bekreftes | Bruk dokumentert spenning. |
| **-** | Jord | GND | Felles jord. |

> **Viktig sikkerhetsvarsel:** ESP32 ADC tåler ikke 5 V. Ikke koble OUT til ESP32 før maksimalt analognivå er kjent.

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)
Eksemplet leser rå ADC-verdi; det konverterer ikke verdien til magnetfeltstyrke.

```cpp
#include <Arduino.h>
const int hallPin = 34;

void setup() {
  Serial.begin(115200);
}

void loop() {
  Serial.println(analogRead(hallPin));
  delay(100);
}
```

## 4. Feilsøking (Typiske elevfeil)
* **Verdien endres lite:** Endre magnetens avstand og orientering.
* **Verdien er ustabil:** Kontroller jord, forsyning og analogpinne.
* **ADC overstiges:** Bekreft utgangens maksimum før ESP32-tilkobling.