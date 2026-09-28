---
id: SEN-018
navn: Mikrofon-/lydsensormodul (KY-037)
kategori: lyd-og-akustikk
lokasjon: Uavklart
driftsspenning: "Må bekreftes for modulen"
signalspenning: "A0- og D0-nivå må bekreftes separat"
signaltype: "Analog lydsignal og digital terskelutgang, ifølge notatet"
esp32_kompatibilitet: "Må verifiseres; ESP32-innganger tåler ikke 5 V"
arduino_uno_kompatibilitet: "Må verifiseres mot nøyaktig Uno-variant"
bibliotek: "Ingen"
status: "I sortiment"
publisering: utkast
kilde: "docs/sensorer_midlertidig.md"
---

# Mikrofon-/lydsensormodul (KY-037)

![Mikrofon-/lydsensormodul (KY-037)](/bilder/komponenter/SEN-018.jpg)


| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | Uavklart |
| **Signaltype** | Analog og digital terskelutgang, ifølge notatet |
| **Driftsspenning** | Må bekreftes |
| **Signalspenning** | A0 og D0 må kontrolleres separat |
| **Bibliotek** | Ingen |

## 1. Beskrivelse
Mikrofonen registrerer lyd. Analogutgangen viser et varierende signal, mens en komparator kan gi en digital tilstand når nivået passerer en justert terskel. Kortets faktiske utganger må identifiseres.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **A0** | Analog utgang | ADC-inngang | Kontroller spenningsområde. |
| **D0** | Digital terskelutgang | Digital GPIO | Kontroller logikknivå og polaritet. |
| **+ / VCC** | Forsyning | Må bekreftes | Ikke anta 3,3 V/5 V-toleranse. |
| **G / GND** | Jord | GND | Kontroller merking. |

> **Viktig sikkerhetsvarsel:** ESP32 GPIO og ADC tåler ikke 5 V. Kontroller både A0 og D0 før tilkobling.

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)
Eksemplet leser bare A0 etter at nivået er bekreftet trygt.

```cpp
#include <Arduino.h>
const int micPin = 39;

void setup() {
  Serial.begin(115200);
}

void loop() {
  Serial.println(analogRead(micPin));
  delay(50);
}
```

## 4. Feilsøking (Typiske elevfeil)
* **D0 er alltid aktiv:** Juster terskeltrimmeren og undersøk aktiv polaritet.
* **A0-verdien er vanskelig å tolke:** Lydsignalet varierer raskt; bruk råverdier og riktig samplingsmetode.
* **ESP32 får overspenning:** Ikke koble A0/D0 før utgangsnivået er kjent.