---
id: SEN-001
navn: DS18B20 Digital Temperatursensor
kategori: miljo-og-klima
lokasjon: S1-A01-A
driftsspenning: "3.0V - 5.5V"
signalspenning: "3.3V (med 3.3V pull-up)"
signaltype: "Digital (1-Wire)"
esp32_kompatibilitet: "Ja, med 3.3V pull-up"
arduino_uno_kompatibilitet: "Ja"
bibliotek: "DallasTemperature, OneWire"
---

# DS18B20 Digital Temperatursensor

| Nøkkelfakta | Verdi |
| :--- | :--- |
| **Lokasjon** | `S1-A01-A` (Skap 1, Rad A, Skuff 1, seksjon A) |
| **Signaltype** | Digital 1-Wire |
| **Driftsspenning** | 3.0V – 5.5V |
| **Signalspenning** | Bestemmes av pull-up-spenningen. Bruk 3.3V med ESP32. |
| **Kompatibilitet** | ESP32: bruk 3.3V pull-up. Arduino Uno: 5V eller 3.3V pull-up. |
| **Bibliotek** | `DallasTemperature` og `OneWire` |

## 1. Beskrivelse
Kort forklaring på norsk om hva komponenten gjør, måleområde og typiske bruksområder i prosjekter.

## 2. Tilkobling (Pinout)
| Pinne på modul | Navn | Kobles til ESP32 / Arduino | Merknad |
| :--- | :--- | :--- | :--- |
| **S** | Signal | GPIO 4 | Krever 4.7kΩ pull-up. På ESP32 må pull-up kobles til 3.3V. |
| **+** | VCC | 3.3V–5V | 3.3V anbefales når den brukes med ESP32. |
| **-** | GND | GND | Felles jord |

::: danger Viktig sikkerhetsvarsel
ESP32 GPIO tåler ikke 5V! Hvis datalinjen trekkes opp til 5V, kan ESP32 ta skade. Koble alltid pull-up til 3.3V ved bruk av ESP32.
:::

## 3. Kodeeksempel (C++ PlatformIO / Arduino IDE)
```cpp
#include <Arduino.h>
#include <OneWire.h>
#include <DallasTemperature.h>

const int oneWirePin = 4;
OneWire oneWire(oneWirePin);
DallasTemperature sensors(&oneWire);

void setup() {
  Serial.begin(115200);
  sensors.begin();
}

void loop() {
  sensors.requestTemperatures();
  float tempC = sensors.getTempCByIndex(0);
  Serial.printf("Temperatur: %.2f °C\n", tempC);
  delay(1000);
}
```

## 4. Feilsøking (Typiske elevfeil)
* **Ingen måling (-127 °C):** Kontroller at pull-up-motstanden er koblet mellom Signal og 3.3V, og at riktig GPIO-pinne er oppgitt i koden.
* **ESP32 leser feil eller blir varm:** Koble fra umiddelbart og sjekk at ikke modulen eller signalpinnen har fått 5V.
* **Sensoren svarer ikke:** Kontroller rekkefølgen på pinnene og at jord (GND) er felles.