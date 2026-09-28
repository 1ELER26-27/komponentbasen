---
id: SEN-013
navn: Vippesensor-modul (KY-017)
kategori: mekanisk-og-magnet
lokasjon: Uavklart
driftsspenning: "Må bekreftes for modulen"
signalspenning: "Digitalutgangens nivå må bekreftes"
signaltype: "Digital vippe-/tiltutgang"
esp32_kompatibilitet: "Må verifiseres; signalet må være maks 3,3 V"
arduino_uno_kompatibilitet: "Må verifiseres mot nøyaktig Uno-variant"
bibliotek: "Ingen"
status: "I sortiment"
publisering: utkast
kilde: "docs/sensorer_midlertidig.md"
---

# Vippesensor-modul (KY-017)

| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | Uavklart |
| **Signaltype** | Digital vippebryter, ifølge inventarnotatet |
| **Driftsspenning** | Må bekreftes |
| **Signalspenning** | Må bekreftes |
| **Bibliotek** | Ingen |

## 1. Beskrivelse
En vippebryter endrer elektrisk tilstand når orienteringen endres. Inventarnotatet omtaler KY-017 som mulig kvikksølvbryter, men innholdet i den aktuelle modulen er ikke bekreftet.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **S / OUT** | Digital signal | Digital GPIO | Bekreft pinout og aktiv tilstand. |
| **+** | Forsyning | Må bekreftes | Følg modulens dokumentasjon. |
| **-** | Jord | GND | Verifiser silketrykk. |

> **Viktig sikkerhetsvarsel:** Avklar om modulen inneholder kvikksølv før håndtering; ikke åpne den. Kontroller også at signalet ikke overstiger 3,3 V på ESP32.

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)

```cpp
#include <Arduino.h>
const int tiltPin = 13;

void setup() {
  Serial.begin(115200);
  pinMode(tiltPin, INPUT);
}

void loop() {
  Serial.println(digitalRead(tiltPin));
  delay(100);
}
```

## 4. Feilsøking (Typiske elevfeil)
* **Tilstanden endrer seg ikke:** Snu modulen rolig og observer tilstanden.
* **Inngangen varierer tilfeldig:** Kontroller om inngangen trenger pull-up.
* **Ukjent innhold i bryteren:** Ikke åpne modulen; avklar type før avfallshåndtering.