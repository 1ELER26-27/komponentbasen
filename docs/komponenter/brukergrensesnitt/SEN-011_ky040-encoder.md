---
id: SEN-011
navn: Rotary encoder-modul (KY-040)
kategori: brukergrensesnitt
lokasjon: Uavklart
driftsspenning: "Må bekreftes for modulen"
signalspenning: "CLK, DT og SW-nivå må kontrolleres; pull-up-krets må avklares"
signaltype: "To digitale kvadraturkanaler og trykknapp"
esp32_kompatibilitet: "Må verifiseres; signaler til ESP32 må være maks 3,3 V"
arduino_uno_kompatibilitet: "Må verifiseres mot nøyaktig Uno-variant"
bibliotek: "Ingen i eksempel; ESP32Encoder eller Encoder kan vurderes"
status: "I sortiment"
publisering: utkast
kilde: "docs/sensorer_midlertidig.md"
---

# Rotary encoder-modul (KY-040)

| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | Uavklart |
| **Signaltype** | CLK/DT-kvadratur og SW-knapp |
| **Driftsspenning** | Må bekreftes |
| **Signalspenning** | Må bekreftes for CLK, DT og SW |
| **Bibliotek** | Ikke nødvendig for enkel avlesning |

## 1. Beskrivelse
En roterende encoder gir pulser som angir retning og bevegelse. En separat trykkbryter kan være koblet til SW. Modulens pull-up-kretser må kontrolleres før bruk med ESP32.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **CLK** | Kanal A | Digital GPIO, eksempel 25 | Bekreft logikknivå. |
| **DT** | Kanal B | Digital GPIO, eksempel 26 | Bekreft logikknivå. |
| **SW** | Trykkbryter | Digital GPIO, eksempel 27 | Kontroller eventuell pull-up. |
| **+ / GND** | Forsyning/jord | Må bekreftes / GND | Følg fysisk pinout, ikke anta alle kort har samme rekkefølge. |

> **Viktig sikkerhetsvarsel:** Hvis signalene trekkes opp til 5 V, kan de skade ESP32. Bekreft modulens pull-up-spenning før tilkobling.

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)
Eksemplet viser rå kanalnivåer. Kontroller nivåene først.

```cpp
#include <Arduino.h>
const int clkPin = 25;
const int dtPin = 26;

void setup() {
  Serial.begin(115200);
  pinMode(clkPin, INPUT);
  pinMode(dtPin, INPUT);
}

void loop() {
  Serial.print("CLK=");
  Serial.print(digitalRead(clkPin));
  Serial.print(" DT=");
  Serial.println(digitalRead(dtPin));
  delay(50);
}
```

## 4. Feilsøking (Typiske elevfeil)
* **Retningen blir feil:** Bytt tolkning av CLK/DT etter pinoutkontroll.
* **Mange ekstra trinn:** Kontaktsprett kan kreve filtrering eller encoderbibliotek.
* **ESP32 får 5 V:** Kontroller innebygde pull-up-motstander og forsyning.