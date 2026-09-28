---
id: ACT-007
navn: Passiv buzzer-modul (KY-006)
kategori: lyd-output
lokasjon: Uavklart
driftsspenning: "Må bekreftes for modulen"
signalspenning: "GPIO-styresignal; strømkrav og modulkrets må bekreftes"
signaltype: "Passiv lydgiver; trenger vekslende/PWM-signal"
esp32_kompatibilitet: "Må verifiseres; bruk driver hvis strømkravet overstiger GPIO-grensen"
arduino_uno_kompatibilitet: "Må verifiseres mot nøyaktig Uno-variant"
bibliotek: "Arduino tone-funksjon kan brukes; kontroller plattformstøtte"
status: "I sortiment"
publisering: utkast
kilde: "docs/sensorer_midlertidig.md"
---

# Passiv buzzer-modul (KY-006)

| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | Uavklart |
| **Signaltype** | Passiv lydgiver, frekvens/PWM-styrt |
| **Driftsspenning** | Må bekreftes |
| **Signalspenning** | Styresignal og strømkrav må bekreftes |
| **Bibliotek** | `tone()` kan brukes på støttede plattformer |

## 1. Beskrivelse
En passiv buzzer trenger et vekslende signal for å lage en bestemt tone. Kontroller om KY-006-kortet har driver, og om buzzerens strøm kan leveres av GPIO.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **S / I/O** | Styresignal | Digital GPIO/PWM | Bekreft plattformstøtte for tonefunksjon. |
| **+ / VCC** | Forsyning | Må bekreftes | Følg modulens spesifikasjon. |
| **- / GND** | Jord | GND | Kontroller polaritet. |

> **Viktig sikkerhetsvarsel:** Ikke overskrid GPIO-strømgrensen. Bruk egnet transistor/driver hvis strømkravet ikke er bekreftet trygt.

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)
Eksemplet forutsetter støtte for `tone()` og tilstrekkelig driverkapasitet.

```cpp
#include <Arduino.h>
const int buzzerPin = 5;

void setup() {
  Serial.begin(115200);
}

void loop() {
  Serial.println("Spiller 1 kHz tone");
  tone(buzzerPin, 1000);
  delay(500);
  noTone(buzzerPin);
  delay(500);
}
```

## 4. Feilsøking (Typiske elevfeil)
* **Bare klikk eller ingen lyd:** Kontroller at komponenten er passiv og får et vekslende signal.
* **Feil frekvens:** Kontroller at `tone()` støttes av kortets Arduino-kjerne.
* **Kortet resetter:** Kontroller strømkrav og bruk driver ved behov.