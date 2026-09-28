---
id: ACT-005
navn: Infrarød LED-sender (KY-005)
kategori: optisk-og-lys
lokasjon: Uavklart
driftsspenning: "Må bekreftes for modulen"
signalspenning: "GPIO-styresignal; LED-strøm og driverkrets må bekreftes"
signaltype: "Infrarød LED-sender; modulert signal kan brukes"
esp32_kompatibilitet: "Må verifiseres; GPIO kan trenge driver"
arduino_uno_kompatibilitet: "Må verifiseres mot nøyaktig Uno-variant"
bibliotek: "IRremote (API-et som brukes i eksemplet)"
status: "I sortiment"
publisering: utkast
kilde: "docs/sensorer_midlertidig.md"
---

# Infrarød LED-sender (KY-005)

![Infrarød LED-sender (KY-005)](/bilder/komponenter/ACT-005.jpg)


| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | Uavklart |
| **Signaltype** | Infrarød lysutgang; ofte modulert for fjernkontroll |
| **Driftsspenning** | Må bekreftes |
| **Signalspenning** | GPIO-styresignal; strømkrav må bekreftes |
| **Bibliotek** | `IRremote` for eksemplet nedenfor. `IRremoteESP8266` bruker et annet API. |

## 1. Beskrivelse
En IR-LED sender lys som ikke er synlig for øyet. Fjernkontrollsignaler bruker ofte en modulert bærefrekvens. Om KY-005-kortet har nødvendig transistor/strømbegrensning må kontrolleres.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **S** | Styresignal | Digital GPIO | Kontroller om driver er innebygd. |
| **+** | Forsyning | Må bekreftes | Bruk egnet driver ved strømbehov over GPIO-grensen. |
| **-** | Jord | GND | Felles jord. |

> **Viktig sikkerhetsvarsel:** Ikke driv IR-LED-en direkte fra GPIO uten å vite strømkravet og om kortet har driver/strømbegrensning.

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)
Eksemplet bruker `IRremote`-bibliotekets API og krever korrekt valgt senderpinne. Det må ikke kopieres direkte til `IRremoteESP8266`.

```cpp
#include <Arduino.h>
#include <IRremote.hpp>

const int irPin = 4;

void setup() {
  Serial.begin(115200);
  IrSender.begin(irPin);
}

void loop() {
  Serial.println("Sender IR-testkode");
  IrSender.sendNEC(0x00, 0x34, 0);
  delay(3000);
}
```

## 4. Feilsøking (Typiske elevfeil)
* **Ingen mottaker reagerer:** Sikt mot mottakeren og kontroller protokoll/bærefrekvens.
* **Svak rekkevidde:** Kontroller om modulen har nødvendig drivertrinn.
* **Komponenten blir varm:** Stopp og kontroller strømbegrensning og driftssyklus.