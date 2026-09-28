import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'nb-NO',
  title: 'Komponentbasen',
  description: 'Søkbar oversikt over elektronikk og moduler i klasserommet.',
  base: process.env.BASE_PATH || '/komponentbasen/',
  cleanUrls: true,
  themeConfig: {
    siteTitle: 'Komponentbasen',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Hjem', link: '/' },
      { text: 'Komponenter', link: '/komponenter/' },
      { text: 'Om basen', link: '/om' }
    ],
    sidebar: {
      '/komponenter/': [
        {
          text: 'Oversikt',
          items: [
            { text: 'Alle komponenter', link: '/komponenter/' }
          ]
        },
        {
          text: 'Miljø og klima',
          collapsed: false,
          items: [
            { text: 'SEN-001 Regnsensor', link: '/komponenter/miljo-og-klima/SEN-001_vann-regnsensor' },
            { text: 'SEN-002 DS18B20 Temp (KY-001)', link: '/komponenter/miljo-og-klima/SEN-002_ds18b20-ky001' },
            { text: 'SEN-003 NTC Temp (KY-013)', link: '/komponenter/miljo-og-klima/SEN-003_ntc-ky013' }
          ]
        },
        {
          text: 'Optisk og lys',
          collapsed: false,
          items: [
            { text: 'SEN-006 IR Hindring (KY-032)', link: '/komponenter/optisk-og-lys/SEN-006_ky032-ir-hindringssensor' },
            { text: 'SEN-007 Linjesensor (KY-033)', link: '/komponenter/optisk-og-lys/SEN-007_ky033-linjesensor' },
            { text: 'SEN-009 LDR Lyssensor (KY-018)', link: '/komponenter/optisk-og-lys/SEN-009_ky018-ldr' },
            { text: 'SEN-010 Gaffelsensor (KY-010)', link: '/komponenter/optisk-og-lys/SEN-010_ky010-gaffelsensor' },
            { text: 'ACT-005 IR Sender (KY-005)', link: '/komponenter/optisk-og-lys/ACT-005_ky005-ir-sender' }
          ]
        },
        {
          text: 'Mekanisk og magnetisk',
          collapsed: false,
          items: [
            { text: 'SEN-004 Digital Hall (KY-003)', link: '/komponenter/mekanisk-og-magnet/SEN-004_ky003-digital-hall' },
            { text: 'SEN-005 Analog Hall (KY-035)', link: '/komponenter/mekanisk-og-magnet/SEN-005_ky035-analog-hall' },
            { text: 'SEN-012 Vibrasjonssensor (KY-002)', link: '/komponenter/mekanisk-og-magnet/SEN-012_ky002-vibrasjonssensor' },
            { text: 'SEN-013 Vippesensor (KY-017)', link: '/komponenter/mekanisk-og-magnet/SEN-013_ky017-vippesensor' },
            { text: 'SEN-014 Vippesensor (KY-020)', link: '/komponenter/mekanisk-og-magnet/SEN-014_ky020-vippesensor' },
            { text: 'SEN-015 Reed-bryter (KY-021)', link: '/komponenter/mekanisk-og-magnet/SEN-015_ky021-reedbryter' },
            { text: 'SEN-016 Reed-modul (KY-025)', link: '/komponenter/mekanisk-og-magnet/SEN-016_ky025-reedmodul' }
          ]
        },
        {
          text: 'Gass og flamme',
          collapsed: false,
          items: [
            { text: 'SEN-008 Flammesensor (KY-026)', link: '/komponenter/gass-og-flamme/SEN-008_ky026-flammesensor' }
          ]
        },
        {
          text: 'Brukergrensesnitt',
          collapsed: false,
          items: [
            { text: 'SEN-011 Rotary Encoder (KY-040)', link: '/komponenter/brukergrensesnitt/SEN-011_ky040-encoder' },
            { text: 'SEN-017 Trykknapp (KY-004)', link: '/komponenter/brukergrensesnitt/SEN-017_ky004-trykknapp' }
          ]
        },
        {
          text: 'Lyd og akustikk',
          collapsed: false,
          items: [
            { text: 'SEN-018 Mikrofon (KY-037)', link: '/komponenter/lyd-og-akustikk/SEN-018_ky037-mikrofon' },
            { text: 'SEN-019 Mikrofon (KY-038)', link: '/komponenter/lyd-og-akustikk/SEN-019_ky038-mikrofon' }
          ]
        },
        {
          text: 'Lys og indikatorer',
          collapsed: false,
          items: [
            { text: 'ACT-001 RGB LED (KY-016)', link: '/komponenter/lys-og-indikatorer/ACT-001_ky016-rgb-led' },
            { text: 'ACT-002 SMD RGB LED (KY-009)', link: '/komponenter/lys-og-indikatorer/ACT-002_ky009-rgb-led' },
            { text: 'ACT-003 Tofarget LED (KY-011)', link: '/komponenter/lys-og-indikatorer/ACT-003_ky011-tofarget-led' },
            { text: 'ACT-004 Tofarget LED (KY-029)', link: '/komponenter/lys-og-indikatorer/ACT-004_ky029-tofarget-led' }
          ]
        },
        {
          text: 'Lydutgang',
          collapsed: false,
          items: [
            { text: 'ACT-006 Aktiv buzzer (KY-012)', link: '/komponenter/lyd-output/ACT-006_ky012-aktiv-buzzer' },
            { text: 'ACT-007 Passiv buzzer (KY-006)', link: '/komponenter/lyd-output/ACT-007_ky006-passiv-buzzer' }
          ]
        }
      ]
    },
    footer: {
      message: 'Vg1 Elektro og datateknologi',
      copyright: 'Komponentbasen'
    }
  }
})