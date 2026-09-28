---
id: SEN-009
navn: Fotomotstand-modul (KY-018)
kategori: optisk-og-lys
lokasjon: Uavklart
driftsspenning: "Må bekreftes for modulen"
signalspenning: "Analogutgangens spenningsområde må bekreftes"
signaltype: "Analog lysavhengig spenning"
esp32_kompatibilitet: "Må verifiseres; ESP32 ADC tåler ikke 5 V"
arduino_uno_kompatibilitet: "Må verifiseres mot nøyaktig Uno-variant"
bibliotek: "Ingen"
status: "I sortiment"
publisering: utkast
kilde: "docs/sensorer_midlertidig.md"
---

# Fotomotstand-modul (KY-018)

| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | Uavklart |
| **Signaltype** | Analog, lysavhengig spenning |
| **Driftsspenning** | Må bekreftes |
| **Signalspenning** | Avhenger av modulens spenningsdeler; må bekreftes |
| **Bibliotek** | Ingen |

## 1. Beskrivelse
En fotomotstand endrer motstand med lysmengden. Modulen omsetter dette til en spenning som mikrokontrolleren kan lese analogt. Utgangsområdet avhenger av kretsen på kortet.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **S / SIG** | Analog signal | ADC-inngang, eksempel GPIO 32 eller A0 | Mål utgangen før ESP32. |
| **+ / VCC** | Forsyning | Må bekreftes | Kontroller modulens spesifikasjon. |
| **- / GND** | Jord | GND | Felles jord. |

> **Viktig sikkerhetsvarsel:** ESP32 ADC tåler ikke 5 V. Ikke bruk 5 V-forsyning med ESP32 før det er bekreftet at signalet holder seg innenfor ADC-området.

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)
Eksemplet leser en rå ADC-verdi etter kontroll av signalnivå.

```cpp
#include <Arduino.h>
const int lightPin = 32;

void setup() {
  Serial.begin(115200);
}

void loop() {
  Serial.println(analogRead(lightPin));
  delay(300);
}
```

## 4. Feilsøking (Typiske elevfeil)
* **Verdien endres lite:** Skygg for sensoren og prøv med en lampe.
* **Verdien er motsatt forventning:** Motstandsdeleren kan gi høyere eller lavere spenning med mer lys.
* **ESP32 ADC får for høy spenning:** Koble fra og kontroller kretsen.