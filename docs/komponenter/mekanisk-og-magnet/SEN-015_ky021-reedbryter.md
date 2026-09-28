---
id: SEN-015
navn: Reed-brytermodul (KY-021)
kategori: mekanisk-og-magnet
lokasjon: Uavklart
driftsspenning: "Må bekreftes for modulen"
signalspenning: "Utgang og eventuell pull-up må bekreftes"
signaltype: "Digital magnetisk bryter"
esp32_kompatibilitet: "Må verifiseres; GPIO-nivå må være maks 3,3 V"
arduino_uno_kompatibilitet: "Må verifiseres mot nøyaktig Uno-variant"
bibliotek: "Ingen"
status: "I sortiment"
publisering: utkast
kilde: "docs/sensorer_midlertidig.md"
---

# Reed-brytermodul (KY-021)

![Reed-brytermodul (KY-021)](/bilder/komponenter/SEN-015.jpg)


| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | Uavklart |
| **Signaltype** | Digital magnetisk bryter |
| **Driftsspenning** | Må bekreftes |
| **Signalspenning** | Må bekreftes |
| **Bibliotek** | Ingen |

## 1. Beskrivelse
En reed-bryter endrer kontakt når en magnet kommer nær. Modulen er oppført som KY-021; kretsen og eventuell innebygd motstand må kontrolleres.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **S / OUT** | Digital signal | Digital GPIO | Avklar om den bare er en kontakt eller har elektronikk. |
| **+** | Forsyning | Må bekreftes | Kan være ubrukt på ren bryter, men må ikke antas. |
| **-** | Jord | GND | Kontroller pinout. |

> **Viktig sikkerhetsvarsel:** Bruk ikke ukjent pull-up til 5 V på ESP32. Bekreft koblingen før signalet settes på GPIO.

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)
Eksemplet forutsetter at signalpinnen er en ren bryterkontakt og at pull-up til 3,3 V er elektrisk riktig for den konkrete modulen. Bekreft kretsen før du bruker `INPUT_PULLUP`.

```cpp
#include <Arduino.h>
const int reedPin = 12;

void setup() {
  Serial.begin(115200);
  pinMode(reedPin, INPUT_PULLUP);
}

void loop() {
  Serial.println(digitalRead(reedPin));
  delay(100);
}
```

## 4. Feilsøking (Typiske elevfeil)
* **Ingen reaksjon:** Før en magnet nær bryteren og kontroller orienteringen.
* **Inngangen flyter:** Bruk pull-up bare dersom modulens elektriske oppbygning tillater det.
* **Feil logikknivå:** Kontroller alle eksterne pull-ups mot 3,3 V på ESP32.