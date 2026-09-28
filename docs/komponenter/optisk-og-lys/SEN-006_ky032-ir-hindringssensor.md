---
id: SEN-006
navn: Infrarød hindringssensor (KY-032)
kategori: optisk-og-lys
lokasjon: Uavklart
driftsspenning: "Må bekreftes for den konkrete modulen"
signalspenning: "Digitalutgangens nivå må måles eller bekreftes"
signaltype: "Digital infrarød refleksjon"
esp32_kompatibilitet: "Må verifiseres; utgangen må ikke overstige 3,3 V"
arduino_uno_kompatibilitet: "Må verifiseres mot nøyaktig Uno-variant"
bibliotek: "Ingen"
status: "I sortiment"
publisering: utkast
kilde: "docs/sensorer_midlertidig.md"
---

# Infrarød hindringssensor (KY-032)

![Infrarød hindringssensor (KY-032)](/bilder/komponenter/SEN-006.jpg)


| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | Uavklart |
| **Signaltype** | Digital IR-refleksjon, ifølge inventarnotatet |
| **Driftsspenning** | Må bekreftes |
| **Signalspenning** | Digitalutgang må kontrolleres |
| **Bibliotek** | Ingen |

## 1. Beskrivelse
Modulen sender ut infrarødt lys og registrerer refleksjon fra en flate eller hindring. Følsomheten kan være justerbar. Nøyaktig funksjon og pinout må sjekkes på den aktuelle KY-032-varianten.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **OUT / S** | Digital utgang | Digital GPIO | Bekreft merkingen og logikknivået. |
| **VCC / +** | Forsyning | Må bekreftes | Ikke gjett forsyningsspenning. |
| **GND / -** | Jord | GND | Bekreft jordpinne på kortet. |

> **Viktig sikkerhetsvarsel:** Utgangen kan være høyere enn 3,3 V dersom modulen forsynes med 5 V. ESP32 GPIO tåler ikke 5 V; mål eller dokumenter utgangen før tilkobling.

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)
Bruk eksemplet først når logikknivået er kontrollert.

```cpp
#include <Arduino.h>
const int sensorPin = 19;

void setup() {
  Serial.begin(115200);
  pinMode(sensorPin, INPUT);
}

void loop() {
  Serial.println(digitalRead(sensorPin));
  delay(100);
}
```

## 4. Feilsøking (Typiske elevfeil)
* **Sensoren reagerer ikke:** Kontroller avstand, refleksjonsflate og eventuell følsomhetstrimmer.
* **Logikken virker motsatt:** Fastslå om modulen gir HIGH eller LOW ved deteksjon.
* **ESP32 får feil:** Kontroller at OUT aldri overstiger 3,3 V.