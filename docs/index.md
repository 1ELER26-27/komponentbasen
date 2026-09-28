# Komponentbasen

Velkommen til Komponentbasen for elektroverkstedet! Her finner du en oversikt over sensorer, aktuatorer og moduler som er tilgjengelige i hyllene og skuffene i klasserommet.

Hver komponent har koblingsskjema, pinout, sikkerhetsadvarsler for spenningsnivåer og testkode for mikrokontroller (ESP32 og Arduino).

<div class="catalog-actions">
  <a class="catalog-link" href="./komponenter/">Gå til komponentoversikten <span aria-hidden="true">→</span></a>
</div>

---

## ⚡ Viktig sikkerhetsregel

::: danger ESP32 tåler IKKE 5 V på GPIO!
Kontroller alltid både forsyningsspenning (VCC) og **signalspenning** før du kobler til en mikrokontroller.
* **ESP32** tåler kun **3,3 V** på GPIO-pinnene.
* **Arduino Uno R3** bruker normalt **5 V** logikk.
:::

---

## 🔍 Slik finner du fram

* **Søk:** Bruk søkefeltet øverst på siden (eller trykk `Ctrl + K` / `Cmd + K`) for å søke direkte etter komponentnavn (f.eks. *DS18B20*, *mikrofon*, *buzzer*), sensor-ID (*SEN-001*) eller bruksområde.
* **Skuff-ID:** Hver komponent har oppgitt hvilken skuff den ligger i (f.eks. `S1-A01` for Skap 1, Rad A, Skuff 1).
* **Eksempelkode:** Hver komponentside har en ferdig, minimal C++-kodeblokk tilpasset Arduino IDE og PlatformIO.