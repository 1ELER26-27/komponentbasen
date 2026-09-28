---
id: ACT-006
navn: Aktiv buzzer-modul (KY-012)
kategori: lyd-output
lokasjon: Uavklart
driftsspenning: "Må bekreftes for modulen"
signalspenning: "Styresignal og strømkrav må bekreftes"
signaltype: "Aktiv lydgiver, digital styring ifølge inventarnotatet"
esp32_kompatibilitet: "Må verifiseres; bruk driver hvis strømkravet overstiger GPIO-grensen"
arduino_uno_kompatibilitet: "Må verifiseres mot nøyaktig Uno-variant"
bibliotek: "Ingen"
status: "I sortiment"
publisering: utkast
kilde: "docs/sensorer_midlertidig.md"
---

# Aktiv buzzer-modul (KY-012)

| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | Uavklart |
| **Signaltype** | Digital styring av aktiv lydgiver |
| **Driftsspenning** | Må bekreftes |
| **Signalspenning** | Styreinngangens nivå må bekreftes |
| **Bibliotek** | Ingen |

## 1. Beskrivelse
En aktiv buzzer lager lyd når den får riktig forsyning og styresignal. Modulens strømforbruk og om styrepinnen har transistor må kontrolleres.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **S / I/O** | Styresignal | Digital GPIO | Bekreft aktiv HIGH/LOW. |
| **+ / VCC** | Forsyning | Må bekreftes | Ikke koble direkte til GPIO. |
| **- / GND** | Jord | GND | Felles jord. |

> **Viktig sikkerhetsvarsel:** Buzzerstrøm kan overstige GPIO-grensen. Bruk egnet driver når det kreves; kontroller forsyningsspenning og polaritet.

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)
Bruk kun etter å ha bekreftet at styreinngangen kan drives av kortet.

```cpp
#include <Arduino.h>
const int buzzerPin = 5;

void setup() {
  Serial.begin(115200);
  pinMode(buzzerPin, OUTPUT);
}

void loop() {
  digitalWrite(buzzerPin, HIGH);
  Serial.println("Buzzer på");
  delay(300);
  digitalWrite(buzzerPin, LOW);
  Serial.println("Buzzer av");
  delay(700);
}
```

## 4. Feilsøking (Typiske elevfeil)
* **Ingen lyd:** Kontroller polaritet, forsyning og aktiv logikknivå.
* **GPIO blir varm eller resetter:** Bruk driver hvis buzzerens strømkrav er for høyt.
* **Forventer tonehøydeendring:** Aktiv buzzer har normalt en innebygd tonegenerator.