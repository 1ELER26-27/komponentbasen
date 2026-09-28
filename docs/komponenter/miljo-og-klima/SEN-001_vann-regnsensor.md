---
id: SEN-001
navn: Vann- og regnsensor
kategori: miljo-og-klima
lokasjon: Uavklart
driftsspenning: "Må bekreftes for den konkrete modulen"
signalspenning: "Må bekreftes; ikke koble til ESP32 før signalnivået er kjent"
signaltype: "Analog motstandsbasert utgang (oppgitt i inventarnotatet)"
esp32_kompatibilitet: "Må verifiseres; ESP32 GPIO tåler ikke 5 V"
arduino_uno_kompatibilitet: "Må verifiseres mot nøyaktig Uno-variant"
bibliotek: "Ingen"
status: "I sortiment"
publisering: utkast
kilde: "docs/sensorer_midlertidig.md"
---

# Vann- og regnsensor

![Vann- og regnsensor](/bilder/komponenter/SEN-001.jpg)

| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | Uavklart |
| **Signaltype** | Analog, ifølge inventarnotatet |
| **Driftsspenning** | Må bekreftes på den konkrete modulen |
| **Signalspenning** | Må måles eller bekreftes før tilkobling |
| **Bibliotek** | Ingen |

## 1. Beskrivelse
Sensorplaten har parallelle ledende baner. Vann mellom banene endrer den elektriske motstanden, og modulen kan gi en analog verdi som varierer med fuktighet. Den nøyaktige modellvarianten er ikke oppgitt.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **S** | Analog signal | ESP32 ADC eller Arduino Uno A0 | Bekreft pinneetikett og maksimalt signalnivå først. |
| **+** | Forsyning | Ikke koble til før driftsspenning er bekreftet | Eventuell GPIO-styrt forsyning må planlegges etter kontroll av kretsen. |
| **-** | Jord | GND | Kontroller polaritet og felles jord. |

> **Viktig sikkerhetsvarsel:** Spenningen på analogutgangen er ukjent. ESP32 GPIO tåler ikke 5 V. Ikke koble signalet til ESP32 før maksimal utgangsspenning er bekreftet eller tilpasset.

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)
Eksemplet leser en analog inngang. Det forutsetter at utgangsspenningen først er kontrollert og trygg for kortet.

```cpp
#include <Arduino.h>
const int sensorPin = 34;

void setup() {
  Serial.begin(115200);
}

void loop() {
  Serial.println(analogRead(sensorPin));
  delay(500);
}
```

## 4. Feilsøking (Typiske elevfeil)
* **Verdien endrer seg ikke:** Kontroller at platen er fuktet og at signalpinnen er riktig identifisert.
* **ESP32 får feil eller blir varm:** Koble fra og kontroller at signalet aldri overstiger 3,3 V.
* **Platen tæres over tid:** Ikke la sensorplaten stå kontinuerlig spenningssatt i vann.