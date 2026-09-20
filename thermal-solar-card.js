const TRANSLATIONS = {
  de: {
    title: 'Solarthermie Röhrenkollektor (Live-Fluss)',
    label_sammelkasten: 'VAKUUM-RÖHRENKOLLEKTOR (SAMMELKASTEN OBEN - HEISS)',
    label_verteiler: 'VORLAUF-VERTEILER (KALT - EINTRITT UNTEN)',
    label_speicher: 'PUFFERSPEICHER (SCHICHTENSPEICHER)',
    label_badge_kol: 'Kol',
    label_badge_vl: 'VL',
    label_badge_rl: 'RL',
    label_speicher_oben: '▲ OBEN (DHW)',
    label_speicher_mitte: '◆ MITTE',
    label_speicher_unten: '▼ UNTEN (SOLAR)',
    label_pump_on: 'Pumpe',
    label_pump_off: 'Pumpe Aus',
    label_kpi_vl: 'Vorlauf',
    label_kpi_rl: 'Rücklauf',
    label_kpi_kol: 'Kollektor',
    label_kpi_sp_oben: 'Speicher oben',
    label_kpi_sp_unten: 'Speicher unten',
    label_kpi_pump: 'Solarpumpe',
    label_kpi_flow: 'Durchfluss',
    label_kpi_power: 'Leistung',
    label_kpi_press: 'Druck',
    unit_temp: '°C',
    unit_flow: 'l/h',
    unit_pump: '%',
    unit_power: 'W',
    unit_press: 'bar',
    tooltip_kol: 'Klicken für Kollektortemperatur',
    tooltip_vl: 'Klicken für Vorlauf-Details',
    tooltip_rl: 'Klicken für Rücklauf-Details',
    tooltip_pump: 'Klicken für Pumpen-Details',
    tooltip_flow: 'Klicken für Durchfluss-Details',
    tooltip_power: 'Klicken für Leistungs-Details',
    tooltip_press: 'Klicken für Druck-Details',
    tooltip_sp_oben: 'Klicken für Speicher-Oben Details',
    tooltip_sp_mitte: 'Klicken für Speicher-Mitte Details',
    tooltip_sp_unten: 'Klicken für Speicher-Unten Details',

    editor_sec_header: 'Kopfzeile & Header',
    editor_title: 'Header-Titel / Überschrift',
    editor_show_header: 'Kopfzeile anzeigen',
    editor_show_header_title: 'Titel im Header anzeigen',
    editor_show_header_icon: 'Icon im Header anzeigen',
    editor_header_icon: 'Eigenes Icon (z. B. mdi:solar-power)',
    editor_show_header_badge: 'Status-Badge anzeigen',
    editor_header_badge: 'Inhalt des Status-Badges',
    editor_badge_pump: 'Solarpumpen-Status (Standard)',
    editor_badge_power: 'Wärmeleistung',
    editor_badge_kollektor: 'Kollektortemperatur',
    editor_badge_flow: 'Durchfluss',
    editor_badge_pressure: 'Systemdruck',
    editor_badge_none: 'Kein Badge anzeigen',
    editor_language: 'Sprache / Language',
    editor_lang_auto: 'Automatisch (Home Assistant)',
    editor_lang_en: 'Englisch (English)',
    editor_lang_de: 'Deutsch (German)',
    editor_sec_entities: 'Sensoren, Entitäten & Einheiten (Entities & Units)',
    editor_sec_labels: 'Beschriftungen & Texte (Labels)',
    editor_sec_kpi: 'KPI-Kacheln Beschriftungen',
    editor_sec_display: 'Darstellung & Layout (Display)',
    editor_tube_count: 'Anzahl Kollektorröhren (z. B. 8, 12, 16)',
    editor_pipe_height: 'Rohrleitungs-Höhe / Abstand (Länge der Verbindungsrohre)',
    editor_tank_height: 'Pufferspeicher Höhe (Größe des Speichertanks)',
    editor_tank_return_height: 'Pufferspeicher Rücklauf-Höhe links (0% Unten bis 100% Oben)',
    editor_tank_flow_height: 'Pufferspeicher Vorlauf-Höhe rechts (0% Unten bis 100% Oben)',
    editor_show_header: 'Karten-Header anzeigen',
    editor_show_kpi: 'KPI-Kacheln anzeigen',
    editor_kpi_manager_title: 'KPI-Kacheln anpassen (Beliebig viele hinzufügen / entfernen)',
    editor_kpi_default_info: 'Standardmäßig sind die 9 System-Kacheln aktiv. Sie können diese anpassen, entfernen oder eigene Kacheln hinzufügen.',
    editor_kpi_btn_customize: 'Kacheln anpassen (Standard 9 kopieren)',
    editor_kpi_btn_add: '+ Kachel hinzufügen',
    editor_kpi_btn_reset: 'Auf Standard-Kacheln zurücksetzen',
    editor_kpi_entity: 'Sensor-Entität',
    editor_kpi_label: 'Beschriftung',
    editor_kpi_unit: 'Einheit',
    editor_kpi_color: 'Farbe',
    editor_sec_units: 'Einheiten (Units)',
    editor_kol: 'Kollektortemperatur (Dach)',
    editor_vl: 'Vorlauftemperatur (Kalt / Eintritt unten)',
    editor_rl: 'Rücklauftemperatur (Heiß / Austritt oben)',
    editor_sp_oben: 'Pufferspeicher Oben (DHW / Warmwasser)',
    editor_sp_mitte: 'Pufferspeicher Mitte (optional)',
    editor_sp_unten: 'Pufferspeicher Unten (Solar-WT)',
    editor_flow: 'Durchflusssensor (steuert Animation)',
    editor_flow_max: 'Max. Durchflusswert für 100% Animation',
    editor_pump: 'Solarpumpe / Drehzahl',
    editor_power: 'Aktuelle Wärmeleistung',
    editor_pressure: 'Anlagendruck',
    editor_sammelkasten: 'Sammelkasten Oben (Kollektoraustritt)',
    editor_verteiler: 'Verteilerkasten Unten (Vorlaufeintritt)',
    editor_speicher: 'Pufferspeicher Überschrift',
    editor_badge_kol: 'Badge Kollektor-Rohr',
    editor_badge_vl: 'Badge Vorlauf-Rohr',
    editor_badge_rl: 'Badge Rücklauf-Rohr',
    editor_badge_sp_oben: 'Badge Speicher Oben',
    editor_badge_sp_mitte: 'Badge Speicher Mitte',
    editor_badge_sp_unten: 'Badge Speicher Unten',
    editor_pump_on: 'Status-Text Pumpe EIN',
    editor_pump_off: 'Status-Text Pumpe AUS',
    editor_kpi_kol: 'Kachel Kollektor',
    editor_kpi_vl: 'Kachel Vorlauf',
    editor_kpi_rl: 'Kachel Rücklauf',
    editor_kpi_sp_oben: 'Kachel Speicher Oben',
    editor_kpi_sp_unten: 'Kachel Speicher Unten',
    editor_kpi_pump: 'Kachel Solarpumpe',
    editor_kpi_flow: 'Kachel Durchfluss',
    editor_kpi_power: 'Kachel Wärmeleistung',
    editor_kpi_press: 'Kachel Anlagendruck',
    editor_unit_kol: 'Kollektor Einheit (z. B. °C, °F)',
    editor_unit_vl: 'Vorlauf Einheit (z. B. °C, °F)',
    editor_unit_rl: 'Rücklauf Einheit (z. B. °C, °F)',
    editor_unit_sp_oben: 'Speicher Oben Einheit (z. B. °C, °F)',
    editor_unit_sp_mitte: 'Speicher Mitte Einheit (z. B. °C, °F)',
    editor_unit_sp_unten: 'Speicher Unten Einheit (z. B. °C, °F)',
    editor_unit_flow: 'Durchfluss Einheit (z. B. l/h, l/min, m³/h)',
    editor_unit_pump: 'Solarpumpe Einheit (z. B. % oder RPM)',
    editor_unit_power: 'Wärmeleistung Einheit (z. B. W, kW)',
    editor_unit_press: 'Anlagendruck Einheit (z. B. bar, psi)',
    editor_unit_temp: 'Standard-Temperatur Einheit (°C)'
  },
  en: {
    title: 'Solar Thermal Tube Collector (Live Flow)',
    label_sammelkasten: 'VACUUM TUBE COLLECTOR (TOP MANIFOLD - HOT)',
    label_verteiler: 'FLOW DISTRIBUTOR (COLD - BOTTOM INLET)',
    label_speicher: 'BUFFER STORAGE TANK (STRATIFIED)',
    label_badge_kol: 'Collector',
    label_badge_vl: 'Flow',
    label_badge_rl: 'Return',
    label_speicher_oben: '▲ TOP (DHW)',
    label_speicher_mitte: '◆ MIDDLE',
    label_speicher_unten: '▼ BOTTOM (SOLAR)',
    label_pump_on: 'Pump',
    label_pump_off: 'Pump Off',
    label_kpi_vl: 'Flow (Cold)',
    label_kpi_rl: 'Return (Hot)',
    label_kpi_kol: 'Collector',
    label_kpi_sp_oben: 'Tank Top',
    label_kpi_sp_unten: 'Tank Bottom',
    label_kpi_pump: 'Solar Pump',
    label_kpi_flow: 'Flow Rate',
    label_kpi_power: 'Heat Power',
    label_kpi_press: 'Pressure',
    unit_temp: '°C',
    unit_flow: 'l/h',
    unit_pump: '%',
    unit_power: 'W',
    unit_press: 'bar',
    tooltip_kol: 'Click for collector temperature',
    tooltip_vl: 'Click for flow temperature',
    tooltip_rl: 'Click for return temperature',
    tooltip_pump: 'Click for pump details',
    tooltip_flow: 'Click for flow rate details',
    tooltip_power: 'Click for heat power details',
    tooltip_press: 'Click for pressure details',
    tooltip_sp_oben: 'Click for tank top details',
    tooltip_sp_mitte: 'Click for tank middle details',
    tooltip_sp_unten: 'Click for tank bottom details',

    editor_sec_header: 'Header & Title Options',
    editor_title: 'Header / Card Title',
    editor_show_header: 'Show Header Bar',
    editor_show_header_title: 'Show Title in Header',
    editor_show_header_icon: 'Show Icon in Header',
    editor_header_icon: 'Custom Icon (e.g. mdi:solar-power)',
    editor_show_header_badge: 'Show Status Badge',
    editor_header_badge: 'Status Badge Content',
    editor_badge_pump: 'Solar Pump Status (Default)',
    editor_badge_power: 'Heat Power',
    editor_badge_kollektor: 'Collector Temperature',
    editor_badge_flow: 'Flow Rate',
    editor_badge_pressure: 'System Pressure',
    editor_badge_none: 'No Badge',
    editor_language: 'Language / Sprache',
    editor_lang_auto: 'Auto (Home Assistant)',
    editor_lang_en: 'English',
    editor_lang_de: 'German (Deutsch)',
    editor_sec_entities: 'Sensors, Entities & Units',
    editor_sec_labels: 'Labels & Headings',
    editor_sec_kpi: 'KPI Tiles Labels',
    editor_sec_display: 'Display & Layout',
    editor_tube_count: 'Collector Tube Count (e.g. 8, 12, 16)',
    editor_pipe_height: 'Pipe Run Height / Distance (Length of connecting pipes)',
    editor_tank_height: 'Buffer Tank Height (Size of storage tank)',
    editor_tank_return_height: 'Buffer Tank Return Height (Left: 0% Bottom to 100% Top)',
    editor_tank_flow_height: 'Buffer Tank Flow Height (Right: 0% Bottom to 100% Top)',
    editor_show_header: 'Show Card Header',
    editor_show_kpi: 'Show KPI Tiles',
    editor_kpi_manager_title: 'Customize KPI Tiles (Add / Remove / Reorder at will)',
    editor_kpi_default_info: 'Default 9 system tiles are currently active. You can customize, remove, or add custom tiles.',
    editor_kpi_btn_customize: 'Customize Tiles (Copy Default 9)',
    editor_kpi_btn_add: '+ Add KPI Tile',
    editor_kpi_btn_reset: 'Reset to Default Tiles',
    editor_kpi_entity: 'Sensor Entity',
    editor_kpi_label: 'Label / Title',
    editor_kpi_unit: 'Unit',
    editor_kpi_color: 'Color',
    editor_sec_units: 'Units of Measurement',
    editor_kol: 'Collector Temperature (Roof)',
    editor_vl: 'Flow Temperature (Cold / Bottom Inlet)',
    editor_rl: 'Return Temperature (Hot / Top Exit)',
    editor_sp_oben: 'Storage Tank Top (DHW / Hot Water)',
    editor_sp_mitte: 'Storage Tank Middle (Optional)',
    editor_sp_unten: 'Storage Tank Bottom (Solar Heat Exchanger)',
    editor_flow: 'Flow Rate Sensor (Controls animation)',
    editor_flow_max: 'Max Flow Rate for 100% Animation',
    editor_pump: 'Solar Pump / Speed',
    editor_power: 'Current Heat Power',
    editor_pressure: 'System Pressure',
    editor_sammelkasten: 'Top Collector Manifold Heading',
    editor_verteiler: 'Bottom Distributor Heading',
    editor_speicher: 'Storage Tank Heading',
    editor_badge_kol: 'Collector Pipe Badge',
    editor_badge_vl: 'Flow Pipe Badge',
    editor_badge_rl: 'Return Pipe Badge',
    editor_badge_sp_oben: 'Tank Top Badge',
    editor_badge_sp_mitte: 'Tank Middle Badge',
    editor_badge_sp_unten: 'Tank Bottom Badge',
    editor_pump_on: 'Pump Running Status Text',
    editor_pump_off: 'Pump Idle Status Text',
    editor_kpi_kol: 'Tile Collector',
    editor_kpi_vl: 'Tile Flow',
    editor_kpi_rl: 'Tile Return',
    editor_kpi_sp_oben: 'Tile Tank Top',
    editor_kpi_sp_unten: 'Tile Tank Bottom',
    editor_kpi_pump: 'Tile Solar Pump',
    editor_kpi_flow: 'Tile Flow Rate',
    editor_kpi_power: 'Tile Heat Power',
    editor_kpi_press: 'Tile System Pressure',
    editor_unit_kol: 'Collector Unit (e.g. °C, °F)',
    editor_unit_vl: 'Flow Unit (e.g. °C, °F)',
    editor_unit_rl: 'Return Unit (e.g. °C, °F)',
    editor_unit_sp_oben: 'Tank Top Unit (e.g. °C, °F)',
    editor_unit_sp_mitte: 'Tank Middle Unit (e.g. °C, °F)',
    editor_unit_sp_unten: 'Tank Bottom Unit (e.g. °C, °F)',
    editor_unit_flow: 'Flow Rate Unit (e.g. l/h, l/min, gpm)',
    editor_unit_pump: 'Solar Pump Unit (e.g. % or RPM)',
    editor_unit_power: 'Heat Power Unit (e.g. W, kW)',
    editor_unit_press: 'System Pressure Unit (e.g. bar, psi)',
    editor_unit_temp: 'Default Temperature Unit (°C, °F)'
  }
};

class ThermalSolarCard extends HTMLElement {
  static discoverEntities(hass) {
    if (!hass || !hass.states) return {};
    const states = Object.values(hass.states);

    const isTemp = (s) => {
      const u = s.attributes?.unit_of_measurement;
      return s.attributes?.device_class === 'temperature' || u === '°C' || u === '°F' || s.entity_id.includes('temp');
    };

    const findBest = (patterns, filterFn = null) => {
      let bestEntity = '';
      let bestScore = 0;
      for (const s of states) {
        if (filterFn && !filterFn(s)) continue;
        const id = s.entity_id.toLowerCase();
        const fn = (s.attributes?.friendly_name || '').toLowerCase();
        for (let i = 0; i < patterns.length; i++) {
          const pat = patterns[i].toLowerCase();
          const priority = patterns.length - i;
          let score = 0;
          if (id.includes(pat)) score = priority * 10 + 5;
          else if (fn.includes(pat)) score = priority * 10;
          if (score > 0 && score > bestScore) {
            bestScore = score;
            bestEntity = s.entity_id;
          }
        }
      }
      return bestEntity;
    };

    return {
      kol_entity: findBest(['kollektor', 'collector', 'solar_kollektor', 'solar_collector', 'temperature_sensor_1', 'sensor_1', 'solar_temp'], isTemp),
      vl_entity: findBest(['solar_vorlauf', 'vorlauf', 'flow_temp', 'temperature_vfs', 'temp_vfs', 'vfs'], isTemp),
      rl_entity: findBest(['solar_ruecklauf', 'solar_rücklauf', 'ruecklauf', 'rücklauf', 'return_temp', 'temperature_rps', 'temp_rps', 'rps'], isTemp),
      speicher_temp_unten: findBest(['speicher_unten', 'buffer_bottom', 'tank_bottom', 'temperature_sensor_2', 'speicher_solar', 'puffer_unten', 'sensor_2'], isTemp),
      speicher_temp_mitte: findBest(['speicher_mitte', 'buffer_mid', 'tank_mid', 'temperature_sensor_3', 'puffer_mitte', 'sensor_3'], isTemp),
      speicher_temp_oben: findBest(['speicher_oben', 'buffer_top', 'tank_top', 'brauchwasser', 'dhw', 'warmwasser', 'puffer_oben'], isTemp),
      pump_entity: findBest(['solarpumpe', 'solar_pump', 'pump_speed_relay_1', 'pump_speed', 'solar_circulation', 'pumpe', 'relay_1'], (s) => !isTemp(s) && (s.entity_id.startsWith('sensor.') || s.entity_id.startsWith('binary_sensor.') || s.entity_id.startsWith('switch.'))),
      flow_entity: findBest(['flow_rate_vfs', 'flow_rate', 'durchfluss', 'volumenstrom', 'vfs'], (s) => !isTemp(s) && ((s.attributes?.unit_of_measurement || '').includes('l/') || (s.attributes?.unit_of_measurement || '').includes('gpm') || s.entity_id.includes('flow_rate') || s.entity_id.includes('durchfluss') || s.entity_id.includes('vfs'))),
      pressure_entity: findBest(['pressure_rps', 'solardruck', 'solar_pressure', 'system_pressure', 'pressure', 'druck', 'rps'], (s) => !isTemp(s) && (s.attributes?.device_class === 'pressure' || (s.attributes?.unit_of_measurement || '').includes('bar') || (s.attributes?.unit_of_measurement || '').includes('psi') || s.entity_id.includes('pressure') || s.entity_id.includes('druck'))),
      power_entity: findBest(['solarthermie_leistung', 'solar_power', 'solar_leistung', 'heat_power', 'solar_heat'], (s) => !isTemp(s) && (s.attributes?.device_class === 'power' || (s.attributes?.unit_of_measurement || '').includes('W') || s.entity_id.includes('leistung') || s.entity_id.includes('power')))
    };
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._built = false;
    this._currentLang = null;
  }

  connectedCallback() {
    if (!this._resizeObserver) {
      this._resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const width = entry.contentRect.width;
          if (width > 0) {
            const isCompact = width < 520;
            if (isCompact !== this._isCompact) {
              this._isCompact = isCompact;
              window.requestAnimationFrame(() => {
                this._buildCard();
                if (this._hass) this._updateStates();
              });
            }
          }
        }
      });
      this._resizeObserver.observe(this);
    }
  }

  disconnectedCallback() {
    if (this._resizeObserver) {
      this._resizeObserver.disconnect();
      this._resizeObserver = null;
    }
  }

  _compactLabel(customLabel, defaultDe, defaultEn) {
    if (customLabel && !customLabel.startsWith('VAKUUM') && !customLabel.startsWith('VACUUM') && !customLabel.startsWith('VORLAUF') && !customLabel.startsWith('FLOW DISTRIBUTOR')) {
      return customLabel;
    }
    return this._getLanguage() === 'de' ? defaultDe : defaultEn;
  }

  _getUnit(key, entityId, fallbackUnit) {
    const raw = this._rawConfig || {};
    const rawUnits = raw.units || {};
    const cleanKey = key.replace(/^unit_/, '');
    const keyAliases = {
      kol: ['collector', 'kollektor'],
      vl: ['flow_temp', 'flow_temperature', 'flow_inlet'],
      rl: ['return_temp', 'return_temperature', 'return_outlet'],
      sp_oben: ['tank_top', 'buffer_top'],
      sp_mitte: ['tank_middle', 'buffer_middle'],
      sp_unten: ['tank_bottom', 'buffer_bottom'],
      press: ['pressure']
    };
    let explicit = raw[key] ?? rawUnits[cleanKey] ?? rawUnits[key];
    if (explicit === undefined && keyAliases[cleanKey]) {
      for (const alias of keyAliases[cleanKey]) {
        explicit = raw[`unit_${alias}`] ?? rawUnits[alias];
        if (explicit !== undefined && explicit !== '') break;
      }
    }
    if (explicit !== undefined && explicit !== '') {
      return explicit;
    }
    if (entityId && this._hass && this._hass.states[entityId]) {
      const uom = this._hass.states[entityId].attributes?.unit_of_measurement;
      if (uom) return uom;
    }
    return this._config ? (this._config[key] || fallbackUnit) : fallbackUnit;
  }

  _getLanguage() {
    if (this._rawConfig && (this._rawConfig.language === 'en' || this._rawConfig.language === 'de')) {
      return this._rawConfig.language;
    }
    const haLang = (this._hass?.locale?.language || this._hass?.language || 'en').toLowerCase();
    return haLang.startsWith('de') ? 'de' : 'en';
  }

  _resolveConfig() {
    const c = this._rawConfig || {};
    const labels = c.labels || {};
    const entities = c.entities || {};
    const units = c.units || {};
    const tooltips = c.tooltips || {};
    const lang = this._getLanguage();
    const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

    // Auto-discover entities dynamically if not explicitly specified in config
    const hasConfiguredEntity = !!(
      c.kol_entity || c.vl_entity || c.rl_entity || c.speicher_temp_unten ||
      c.collector_entity || c.flow_temp_entity || c.return_temp_entity || c.tank_bottom_entity ||
      entities.kol_entity || entities.kol || entities.vl || entities.rl || entities.kollektor || entities.speicher_unten ||
      entities.collector || entities.flow_temp || entities.return_temp || entities.tank_top || entities.tank_bottom
    );
    const auto = (!hasConfiguredEntity && this._hass) ? ThermalSolarCard.discoverEntities(this._hass) : {};

    return {
      // General & Header Options
      title: (c.title !== undefined && c.title !== null) ? c.title : (c.header_title !== undefined && c.header_title !== null ? c.header_title : t.title),
      header_title: (c.header_title !== undefined && c.header_title !== null) ? c.header_title : (c.title !== undefined && c.title !== null ? c.title : t.title),
      max_width: c.max_width ?? '100%',
      language: c.language ?? 'auto',
      show_header: c.show_header !== false,
      show_header_title: c.show_header_title !== false,
      show_header_icon: c.show_header_icon !== false,
      header_icon: c.header_icon || c.icon || '',
      show_header_badge: c.show_header_badge !== false,
      header_badge: c.header_badge || 'pump',
      tube_count: c.tube_count ? Math.max(3, Math.min(30, parseInt(c.tube_count))) : 8,
      pipe_height: (c.pipe_height !== undefined && !isNaN(parseFloat(c.pipe_height)))
        ? Math.max(20, Math.min(250, parseFloat(c.pipe_height)))
        : 30,
      tank_height: (c.tank_height !== undefined && !isNaN(parseFloat(c.tank_height)))
        ? Math.max(100, Math.min(350, parseFloat(c.tank_height)))
        : 120,
      tank_return_height: (c.tank_return_height !== undefined && !isNaN(parseFloat(c.tank_return_height)))
        ? Math.max(0, Math.min(100, parseFloat(c.tank_return_height)))
        : (c.speicher_rl_height !== undefined && !isNaN(parseFloat(c.speicher_rl_height))
          ? Math.max(0, Math.min(100, parseFloat(c.speicher_rl_height)))
          : 0),
      tank_flow_height: (c.tank_flow_height !== undefined && !isNaN(parseFloat(c.tank_flow_height)))
        ? Math.max(0, Math.min(100, parseFloat(c.tank_flow_height)))
        : (c.speicher_vl_height !== undefined && !isNaN(parseFloat(c.speicher_vl_height))
          ? Math.max(0, Math.min(100, parseFloat(c.speicher_vl_height)))
          : 0),
      kpis: Array.isArray(c.kpis) ? c.kpis : null,
      show_kpi: c.show_kpi !== false,

      // Entities (Direct keys or nested entities.* or dynamic auto-discovery fallback)
      vl_entity: c.vl_entity ?? c.flow_temp_entity ?? entities.vl_entity ?? entities.flow_temp ?? entities.flow_temperature ?? entities.flow_inlet ?? entities.vl ?? auto.vl_entity ?? null,
      rl_entity: c.rl_entity ?? c.return_temp_entity ?? entities.rl_entity ?? entities.return_temp ?? entities.return_temperature ?? entities.return_outlet ?? entities.rl ?? auto.rl_entity ?? null,
      kol_entity: c.kol_entity ?? c.collector_entity ?? entities.kol_entity ?? entities.collector ?? entities.kollektor ?? entities.kol ?? auto.kol_entity ?? null,
      speicher_entity: c.speicher_entity ?? c.tank_entity ?? entities.speicher_entity ?? entities.tank ?? entities.speicher ?? null,
      speicher_temp_oben: c.speicher_temp_oben ?? c.tank_top_entity ?? entities.speicher_temp_oben ?? entities.tank_top ?? entities.speicher_oben ?? auto.speicher_temp_oben ?? null,
      speicher_temp_mitte: c.speicher_temp_mitte ?? c.tank_middle_entity ?? entities.speicher_temp_mitte ?? entities.tank_middle ?? entities.speicher_mitte ?? auto.speicher_temp_mitte ?? null,
      speicher_temp_unten: c.speicher_temp_unten ?? c.tank_bottom_entity ?? entities.speicher_temp_unten ?? entities.tank_bottom ?? entities.speicher_unten ?? c.speicher_entity ?? c.tank_entity ?? auto.speicher_temp_unten ?? null,
      pump_entity: c.pump_entity ?? entities.pump_entity ?? entities.pump ?? auto.pump_entity ?? null,
      flow_entity: c.flow_entity ?? entities.flow_entity ?? entities.flow ?? entities.flow_rate ?? auto.flow_entity ?? null,
      flow_max: c.flow_max ?? entities.flow_max ?? 450,
      pressure_entity: c.pressure_entity ?? entities.pressure_entity ?? entities.pressure ?? auto.pressure_entity ?? null,
      power_entity: c.power_entity ?? entities.power_entity ?? entities.power ?? entities.heat_power ?? auto.power_entity ?? null,

      // Diagram Box Labels (Kollektoren & Speicher)
      label_sammelkasten: c.label_sammelkasten ?? c.label_kollektor ?? labels.sammelkasten ?? labels.kollektor ?? t.label_sammelkasten,
      label_verteiler: c.label_verteiler ?? labels.verteiler ?? t.label_verteiler,
      label_speicher: c.label_speicher ?? labels.speicher ?? t.label_speicher,

      // SVG Badge Labels (Auf Rohrleitungen und Speicher)
      label_badge_kol: c.label_badge_kol ?? c.badge_kol_label ?? labels.badge_kol ?? labels.kol ?? t.label_badge_kol,
      label_badge_vl: c.label_badge_vl ?? c.badge_vl_label ?? labels.badge_vl ?? labels.vl ?? t.label_badge_vl,
      label_badge_rl: c.label_badge_rl ?? c.badge_rl_label ?? labels.badge_rl ?? labels.rl ?? t.label_badge_rl,
      label_speicher_unten: c.label_speicher_unten ?? c.badge_sp_unten_label ?? labels.speicher_unten ?? labels.sp_unten ?? t.label_speicher_unten,
      label_speicher_mitte: c.label_speicher_mitte ?? c.badge_sp_mitte_label ?? labels.speicher_mitte ?? labels.sp_mitte ?? t.label_speicher_mitte,
      label_speicher_oben: c.label_speicher_oben ?? c.badge_sp_oben_label ?? labels.speicher_oben ?? labels.sp_oben ?? t.label_speicher_oben,

      // Status Badge (Pumpenstatus oben rechts)
      label_pump_on: c.label_pump_on ?? c.pump_on_text ?? labels.pump_on ?? t.label_pump_on,
      label_pump_off: c.label_pump_off ?? c.pump_off_text ?? labels.pump_off ?? t.label_pump_off,

      // KPI Grid Labels (Unterer Bereich)
      label_kpi_vl: c.label_kpi_vl ?? c.kpi_vl_label ?? labels.kpi_vl ?? labels.vl ?? t.label_kpi_vl,
      label_kpi_rl: c.label_kpi_rl ?? c.kpi_rl_label ?? labels.kpi_rl ?? labels.rl ?? t.label_kpi_rl,
      label_kpi_kol: c.label_kpi_kol ?? c.kpi_kol_label ?? labels.kpi_kol ?? labels.kol ?? t.label_kpi_kol,
      label_kpi_sp_oben: c.label_kpi_sp_oben ?? c.kpi_sp_oben_label ?? labels.kpi_sp_oben ?? labels.sp_oben ?? t.label_kpi_sp_oben,
      label_kpi_sp_unten: c.label_kpi_sp_unten ?? c.kpi_sp_unten_label ?? labels.kpi_sp_unten ?? labels.sp_unten ?? t.label_kpi_sp_unten,
      label_kpi_pump: c.label_kpi_pump ?? c.kpi_pump_label ?? labels.kpi_pump ?? labels.pump ?? t.label_kpi_pump,
      label_kpi_flow: c.label_kpi_flow ?? c.kpi_flow_label ?? labels.kpi_flow ?? labels.flow ?? t.label_kpi_flow,
      label_kpi_power: c.label_kpi_power ?? c.kpi_power_label ?? labels.kpi_power ?? labels.power ?? t.label_kpi_power,
      label_kpi_press: c.label_kpi_press ?? c.kpi_press_label ?? labels.kpi_press ?? labels.press ?? t.label_kpi_press,

      // Units (Einheiten - Global & Per-Entity)
      unit_temp: c.unit_temp ?? units.temp ?? t.unit_temp,
      unit_kol: c.unit_kol ?? units.kol ?? c.unit_temp ?? units.temp ?? t.unit_temp,
      unit_vl: c.unit_vl ?? units.vl ?? c.unit_temp ?? units.temp ?? t.unit_temp,
      unit_rl: c.unit_rl ?? units.rl ?? c.unit_temp ?? units.temp ?? t.unit_temp,
      unit_sp_oben: c.unit_sp_oben ?? c.unit_speicher_oben ?? units.sp_oben ?? units.speicher_oben ?? c.unit_temp ?? units.temp ?? t.unit_temp,
      unit_sp_mitte: c.unit_sp_mitte ?? c.unit_speicher_mitte ?? units.sp_mitte ?? units.speicher_mitte ?? c.unit_temp ?? units.temp ?? t.unit_temp,
      unit_sp_unten: c.unit_sp_unten ?? c.unit_speicher_unten ?? units.sp_unten ?? units.speicher_unten ?? c.unit_temp ?? units.temp ?? t.unit_temp,
      unit_flow: c.unit_flow ?? units.flow ?? t.unit_flow,
      unit_pump: c.unit_pump ?? units.pump ?? t.unit_pump,
      unit_power: c.unit_power ?? units.power ?? t.unit_power,
      unit_press: c.unit_press ?? c.unit_pressure ?? units.press ?? units.pressure ?? t.unit_press,

      // Tooltips (Hover-Texte)
      tooltip_kol: c.tooltip_kol ?? tooltips.kol ?? t.tooltip_kol,
      tooltip_vl: c.tooltip_vl ?? tooltips.vl ?? t.tooltip_vl,
      tooltip_rl: c.tooltip_rl ?? tooltips.rl ?? t.tooltip_rl,
      tooltip_pump: c.tooltip_pump ?? tooltips.pump ?? t.tooltip_pump,
      tooltip_flow: c.tooltip_flow ?? tooltips.flow ?? t.tooltip_flow,
      tooltip_power: c.tooltip_power ?? tooltips.power ?? t.tooltip_power,
      tooltip_press: c.tooltip_press ?? tooltips.press ?? t.tooltip_press,
      tooltip_sp_oben: c.tooltip_sp_oben ?? tooltips.sp_oben ?? t.tooltip_sp_oben,
      tooltip_sp_mitte: c.tooltip_sp_mitte ?? tooltips.sp_mitte ?? t.tooltip_sp_mitte,
      tooltip_sp_unten: c.tooltip_sp_unten ?? tooltips.sp_unten ?? t.tooltip_sp_unten,
    };
  }

  setConfig(config) {
    if (!config) throw new Error('Invalid configuration');
    this._rawConfig = Object.assign({}, config);
    this._currentLang = this._getLanguage();
    this._config = this._resolveConfig();

    // Live-Update im Dashboard Editor bei jeder YAML-Änderung
    if (this._built && this.shadowRoot) {
      this._buildCard();
      if (this._hass) this._updateStates();
    }
  }

  set hass(hass) {
    const isFirstHass = !this._hass;
    this._hass = hass;
    const newLang = this._getLanguage();
    if (newLang !== this._currentLang || isFirstHass) {
      this._currentLang = newLang;
      this._config = this._resolveConfig();
      if (this._built) {
        this._buildCard();
      }
    }
    if (!this._built) {
      this._buildCard();
      this._built = true;
    }
    this._updateStates();
  }

  _getTubes(count, isCompact) {
    const n = Math.max(3, Math.min(30, parseInt(count) || 8));
    const minX = isCompact ? 66 : 150;
    const maxX = isCompact ? 314 : 650;
    const span = maxX - minX;
    const step = span / n;
    const maxW = isCompact ? 24 : 36;
    const minW = isCompact ? 6 : 8;
    const tubeW = Math.max(minW, Math.min(maxW, step * 0.65));
    const tubes = [];
    for (let i = 0; i < n; i++) {
      const x = minX + i * step + (step - tubeW) / 2;
      const innerW = Math.max(isCompact ? 3 : 4, tubeW - Math.min(isCompact ? 6 : 10, tubeW * 0.28));
      const coreW = Math.max(isCompact ? 1.5 : 2, tubeW - Math.min(isCompact ? 14 : 22, tubeW * 0.6));
      tubes.push({
        x: Math.round(x * 10) / 10,
        w: Math.round(tubeW * 10) / 10,
        innerX: Math.round(((tubeW - innerW) / 2) * 10) / 10,
        innerW: Math.round(innerW * 10) / 10,
        coreX: Math.round(((tubeW - coreW) / 2) * 10) / 10,
        coreW: Math.round(coreW * 10) / 10,
        r: Math.round((tubeW / 2) * 10) / 10,
        innerR: Math.max(1, Math.round((innerW / 2) * 10) / 10),
        coreR: Math.max(1, Math.round((coreW / 2) * 10) / 10),
        centerX: Math.round((tubeW / 2) * 10) / 10,
        strokeW: Math.max(1.2, Math.min(2.5, tubeW * 0.1))
      });
    }
    return tubes;
  }

  _getVal(entityId) {
    if (!entityId || !this._hass || !this._hass.states[entityId]) return null;
    const s = this._hass.states[entityId].state;
    const v = parseFloat(s);
    return isNaN(v) ? null : v;
  }

  _tempToColor(t) {
    if (t === null || isNaN(t)) return '#64748b';
    if (t < 22) return '#3b82f6';
    if (t < 35) return '#06b6d4';
    if (t < 48) return '#10b981';
    if (t < 62) return '#f59e0b';
    if (t < 78) return '#ea580c';
    if (t < 95) return '#ef4444';
    return '#b91c1c';
  }

  _fireMoreInfo(entityId) {
    if (!entityId) return;
    const ev = new CustomEvent('hass-more-info', {
      bubbles: true,
      composed: true,
      detail: { entityId: entityId }
    });
    this.dispatchEvent(ev);
  }

  _getDefaultKpis() {
    const cfg = this._config;
    if (!cfg) return [];
    return [
      { id: 'vl', entity: cfg.vl_entity, label: cfg.label_kpi_vl, unit: cfg.unit_vl, color: '#38bdf8', tooltip: cfg.tooltip_vl },
      { id: 'rl', entity: cfg.rl_entity, label: cfg.label_kpi_rl, unit: cfg.unit_rl, color: '#ef4444', tooltip: cfg.tooltip_rl },
      { id: 'kol', entity: cfg.kol_entity, label: cfg.label_kpi_kol, unit: cfg.unit_kol, color: '#a855f7', tooltip: cfg.tooltip_kol },
      { id: 'sp_oben', entity: cfg.speicher_temp_oben, label: cfg.label_kpi_sp_oben, unit: cfg.unit_sp_oben, color: '#ef4444', tooltip: cfg.tooltip_sp_oben },
      { id: 'sp_unten', entity: cfg.speicher_temp_unten, label: cfg.label_kpi_sp_unten, unit: cfg.unit_sp_unten, color: '#38bdf8', tooltip: cfg.tooltip_sp_unten },
      { id: 'pump', entity: cfg.pump_entity, label: cfg.label_kpi_pump, unit: cfg.unit_pump, color: '#10b981', tooltip: cfg.tooltip_pump },
      { id: 'flow', entity: cfg.flow_entity, label: cfg.label_kpi_flow, unit: cfg.unit_flow, color: '#38bdf8', tooltip: cfg.tooltip_flow },
      { id: 'power', entity: cfg.power_entity, label: cfg.label_kpi_power, unit: cfg.unit_power, color: '#f97316', tooltip: cfg.tooltip_power },
      { id: 'press', entity: cfg.pressure_entity, label: cfg.label_kpi_press, unit: cfg.unit_press, color: '#cbd5e1', tooltip: cfg.tooltip_press }
    ];
  }

  _getActiveKpis() {
    const cfg = this._config;
    if (cfg && Array.isArray(cfg.kpis)) {
      return cfg.kpis.map((item, idx) => {
        const ent = typeof item === 'string' ? item : (item.entity || item.entity_id || '');
        const stateObj = ent && this._hass?.states ? this._hass.states[ent] : null;
        return {
          id: `custom_${idx}`,
          entity: ent,
          label: (item && (item.label || item.name)) || stateObj?.attributes?.friendly_name || ent || `KPI ${idx + 1}`,
          unit: (item && item.unit !== undefined) ? item.unit : (stateObj?.attributes?.unit_of_measurement || ''),
          color: (item && item.color) || '',
          decimals: item && item.decimals
        };
      });
    }
    return this._getDefaultKpis();
  }

  _buildCard() {
    const cfg = this._config;
    const isCompact = this._isCompact !== undefined ? this._isCompact : ((this.offsetWidth > 0 ? this.offsetWidth : (window.innerWidth || 800)) < 520);
    const rlHeightPct = typeof cfg.tank_return_height === 'number' ? Math.max(0, Math.min(100, cfg.tank_return_height)) : 0;
    const vlHeightPct = typeof cfg.tank_flow_height === 'number' ? Math.max(0, Math.min(100, cfg.tank_flow_height)) : 0;
    const pipeHeight = typeof cfg.pipe_height === 'number' ? Math.max(20, Math.min(250, cfg.pipe_height)) : 30;
    const tankHeight = typeof cfg.tank_height === 'number' ? Math.max(100, Math.min(350, cfg.tank_height)) : 120;

    const makeSpiral = (x1, y1, x2, y2) => {
      const w = x2 - x1;
      if (w <= 20) return `M ${x1.toFixed(1)} ${y1.toFixed(1)} L ${x2.toFixed(1)} ${y2.toFixed(1)}`;
      const steps = w > 120 ? 4 : 3;
      const stepW = w / steps;
      const dy = (y2 - y1) / steps;
      let d = `M ${x1.toFixed(1)} ${y1.toFixed(1)}`;
      for (let i = 0; i < steps; i++) {
        const sx = x1 + i * stepW;
        const sy = y1 + i * dy;
        const ex = sx + stepW;
        const ey = sy + dy;
        const midY = (sy + ey) / 2;
        const mx1 = sx + stepW * 0.25;
        const my1 = i % 2 === 0 ? midY + 11 : midY - 11;
        const mx2 = sx + stepW * 0.75;
        const my2 = i % 2 === 0 ? midY - 11 : midY + 11;
        d += ` C ${mx1.toFixed(1)} ${my1.toFixed(1)} ${mx2.toFixed(1)} ${my2.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`;
      }
      return d;
    };

    // Compact layout parametric metrics
    const compPipeGap = Math.round(pipeHeight * 0.75);
    const compTankHeight = Math.round(tankHeight * 1.32);
    const compTankTopY = 240 + compPipeGap;
    const compTankBottomY = compTankTopY + compTankHeight;
    const compViewBoxH = compTankBottomY + 18;

    const compTankMinY = compTankTopY + 4;
    const compTankMaxY = compTankBottomY - 4;
    const compLeftY = compTankMaxY - (rlHeightPct / 100) * (compTankMaxY - compTankMinY);
    const compRightY = compTankMaxY - (vlHeightPct / 100) * (compTankMaxY - compTankMinY);
    const compLeftFlangeY = Math.max(compTankTopY, Math.min(compTankBottomY - 14, compLeftY - 7));
    const compRightFlangeY = Math.max(compTankTopY, Math.min(compTankBottomY - 14, compRightY - 7));

    // Wide layout parametric metrics
    const wideTankTopY = 284 + pipeHeight;
    const wideTankHeight = tankHeight;
    const wideTankBottomY = wideTankTopY + wideTankHeight;
    const wideViewBoxH = wideTankBottomY + 20;

    const wideTankMinY = wideTankTopY + 4;
    const wideTankMaxY = wideTankBottomY - 4;
    const wideLeftY = wideTankMaxY - (rlHeightPct / 100) * (wideTankMaxY - wideTankMinY);
    const wideRightY = wideTankMaxY - (vlHeightPct / 100) * (wideTankMaxY - wideTankMinY);
    const wideLeftFlangeY = Math.max(wideTankTopY, Math.min(wideTankBottomY - 16, wideLeftY - 8));
    const wideRightFlangeY = Math.max(wideTankTopY, Math.min(wideTankBottomY - 16, wideRightY - 8));

    const tubes = this._getTubes(cfg.tube_count, isCompact);

    const tubeElements = tubes.map(t => `
      <g transform="translate(${t.x}, ${isCompact ? 62 : 68})">
        <rect x="0" y="0" width="${t.w}" height="${isCompact ? 142 : 180}" rx="${t.r}" fill="#0b1329" stroke="#334155" stroke-width="1.5" />
        <rect x="${t.innerX}" y="${isCompact ? 5 : 6}" width="${t.innerW}" height="${isCompact ? 132 : 168}" rx="${t.innerR}" fill="#030712" />
        <rect x="${t.coreX}" y="${isCompact ? 7 : 8}" width="${t.coreW}" height="${isCompact ? 128 : 164}" rx="${t.coreR}" fill="url(#tubeGrad)" opacity="0.9" filter="url(#glow)" />
        <line class="flow-pulse flowing" x1="${t.centerX}" y1="${isCompact ? 132 : 168}" x2="${t.centerX}" y2="${isCompact ? 8 : 10}" stroke="#ffffff" stroke-width="${t.strokeW}" stroke-linecap="round" opacity="0.85" />
        <rect x="0" y="0" width="${t.w}" height="${isCompact ? 142 : 180}" rx="${t.r}" fill="url(#glassReflection)" pointer-events="none" />
      </g>
    `).join('');

    const svgContent = isCompact ? `
      <svg id="svg-stage" class="compact" viewBox="0 0 380 ${compViewBoxH}" style="aspect-ratio: 380 / ${compViewBoxH};">
        <defs>
          <linearGradient id="tubeGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop id="grad-bot" offset="0%" stop-color="#38bdf8" />
            <stop id="grad-mid" offset="50%" stop-color="#f59e0b" />
            <stop id="grad-top" offset="100%" stop-color="#ef4444" />
          </linearGradient>
          <linearGradient id="manifoldGrad" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop id="mani-grad-vl" offset="0%" stop-color="#38bdf8" />
            <stop id="mani-grad-mid" offset="50%" stop-color="#f59e0b" />
            <stop id="mani-grad-rl" offset="100%" stop-color="#ef4444" />
          </linearGradient>
          <linearGradient id="spiralGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop id="spiral-grad-rl" offset="0%" stop-color="#ef4444" />
            <stop id="spiral-grad-mid" offset="50%" stop-color="#f59e0b" />
            <stop id="spiral-grad-vl" offset="100%" stop-color="#38bdf8" />
          </linearGradient>
          <linearGradient id="tankGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop id="tank-grad-top" offset="0%" stop-color="#ef4444" stop-opacity="0.82" />
            <stop id="tank-grad-mid" offset="50%" stop-color="#f59e0b" stop-opacity="0.75" />
            <stop id="tank-grad-bot" offset="100%" stop-color="#3b82f6" stop-opacity="0.82" />
          </linearGradient>
          <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.25" />
            <stop offset="25%" stop-color="#ffffff" stop-opacity="0.04" />
            <stop offset="70%" stop-color="#ffffff" stop-opacity="0.02" />
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0.2" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <!-- 1. TUBES -->
        ${tubeElements}

        <!-- 2. SAMMELKASTEN OBEN (RÜCKLAUF & KOLLEKTOR) -->
        <rect id="box-manifold" class="interactive-svg-elem" title="${cfg.tooltip_rl}" x="55" y="22" width="270" height="42" rx="7" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
        
        <!-- RL Badge am Rohraustritt (links im Sammelkasten) -->
        <g id="svg-rl-badge" class="interactive-svg-elem" title="${cfg.tooltip_rl}" transform="translate(60, 26)">
          <rect id="svg-rl-rect" x="0" y="0" width="58" height="34" rx="6" fill="#ef4444" filter="url(#glow)" />
          <text x="29" y="12" fill="rgba(255,255,255,0.9)" font-size="9" font-weight="700" text-anchor="middle">${cfg.label_badge_rl}</text>
          <text id="txt-manifold-val" x="29" y="27" fill="#ffffff" font-size="11.5" font-weight="800" text-anchor="middle">--.- ${cfg.unit_rl}</text>
        </g>

        <!-- Kasten-Mitte Text -->
        <text id="txt-manifold" class="interactive-svg-elem" title="${cfg.tooltip_rl}" x="190" y="43" dominant-baseline="central" text-anchor="middle" fill="#94a3b8" font-size="8.5" font-weight="700" letter-spacing="0.5">${this._compactLabel(cfg.label_sammelkasten, 'VAKUUM-KOLLEKTOR', 'VACUUM COLLECTOR')}</text>

        <!-- KOLLEKTOR BADGE: Oben rechts im Sammelkasten (lila unterlegt) -->
        <g id="svg-kol-badge" class="interactive-svg-elem" title="${cfg.tooltip_kol}" transform="translate(262, 26)">
          <rect id="svg-kol-rect" x="0" y="0" width="58" height="34" rx="6" fill="#7c3aed" filter="url(#glow)" />
          <text x="29" y="12" fill="rgba(255,255,255,0.9)" font-size="9" font-weight="700" text-anchor="middle">${cfg.label_badge_kol}</text>
          <text id="svg-kol-text" x="29" y="27" fill="#ffffff" font-size="11.5" font-weight="800" text-anchor="middle">--.- ${cfg.unit_kol}</text>
        </g>

        <!-- 3. UNTERER VERTEILERKASTEN (VORLAUF) -->
        <rect id="box-distributor" class="interactive-svg-elem" title="${cfg.tooltip_vl}" x="55" y="198" width="270" height="42" rx="7" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
        <text id="txt-distributor" class="interactive-svg-elem" title="${cfg.tooltip_vl}" x="156" y="219" dominant-baseline="central" text-anchor="middle" fill="#94a3b8" font-size="9" font-weight="700" letter-spacing="0.6">${this._compactLabel(cfg.label_verteiler, 'VORLAUF-VERTEILER', 'FLOW DISTRIBUTOR')}</text>
        
        <!-- VL Badge am Rohreintritt (rechts im Verteilerkasten, blau unterlegt) -->
        <g id="svg-vl-badge" class="interactive-svg-elem" title="${cfg.tooltip_vl}" transform="translate(262, 202)">
          <rect id="svg-vl-rect" x="0" y="0" width="58" height="34" rx="6" fill="#0284c7" filter="url(#glow)" />
          <text x="29" y="12" fill="rgba(255,255,255,0.9)" font-size="9" font-weight="700" text-anchor="middle">${cfg.label_badge_vl}</text>
          <text id="txt-distributor-val" x="29" y="27" fill="#ffffff" font-size="11.5" font-weight="800" text-anchor="middle">--.- ${cfg.unit_vl}</text>
        </g>

        <!-- 4. PUFFERSPEICHER -->
        <g id="svg-tank-group">
          <rect x="45" y="${compTankTopY}" width="290" height="${compTankHeight}" rx="14" fill="#0b1120" stroke="#475569" stroke-width="2.2" />
          <rect x="49" y="${compTankTopY + 4}" width="282" height="${compTankHeight - 8}" rx="10" fill="url(#tankGradient)" />
          <text x="190" y="${compTankTopY + 19}" text-anchor="middle" fill="#ffffff" font-size="11.5" font-weight="800" letter-spacing="0.8" opacity="0.95" filter="url(#glow)">${cfg.label_speicher}</text>

          <g id="convection-bubbles" opacity="0.65">
            <circle cx="95" cy="${compTankBottomY - 18}" r="3" fill="#ffffff" class="bubble-1" />
            <circle cx="142" cy="${compTankBottomY - 15}" r="3.5" fill="#ffffff" class="bubble-2" />
            <circle cx="190" cy="${compTankBottomY - 20}" r="3" fill="#ffffff" class="bubble-3" />
            <circle cx="238" cy="${compTankBottomY - 16}" r="3.5" fill="#ffffff" class="bubble-4" />
            <circle cx="285" cy="${compTankBottomY - 19}" r="3" fill="#ffffff" class="bubble-5" />
          </g>

          <!-- Spirale Wärmetauscher (Höhenverstellbar links compLeftY und rechts compRightY) -->
          <path d="${makeSpiral(49, compLeftY, 331, compRightY)}" fill="none" stroke="url(#spiralGrad)" stroke-width="3.5" stroke-dasharray="6,4" opacity="0.85" />
          <path class="flowing flow-pulse" d="${makeSpiral(49, compLeftY, 331, compRightY)}" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" opacity="0.85" />

          <!-- 3 SPEICHER-BADGES (Im oberen Speicherbereich bei y=compTankTopY + 30) -->
          <g id="badge-sp-unten" class="interactive-svg-elem" title="${cfg.tooltip_sp_unten}" transform="translate(58, ${compTankTopY + 30})">
            <rect id="rect-sp-unten" x="0" y="0" width="82" height="46" rx="7" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5" />
            <text x="41" y="15" fill="#94a3b8" font-size="8" font-weight="700" text-anchor="middle">${cfg.label_speicher_unten}</text>
            <text id="txt-sp-unten" x="41" y="35" fill="#93c5fd" font-size="13.5" font-weight="800" text-anchor="middle">--.- ${cfg.unit_sp_unten}</text>
          </g>

          <g id="badge-sp-mitte" class="interactive-svg-elem" title="${cfg.tooltip_sp_mitte}" transform="translate(149, ${compTankTopY + 30})">
            <rect id="rect-sp-mitte" x="0" y="0" width="82" height="46" rx="7" fill="#0f172a" stroke="#eab308" stroke-width="1.5" />
            <text x="41" y="15" fill="#94a3b8" font-size="8" font-weight="700" text-anchor="middle">${cfg.label_speicher_mitte}</text>
            <text id="txt-sp-mitte" x="41" y="35" fill="#fde047" font-size="13.5" font-weight="800" text-anchor="middle">--.- ${cfg.unit_sp_mitte}</text>
          </g>

          <g id="badge-sp-oben" class="interactive-svg-elem" title="${cfg.tooltip_sp_oben}" transform="translate(240, ${compTankTopY + 30})">
            <rect id="rect-sp-oben" x="0" y="0" width="82" height="46" rx="7" fill="#0f172a" stroke="#ef4444" stroke-width="1.5" />
            <text x="41" y="15" fill="#94a3b8" font-size="8" font-weight="700" text-anchor="middle">${cfg.label_speicher_oben}</text>
            <text id="txt-sp-oben" x="41" y="35" fill="#fca5a5" font-size="13.5" font-weight="800" text-anchor="middle">--.- ${cfg.unit_sp_oben}</text>
          </g>
        </g>

        <!-- 5. ROHRLEITUNGEN -->
        <!-- VORLAUF (RECHTS) -->
        <path id="pipe-vl" class="interactive-svg-elem" title="${cfg.tooltip_vl}" d="M 335 ${compRightY.toFixed(1)} L 358 ${compRightY.toFixed(1)} L 358 220 L 325 220" fill="none" stroke="#38bdf8" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
        <path id="flow-vl" class="flowing flow-pulse interactive-svg-elem" title="${cfg.tooltip_vl}" d="M 335 ${compRightY.toFixed(1)} L 358 ${compRightY.toFixed(1)} L 358 220 L 325 220" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85" />

        <!-- RÜCKLAUF (LINKS) -->
        <path id="pipe-rl" class="interactive-svg-elem" title="${cfg.tooltip_rl}" d="M 55 43 L 22 43 L 22 ${compLeftY.toFixed(1)} L 45 ${compLeftY.toFixed(1)}" fill="none" stroke="#ef4444" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
        <path id="flow-rl" class="flowing flow-pulse interactive-svg-elem" title="${cfg.tooltip_rl}" d="M 55 43 L 22 43 L 22 ${compLeftY.toFixed(1)} L 45 ${compLeftY.toFixed(1)}" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.85" />

        <!-- FLANSCHE -->
        <g id="pipe-flanges" pointer-events="none">
          <rect id="flange-manifold" x="49" y="36" width="6" height="14" rx="1" fill="#1e293b" stroke="#ef4444" stroke-width="1.2" />
          <rect id="flange-distributor" x="325" y="213" width="6" height="14" rx="1" fill="#1e293b" stroke="#38bdf8" stroke-width="1.2" />
          <rect x="39" y="${compLeftFlangeY.toFixed(1)}" width="6" height="14" rx="1" fill="#1e293b" stroke="#ef4444" stroke-width="1.2" />
          <rect x="335" y="${compRightFlangeY.toFixed(1)}" width="6" height="14" rx="1" fill="#1e293b" stroke="#38bdf8" stroke-width="1.2" />
        </g>

        <!-- 6. PUMPE (LINKS) -->
        <g id="svg-pump-group" class="interactive-svg-elem" title="${cfg.tooltip_pump}" transform="translate(22, 150)">
          <circle id="pump-housing-circle" cx="0" cy="0" r="13" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
          <g id="pump-wheel" class="spin" style="animation-duration: 1.5s;">
            <path class="pump-blade" d="M 0 0 L 0 -8 A 8 8 0 0 0 -7 -3 Z" fill="#ef4444" />
            <path class="pump-blade" d="M 0 0 L -8 0 A 8 8 0 0 0 -3 7 Z" fill="#ef4444" />
            <path class="pump-blade" d="M 0 0 L 0 8 A 8 8 0 0 0 7 3 Z" fill="#ef4444" />
            <path class="pump-blade" d="M 0 0 L 8 0 A 8 8 0 0 0 3 -7 Z" fill="#ef4444" />
          </g>
          <circle cx="0" cy="0" r="3.5" fill="#ffffff" />
        </g>

        <!-- 7. LIVE-BADGES: Integriert in Sammelkasten und Verteiler -->
      </svg>
    ` : `
      <svg id="svg-stage" viewBox="0 0 800 ${wideViewBoxH}" style="aspect-ratio: 800 / ${wideViewBoxH};">
        <defs>
          <linearGradient id="tubeGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop id="grad-bot" offset="0%" stop-color="#38bdf8" />
            <stop id="grad-mid" offset="50%" stop-color="#f59e0b" />
            <stop id="grad-top" offset="100%" stop-color="#ef4444" />
          </linearGradient>

          <linearGradient id="manifoldGrad" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop id="mani-grad-vl" offset="0%" stop-color="#38bdf8" />
            <stop id="mani-grad-mid" offset="50%" stop-color="#f59e0b" />
            <stop id="mani-grad-rl" offset="100%" stop-color="#ef4444" />
          </linearGradient>

          <linearGradient id="spiralGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop id="spiral-grad-rl" offset="0%" stop-color="#ef4444" />
            <stop id="spiral-grad-mid" offset="50%" stop-color="#f59e0b" />
            <stop id="spiral-grad-vl" offset="100%" stop-color="#38bdf8" />
          </linearGradient>

          <linearGradient id="tankGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop id="tank-grad-top" offset="0%" stop-color="#ef4444" stop-opacity="0.82" />
            <stop id="tank-grad-mid" offset="50%" stop-color="#f59e0b" stop-opacity="0.75" />
            <stop id="tank-grad-bot" offset="100%" stop-color="#3b82f6" stop-opacity="0.82" />
          </linearGradient>

          <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.25" />
            <stop offset="25%" stop-color="#ffffff" stop-opacity="0.04" />
            <stop offset="70%" stop-color="#ffffff" stop-opacity="0.02" />
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0.2" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <!-- 1. DYNAMISCHE VAKUUM-RÖHRENKOLLEKTOREN -->
        ${tubeElements}

        <!-- 2. SAMMELKASTEN (MANIFOLD) OBEN - HEISS (AUSTRITT LINKS) -->
        <rect id="box-manifold" class="interactive-svg-elem" title="${cfg.tooltip_rl}" x="135" y="22" width="530" height="50" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2" />

        <!-- RL Badge am Rohraustritt (links im Sammelkasten, rot unterlegt) -->
        <g id="svg-rl-badge" class="interactive-svg-elem" title="${cfg.tooltip_rl}" transform="translate(142, 27)">
          <rect id="svg-rl-rect" x="0" y="0" width="76" height="40" rx="7" fill="#ef4444" filter="url(#glow)" />
          <text x="38" y="14" fill="rgba(255,255,255,0.9)" font-size="10.5" font-weight="700" text-anchor="middle">${cfg.label_badge_rl}</text>
          <text id="txt-manifold-val" x="38" y="32" fill="#ffffff" font-size="14.5" font-weight="800" text-anchor="middle">--.- ${cfg.unit_rl}</text>
        </g>

        <!-- Kasten-Mitte Text -->
        <text id="txt-manifold" class="interactive-svg-elem" title="${cfg.tooltip_rl}" x="400" y="47" dominant-baseline="central" text-anchor="middle" fill="#94a3b8" font-size="10.5" font-weight="700" letter-spacing="1.2">${cfg.label_sammelkasten}</text>

        <!-- KOLLEKTOR BADGE: Oben rechts im Sammelkasten (lila unterlegt) -->
        <g id="svg-kol-badge" class="interactive-svg-elem" title="${cfg.tooltip_kol}" transform="translate(582, 27)">
          <rect id="svg-kol-rect" x="0" y="0" width="76" height="40" rx="7" fill="#7c3aed" filter="url(#glow)" />
          <text x="38" y="14" fill="rgba(255,255,255,0.9)" font-size="10.5" font-weight="700" text-anchor="middle">${cfg.label_badge_kol}</text>
          <text id="svg-kol-text" x="38" y="32" fill="#ffffff" font-size="14.5" font-weight="800" text-anchor="middle">--.- ${cfg.unit_kol}</text>
        </g>

        <!-- 3. UNTERER VERTEILERKASTEN (VORLAUF-VERTEILER) - KALT (EINTRITT RECHTS) -->
        <rect id="box-distributor" class="interactive-svg-elem" title="${cfg.tooltip_vl}" x="135" y="240" width="530" height="44" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
        <text id="txt-distributor" class="interactive-svg-elem" title="${cfg.tooltip_vl}" x="375" y="262" dominant-baseline="central" text-anchor="middle" fill="#94a3b8" font-size="10.5" font-weight="700" letter-spacing="1">${cfg.label_verteiler}</text>

        <!-- VL Badge am Rohreintritt (rechts im Verteilerkasten, blau unterlegt) -->
        <g id="svg-vl-badge" class="interactive-svg-elem" title="${cfg.tooltip_vl}" transform="translate(582, 244)">
          <rect id="svg-vl-rect" x="0" y="0" width="76" height="36" rx="7" fill="#0284c7" filter="url(#glow)" />
          <text x="38" y="13" fill="rgba(255,255,255,0.9)" font-size="10" font-weight="700" text-anchor="middle">${cfg.label_badge_vl}</text>
          <text id="txt-distributor-val" x="38" y="29" fill="#ffffff" font-size="13.5" font-weight="800" text-anchor="middle">--.- ${cfg.unit_vl}</text>
        </g>

        <!-- 4. PUFFERSPEICHER UNTEN -->
        <g id="svg-tank-group">
          <rect x="190" y="${wideTankTopY}" width="420" height="${wideTankHeight}" rx="14" fill="#0b1120" stroke="#475569" stroke-width="2.5" />
          <rect x="194" y="${wideTankTopY + 4}" width="412" height="${wideTankHeight - 8}" rx="10" fill="url(#tankGradient)" />
          <text x="400" y="${wideTankTopY + 19}" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="800" letter-spacing="0.8" opacity="0.95" filter="url(#glow)">${cfg.label_speicher}</text>

          <g id="convection-bubbles" opacity="0.65">
            <circle cx="270" cy="${wideTankBottomY - 15}" r="3" fill="#ffffff" class="bubble-1" />
            <circle cx="340" cy="${wideTankBottomY - 12}" r="4" fill="#ffffff" class="bubble-2" />
            <circle cx="400" cy="${wideTankBottomY - 17}" r="3" fill="#ffffff" class="bubble-3" />
            <circle cx="460" cy="${wideTankBottomY - 13}" r="3.5" fill="#ffffff" class="bubble-4" />
            <circle cx="530" cy="${wideTankBottomY - 16}" r="3" fill="#ffffff" class="bubble-5" />
          </g>

          <!-- Spirale Wärmetauscher (Höhenverstellbar links wideLeftY und rechts wideRightY) -->
          <path d="${makeSpiral(194, wideLeftY, 606, wideRightY)}" fill="none" stroke="url(#spiralGrad)" stroke-width="4" stroke-dasharray="6,4" opacity="0.85" />
          <path class="flowing flow-pulse" d="${makeSpiral(194, wideLeftY, 606, wideRightY)}" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.85" />

          <!-- 3 Schichtungs-Temperatur Badges (Unten, Mitte, Oben - Zentriert, y=wideTankTopY + 26) -->
          <g id="badge-sp-unten" class="interactive-svg-elem" title="${cfg.tooltip_sp_unten}" transform="translate(208, ${wideTankTopY + 26})">
            <rect id="rect-sp-unten" x="0" y="0" width="118" height="40" rx="7" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5" />
            <text x="59" y="14" fill="#94a3b8" font-size="9" font-weight="700" text-anchor="middle">${cfg.label_speicher_unten}</text>
            <text id="txt-sp-unten" x="59" y="32" fill="#93c5fd" font-size="13.5" font-weight="800" text-anchor="middle">--.- ${cfg.unit_sp_unten}</text>
          </g>

          <g id="badge-sp-mitte" class="interactive-svg-elem" title="${cfg.tooltip_sp_mitte}" transform="translate(341, ${wideTankTopY + 26})">
            <rect id="rect-sp-mitte" x="0" y="0" width="118" height="40" rx="7" fill="#0f172a" stroke="#eab308" stroke-width="1.5" />
            <text x="59" y="14" fill="#94a3b8" font-size="9" font-weight="700" text-anchor="middle">${cfg.label_speicher_mitte}</text>
            <text id="txt-sp-mitte" x="59" y="32" fill="#fde047" font-size="13.5" font-weight="800" text-anchor="middle">--.- ${cfg.unit_sp_mitte}</text>
          </g>

          <g id="badge-sp-oben" class="interactive-svg-elem" title="${cfg.tooltip_sp_oben}" transform="translate(474, ${wideTankTopY + 26})">
            <rect id="rect-sp-oben" x="0" y="0" width="118" height="40" rx="7" fill="#0f172a" stroke="#ef4444" stroke-width="1.5" />
            <text x="59" y="14" fill="#94a3b8" font-size="9" font-weight="700" text-anchor="middle">${cfg.label_speicher_oben}</text>
            <text id="txt-sp-oben" x="59" y="32" fill="#fca5a5" font-size="13.5" font-weight="800" text-anchor="middle">--.- ${cfg.unit_sp_oben}</text>
          </g>
        </g>

        <!-- 5. ROHRLEITUNGEN -->
        <!-- VORLAUF (RECHTS) -->
        <path id="pipe-vl" class="interactive-svg-elem" title="${cfg.tooltip_vl}" d="M 610 ${wideRightY.toFixed(1)} L 740 ${wideRightY.toFixed(1)} L 740 262 L 673 262" fill="none" stroke="#38bdf8" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
        <path id="flow-vl" class="flowing flow-pulse interactive-svg-elem" title="${cfg.tooltip_vl}" d="M 610 ${wideRightY.toFixed(1)} L 740 ${wideRightY.toFixed(1)} L 740 262 L 673 262" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.85" />

        <!-- RÜCKLAUF (LINKS) -->
        <path id="pipe-rl" class="interactive-svg-elem" title="${cfg.tooltip_rl}" d="M 127 47 L 60 47 L 60 ${wideLeftY.toFixed(1)} L 190 ${wideLeftY.toFixed(1)}" fill="none" stroke="#ef4444" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
        <path id="flow-rl" class="flowing flow-pulse interactive-svg-elem" title="${cfg.tooltip_rl}" d="M 127 47 L 60 47 L 60 ${wideLeftY.toFixed(1)} L 190 ${wideLeftY.toFixed(1)}" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.85" />

        <g id="pipe-flanges" pointer-events="none">
          <rect id="flange-manifold" x="127" y="39" width="8" height="16" rx="2" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
          <rect id="flange-distributor" x="665" y="254" width="8" height="16" rx="2" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
          <rect x="182" y="${wideLeftFlangeY.toFixed(1)}" width="8" height="16" rx="2" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
          <rect x="610" y="${wideRightFlangeY.toFixed(1)}" width="8" height="16" rx="2" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
        </g>

        <!-- 6. PUMPE (LINKS) -->
        <g id="svg-pump-group" class="interactive-svg-elem" title="${cfg.tooltip_pump}" transform="translate(60, 230)">
          <circle id="pump-housing-circle" cx="0" cy="0" r="22" fill="#1e293b" stroke="#ef4444" stroke-width="2.5" />
          <g id="pump-wheel" class="spin" style="animation-duration: 1.5s;">
            <path class="pump-blade" d="M 0 0 L 0 -13 A 13 13 0 0 0 -12 -5 Z" fill="#ef4444" />
            <path class="pump-blade" d="M 0 0 L -13 0 A 13 13 0 0 0 -5 12 Z" fill="#ef4444" />
            <path class="pump-blade" d="M 0 0 L 0 13 A 13 13 0 0 0 12 5 Z" fill="#ef4444" />
            <path class="pump-blade" d="M 0 0 L 13 0 A 13 13 0 0 0 5 -12 Z" fill="#ef4444" />
          </g>
          <circle cx="0" cy="0" r="5" fill="#ffffff" />
        </g>
    `;

    const activeKpis = this._getActiveKpis();

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          height: 100%;
        }
        ha-card {
          container-type: inline-size;
          background: var(--ha-card-background, var(--card-background-color, #1e293b));
          color: var(--primary-text-color, #f8fafc);
          border-radius: var(--ha-card-border-radius, 16px);
          overflow: hidden;
          padding: 16px;
          border: 1px solid var(--divider-color, rgba(255,255,255,0.08));
          box-shadow: var(--ha-card-box-shadow, 0 4px 14px rgba(0,0,0,0.18));
          font-family: var(--paper-font-body1_-_font-family, system-ui, sans-serif);
          width: 100%;
          height: 100%;
          max-width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }
        @container (max-width: 520px) {
          ha-card {
            padding: 12px 10px;
          }
          .header {
            padding-bottom: 8px;
            margin-bottom: 8px;
            flex-wrap: wrap;
            gap: 6px;
          }
          .header-title {
            font-size: 14.5px;
            flex: 1 1 auto;
            min-width: 0;
          }
          .pump-badge {
            padding: 3.5px 10px;
            font-size: 11px;
            margin-left: auto;
          }
          .badge-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 6px;
            margin-top: 10px;
          }
          .badge-box {
            padding: 8px 4px;
            border-radius: 10px;
          }
          .badge-label {
            font-size: 10.5px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .badge-val {
            font-size: 14.5px;
            margin-top: 2px;
          }
        }
        @media (max-width: 520px) {
          ha-card {
            padding: 12px 10px;
          }
          .header {
            padding-bottom: 8px;
            margin-bottom: 8px;
            flex-wrap: wrap;
            gap: 6px;
          }
          .header-title {
            font-size: 14.5px;
            flex: 1 1 auto;
            min-width: 0;
          }
          .pump-badge {
            padding: 3.5px 10px;
            font-size: 11px;
            margin-left: auto;
          }
          .badge-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 6px;
            margin-top: 10px;
          }
          .badge-box {
            padding: 8px 4px;
            border-radius: 10px;
          }
          .badge-label {
            font-size: 10.5px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .badge-val {
            font-size: 14.5px;
            margin-top: 2px;
          }
        }
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--divider-color, rgba(255,255,255,0.08));
          margin-bottom: 12px;
          flex: 0 0 auto;
        }
        .header-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 17px;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: var(--primary-text-color, #f8fafc);
        }
        .header-icon {
          display: flex;
          align-items: center;
          color: #f59e0b;
        }
        .pump-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 5px 14px;
          border-radius: 9999px;
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.02em;
          transition: all 0.3s ease;
          border: 1px solid transparent;
          cursor: pointer;
          user-select: none;
        }
        .pump-badge.running {
          background: rgba(16, 185, 129, 0.18);
          color: #10b981;
          border-color: rgba(16, 185, 129, 0.35);
          box-shadow: 0 0 14px rgba(16, 185, 129, 0.25);
        }
        .pump-badge.idle {
          background: rgba(100, 116, 139, 0.15);
          color: #94a3b8;
          border-color: rgba(100, 116, 139, 0.28);
        }
        .pump-badge.idle:hover {
          box-shadow: 0 2px 8px rgba(148,163,184,0.25);
        }
        .svg-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1 1 auto;
          min-height: 0;
        }
        svg#svg-stage {
          width: 100%;
          max-width: 100%;
          max-height: 100%;
          height: auto;
          display: block;
          border-radius: 12px;
          background: rgba(8,12,22,0.65);
        }
        .flowing {
          stroke-dasharray: 10, 12;
          animation: flow linear infinite;
        }
        @keyframes flow {
          from { stroke-dashoffset: 44; }
          to { stroke-dashoffset: 0; }
        }
        .spin {
          transform-box: fill-box;
          transform-origin: center;
          animation: spin linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes convection-rise {
          0% { transform: translateY(0px); opacity: 0; }
          20% { opacity: 0.7; }
          80% { opacity: 0.7; }
          100% { transform: translateY(-40px); opacity: 0; }
        }
        .bubble-1 { animation: convection-rise 3.2s ease-in-out infinite; }
        .bubble-2 { animation: convection-rise 2.6s ease-in-out infinite 0.8s; }
        .bubble-3 { animation: convection-rise 3.7s ease-in-out infinite 1.5s; }
        .bubble-4 { animation: convection-rise 2.9s ease-in-out infinite 0.4s; }
        .bubble-5 { animation: convection-rise 3.4s ease-in-out infinite 2.1s; }
        .interactive-svg-elem {
          cursor: pointer;
          transition: opacity 0.2s ease, filter 0.2s ease;
        }
        .interactive-svg-elem:hover {
          filter: drop-shadow(0 0 8px rgba(255,255,255,0.6)) brightness(1.25);
        }
        .badge-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
          gap: 8px;
          margin-top: 14px;
          flex: 0 0 auto;
        }
        .badge-box {
          background: rgba(15, 23, 42, 0.65);
          border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.08));
          border-radius: 12px;
          padding: 10px 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          user-select: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
        .badge-box:hover {
          background: rgba(30, 41, 59, 0.85);
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
        }
        .badge-box:active {
          transform: translateY(0px) scale(0.98);
        }
        .badge-label {
          font-size: 11px;
          color: var(--secondary-text-color, #94a3b8);
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
          text-align: center;
        }
        .badge-val {
          font-size: 15.5px;
          font-weight: 700;
          letter-spacing: -0.01em;
          margin-top: 3px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
          text-align: center;
        }
      </style>

      <ha-card style="max-width: ${cfg.max_width};">
        ${cfg.show_header ? `
        <div class="header">
          <div class="header-title">
            ${cfg.show_header_icon ? `
            <span class="header-icon">
              ${cfg.header_icon && cfg.header_icon.startsWith('mdi:') ? `
                <ha-icon icon="${cfg.header_icon}"></ha-icon>
              ` : `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m14.14-14.14l-1.41 1.41"></path>
                </svg>
              `}
            </span>` : ''}
            ${cfg.show_header_title && cfg.title ? `<span>${cfg.title}</span>` : ''}
            ${cfg.show_header_title && cfg.title ? `<span class="header-title-text">${cfg.title}</span>` : ''}
          </div>
          ${(cfg.show_header_badge && cfg.header_badge !== 'none') ? `
          <div id="pump-status-badge" class="pump-badge idle" title="${cfg.header_badge === 'power' ? cfg.tooltip_power : (cfg.header_badge === 'kollektor' ? cfg.tooltip_kol : (cfg.header_badge === 'flow' ? cfg.tooltip_flow : (cfg.header_badge === 'pressure' ? cfg.tooltip_press : cfg.tooltip_pump)))}">
            <span id="pump-dot" style="width: 7px; height: 7px; border-radius: 50%; background: #94a3b8;"></span>
            <span id="pump-status-text">--</span>
          </div>` : ''}
        </div>` : ''}

        <div class="svg-container">
          ${svgContent}
        </div>

        ${cfg.show_kpi && activeKpis.length > 0 ? `
        <!-- DYNAMIC KPI GRID -->
        <div class="badge-grid">
          ${activeKpis.map((kpi, idx) => `
          <div id="btn-kpi-${idx}" class="badge-box" title="${kpi.tooltip || kpi.label || ''}">
            <span class="badge-label">${kpi.label}</span>
            <span id="kpi-val-${idx}" class="badge-val" style="color: ${kpi.color || '#38bdf8'};">-- ${kpi.unit || ''}</span>
          </div>
          `).join('')}
        </div>` : ''}
      </ha-card>
    `;


    // Click Event Listeners
    const bindClick = (elemId, entityKey) => {
      const el = this.shadowRoot.getElementById(elemId);
      if (el) {
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          this._fireMoreInfo(this._config[entityKey]);
        });
      }
    };

    // Dynamic KPI click listeners
    activeKpis.forEach((kpi, idx) => {
      const el = this.shadowRoot.getElementById(`btn-kpi-${idx}`);
      if (el && kpi.entity) {
        el.addEventListener('click', (e) => {
          e.stopPropagation();
          this._fireMoreInfo(kpi.entity);
        });
      }
    });

    // Header Badge
    bindClick('pump-status-badge', 'flow_entity');
    // Header Badge (dynamic more-info according to selected header_badge)
    let headerBadgeEntityKey = 'pump_entity';
    if (cfg.header_badge === 'power') headerBadgeEntityKey = 'power_entity';
    else if (cfg.header_badge === 'kollektor') headerBadgeEntityKey = 'kol_entity';
    else if (cfg.header_badge === 'flow') headerBadgeEntityKey = 'flow_entity';
    else if (cfg.header_badge === 'pressure') headerBadgeEntityKey = 'pressure_entity';
    bindClick('pump-status-badge', headerBadgeEntityKey);

    // SVG Boxes, Badges & Pipes
    bindClick('pipe-vl', 'vl_entity');
    bindClick('flow-vl', 'vl_entity');
    bindClick('box-distributor', 'vl_entity');
    bindClick('txt-distributor', 'vl_entity');
    bindClick('txt-distributor-val', 'vl_entity');
    bindClick('svg-vl-badge', 'vl_entity');

    bindClick('pipe-rl', 'rl_entity');
    bindClick('flow-rl', 'rl_entity');
    bindClick('box-manifold', 'rl_entity');
    bindClick('txt-manifold', 'rl_entity');
    bindClick('txt-manifold-val', 'rl_entity');
    bindClick('svg-rl-badge', 'rl_entity');

    bindClick('svg-kol-badge', 'kol_entity');
    bindClick('svg-pump-group', 'flow_entity');

    // Tank Badges
    bindClick('badge-sp-unten', 'speicher_temp_unten');
    bindClick('badge-sp-mitte', 'speicher_temp_mitte');
    bindClick('badge-sp-oben', 'speicher_temp_oben');
  }

  _updateStates() {
    if (!this.shadowRoot) return;
    const cfg = this._config;

    const vl = this._getVal(cfg.vl_entity);
    const rl = this._getVal(cfg.rl_entity);
    const kol = this._getVal(cfg.kol_entity);
    const pump = this._getVal(cfg.pump_entity);
    const flow = this._getVal(cfg.flow_entity);
    const press = this._getVal(cfg.pressure_entity);
    const power = this._getVal(cfg.power_entity);

    const tOben = this._getVal(cfg.speicher_temp_oben);
    const tUnten = this._getVal(cfg.speicher_temp_unten) || this._getVal(cfg.speicher_entity);
    let tMitte = this._getVal(cfg.speicher_temp_mitte);
    if (tMitte === null && tOben !== null && tUnten !== null) {
      tMitte = (tOben + tUnten) / 2.0;
    }

    const setT = (id, txt) => {
      const el = this.shadowRoot.getElementById(id);
      if (el) el.textContent = txt;
    };

    // Dynamic Units per Entity with HA state unit_of_measurement fallback
    const uKol = this._getUnit('unit_kol', cfg.kol_entity, cfg.unit_kol);
    const uVL = this._getUnit('unit_vl', cfg.vl_entity, cfg.unit_vl);
    const uRL = this._getUnit('unit_rl', cfg.rl_entity, cfg.unit_rl);
    const uSpOben = this._getUnit('unit_sp_oben', cfg.speicher_temp_oben, cfg.unit_sp_oben);
    const uSpMitte = this._getUnit('unit_sp_mitte', cfg.speicher_temp_mitte, cfg.unit_sp_mitte);
    const uSpUnten = this._getUnit('unit_sp_unten', cfg.speicher_temp_unten || cfg.speicher_entity, cfg.unit_sp_unten);
    const uPump = this._getUnit('unit_pump', cfg.pump_entity, cfg.unit_pump);
    const uFlow = this._getUnit('unit_flow', cfg.flow_entity, cfg.unit_flow);
    const uPress = this._getUnit('unit_press', cfg.pressure_entity, cfg.unit_press);
    const uPower = this._getUnit('unit_power', cfg.power_entity, cfg.unit_power);

    // Dynamic Colors: Vorlauf = Kalt/Kühler (Blau), Rücklauf = Heiß (Rot)
    const cRL = (rl !== null && !isNaN(rl)) ? (rl > 80 ? '#dc2626' : (rl > 45 ? '#ef4444' : '#f97316')) : '#ef4444';
    const cVL = (vl !== null && !isNaN(vl)) ? (vl < 30 ? '#3b82f6' : (vl < 50 ? '#38bdf8' : '#0284c7')) : '#38bdf8';
    const cKol = this._tempToColor(kol);
    const cOben = this._tempToColor(tOben);
    const cMitte = this._tempToColor(tMitte);
    const cUnten = this._tempToColor(tUnten);

    // Dynamic KPI Values & Colors
    const activeKpis = this._getActiveKpis();
    activeKpis.forEach((kpi, idx) => {
      const valEl = this.shadowRoot.getElementById(`kpi-val-${idx}`);
      if (!valEl) return;
      if (!kpi.entity) {
        valEl.textContent = '--';
        return;
      }
      const val = this._getVal(kpi.entity);
      const stateObj = this._hass?.states[kpi.entity];
      const uom = (kpi.unit !== undefined && kpi.unit !== '') ? kpi.unit : (stateObj?.attributes?.unit_of_measurement || '');
      let displayTxt = '--';
      if (val !== null && !isNaN(val)) {
        let dec = kpi.decimals;
        if (dec === undefined || dec === null) {
          if (uom.includes('°')) dec = 1;
          else if (uom.includes('bar') || uom.includes('psi')) dec = 2;
          else if (uom.includes('l/h') || uom.includes('W') || uom.includes('%')) dec = 0;
          else dec = (val % 1 === 0) ? 0 : 1;
        }
        displayTxt = val.toFixed(dec) + (uom ? ' ' + uom : '');
      } else if (stateObj && stateObj.state && stateObj.state !== 'unavailable' && stateObj.state !== 'unknown') {
        displayTxt = stateObj.state + (uom ? ' ' + uom : '');
      }
      valEl.textContent = displayTxt;

      if (!kpi.color || kpi.color === 'auto') {
        if (kpi.id === 'vl') valEl.style.color = cVL;
        else if (kpi.id === 'rl') valEl.style.color = cRL;
        else if (kpi.id === 'kol') valEl.style.color = cKol;
        else if (kpi.id === 'sp_oben') valEl.style.color = cOben;
        else if (kpi.id === 'sp_mitte') valEl.style.color = cMitte;
        else if (kpi.id === 'sp_unten') valEl.style.color = cUnten;
        else if (uom.includes('°')) valEl.style.color = this._tempToColor(val);
        else if (uom.includes('%')) valEl.style.color = (val && val > 0) ? '#10b981' : '#94a3b8';
        else if (uom.includes('W') || uom.includes('kW')) valEl.style.color = (val && val > 0) ? '#f97316' : '#94a3b8';
        else valEl.style.color = 'var(--primary-text-color, #f8fafc)';
      } else {
        valEl.style.color = kpi.color;
      }
    });

    // SVG Texts inside Sammelkasten (RL & Kol) and Verteilerkasten (VL) with dynamic per-entity units
    setT('txt-manifold-val', (rl !== null ? rl.toFixed(1) : '--.-') + ' ' + uRL);
    setT('txt-distributor-val', (vl !== null ? vl.toFixed(1) : '--.-') + ' ' + uVL);
    setT('svg-kol-text', (kol !== null ? kol.toFixed(1) : '--.-') + ' ' + uKol);

    const rectRL = this.shadowRoot.getElementById('svg-rl-rect');
    if (rectRL) rectRL.setAttribute('fill', cRL);

    const rectVL = this.shadowRoot.getElementById('svg-vl-rect');
    if (rectVL) rectVL.setAttribute('fill', cVL);

    const rectKol = this.shadowRoot.getElementById('svg-kol-rect');
    if (rectKol) rectKol.setAttribute('fill', '#7c3aed');

    setT('txt-sp-unten', (tUnten !== null ? tUnten.toFixed(1) : '--') + ' ' + uSpUnten);
    setT('txt-sp-mitte', (tMitte !== null ? tMitte.toFixed(1) : '--') + ' ' + uSpMitte);
    setT('txt-sp-oben', (tOben !== null ? tOben.toFixed(1) : '--') + ' ' + uSpOben);

    // Tube gradient: Vorlauf unten (blau), erhitzt sich nach oben zum Kollektor (rot)
    const gradBot = this.shadowRoot.getElementById('grad-bot');
    const gradMid = this.shadowRoot.getElementById('grad-mid');
    const gradTop = this.shadowRoot.getElementById('grad-top');
    if (gradBot) gradBot.setAttribute('stop-color', cVL);
    if (gradMid) gradMid.setAttribute('stop-color', this._tempToColor(((vl || 35) + (kol || 60)) / 2));
    if (gradTop) gradTop.setAttribute('stop-color', cKol);

    // Manifold oben (heiß / rot) & Distributor unten (kalt / blau)
    const boxMani = this.shadowRoot.getElementById('box-manifold');
    const boxDist = this.shadowRoot.getElementById('box-distributor');
    if (boxMani) boxMani.setAttribute('stroke', cRL);
    if (boxDist) boxDist.setAttribute('stroke', cVL);

    const flangeMani = this.shadowRoot.getElementById('flange-manifold');
    const flangeDist = this.shadowRoot.getElementById('flange-distributor');
    if (flangeMani) flangeMani.setAttribute('stroke', cRL);
    if (flangeDist) flangeDist.setAttribute('stroke', cVL);

    // Spiralen Gradient: heißer Rücklauf links (rot), kühlt ab nach rechts Vorlauf (blau)
    const spiralRL = this.shadowRoot.getElementById('spiral-grad-rl');
    const spiralVL = this.shadowRoot.getElementById('spiral-grad-vl');
    if (spiralRL) spiralRL.setAttribute('stop-color', cRL);
    if (spiralVL) spiralVL.setAttribute('stop-color', cVL);

    // Tank gradient
    const tankTop = this.shadowRoot.getElementById('tank-grad-top');
    const tankMid = this.shadowRoot.getElementById('tank-grad-mid');
    const tankBot = this.shadowRoot.getElementById('tank-grad-bot');
    if (tankTop) tankTop.setAttribute('stop-color', cOben);
    if (tankMid) tankMid.setAttribute('stop-color', cMitte);
    if (tankBot) tankBot.setAttribute('stop-color', cUnten);

    // Tank Badge Borders
    const rectSpUnten = this.shadowRoot.getElementById('rect-sp-unten');
    const rectSpMitte = this.shadowRoot.getElementById('rect-sp-mitte');
    const rectSpOben = this.shadowRoot.getElementById('rect-sp-oben');
    if (rectSpUnten) rectSpUnten.setAttribute('stroke', cUnten);
    if (rectSpMitte) rectSpMitte.setAttribute('stroke', cMitte);
    if (rectSpOben) rectSpOben.setAttribute('stroke', cOben);

    // Pipes & Badges Colors
    const pipeRL = this.shadowRoot.getElementById('pipe-rl');
    const pipeVL = this.shadowRoot.getElementById('pipe-vl');
    if (pipeRL) pipeRL.setAttribute('stroke', cRL);
    if (pipeVL) pipeVL.setAttribute('stroke', cVL);

    const pumpCircle = this.shadowRoot.getElementById('pump-housing-circle');
    if (pumpCircle) pumpCircle.setAttribute('stroke', cRL);
    this.shadowRoot.querySelectorAll('.pump-blade').forEach(b => b.setAttribute('fill', cRL));

    // Pump speed & flow animation mapped to FLOW RATE
    const maxFlow = (cfg.flow_max && cfg.flow_max > 0) ? cfg.flow_max : 450;
    const flowPct = (flow !== null && !isNaN(flow)) ? Math.min(100, Math.max(0, (flow / maxFlow) * 100)) : (pump || 0);

    const pumpWheel = this.shadowRoot.getElementById('pump-wheel');
    const flowElems = this.shadowRoot.querySelectorAll('.flow-pulse');
    const badge = this.shadowRoot.getElementById('pump-status-badge');
    const badgeText = this.shadowRoot.getElementById('pump-status-text');
    const badgeDot = this.shadowRoot.getElementById('pump-dot');

    const isRunning = Boolean((flow !== null && flow > 15) || (pump !== null && pump > 0) || (power !== null && power > 50));

    // Dynamic Header Badge based on cfg.header_badge
    if (badge && cfg.show_header_badge && cfg.header_badge !== 'none') {
      if (cfg.header_badge === 'power') {
        const isPowerActive = power !== null && power > 10;
        badge.className = isPowerActive ? 'pump-badge' : 'pump-badge idle';
        if (badgeText) badgeText.textContent = power !== null ? `${power.toFixed(0)} ${uPower}` : `-- ${uPower}`;
        if (badgeDot) badgeDot.style.background = isPowerActive ? '#f59e0b' : '#94a3b8';
        badge.title = cfg.tooltip_power;
      } else if (cfg.header_badge === 'kollektor') {
        const isKolActive = kol !== null && kol > 35;
        badge.className = isKolActive ? 'pump-badge' : 'pump-badge idle';
        if (badgeText) badgeText.textContent = kol !== null ? `${kol.toFixed(1)} ${uKol}` : `-- ${uKol}`;
        if (badgeDot) badgeDot.style.background = isKolActive ? '#a855f7' : '#94a3b8';
        badge.title = cfg.tooltip_kol;
      } else if (cfg.header_badge === 'flow') {
        const isFlowActive = flow !== null && flow > 15;
        badge.className = isFlowActive ? 'pump-badge' : 'pump-badge idle';
        if (badgeText) badgeText.textContent = flow !== null ? `${flow.toFixed(0)} ${uFlow}` : `-- ${uFlow}`;
        if (badgeDot) badgeDot.style.background = isFlowActive ? '#0284c7' : '#94a3b8';
        badge.title = cfg.tooltip_flow;
      } else if (cfg.header_badge === 'pressure') {
        const isPressActive = press !== null && press >= 1.0;
        badge.className = isPressActive ? 'pump-badge' : 'pump-badge idle';
        if (badgeText) badgeText.textContent = press !== null ? `${press.toFixed(2)} ${uPress}` : `-- ${uPress}`;
        if (badgeDot) badgeDot.style.background = isPressActive ? '#10b981' : '#ef4444';
        badge.title = cfg.tooltip_press;
      } else {
        // 'pump' (default)
        if (!isRunning) {
          badge.className = 'pump-badge idle';
          if (badgeText) badgeText.textContent = cfg.label_pump_off;
          if (badgeDot) badgeDot.style.background = '#94a3b8';
        } else {
          badge.className = 'pump-badge';
          if (badgeText) {
            if (flow !== null) {
              badgeText.textContent = `${cfg.label_pump_on} ${flow.toFixed(0)} ${uFlow} (${flowPct.toFixed(0)} %)`;
            } else {
              badgeText.textContent = `${cfg.label_pump_on} ${(pump || 0).toFixed(0)} ${uPump}`;
            }
          }
          if (badgeDot) badgeDot.style.background = '#10b981';
        }
        badge.title = cfg.tooltip_pump;
      }
    }

    // Collector pipe flow bubbles & pump wheel animation
    if (!isRunning) {
      if (pumpWheel) pumpWheel.style.animationPlayState = 'paused';
      flowElems.forEach(el => el.style.display = 'none');
    } else {
      if (pumpWheel) {
        pumpWheel.style.animationPlayState = 'running';
        const dur = Math.max(0.35, (100 - flowPct) / 40 + 0.35);
        pumpWheel.style.animationDuration = dur + 's';
      }
      flowElems.forEach(el => {
        el.style.display = 'inline';
        const speed = Math.max(0.4, (100 - flowPct) / 35 + 0.5);
        el.style.animationDuration = speed + 's';
      });
    }
  }

  getGridOptions() {
    return {
      columns: "full",
      rows: "auto",
      min_columns: 3,
      max_columns: 12,
      min_rows: 3
    };
  }

  getLayoutOptions() {
    return this.getGridOptions();
  }

  static getGridOptions() {
    return {
      columns: "full",
      rows: "auto",
      min_columns: 3,
      max_columns: 12,
      min_rows: 3
    };
  }

  static getLayoutOptions() {
    return {
      columns: "full",
      rows: "auto",
      min_columns: 3,
      max_columns: 12,
      min_rows: 3
    };
  }

  static getStubConfig(hass) {
    const disc = (typeof ThermalSolarCard.discoverEntities === 'function' && hass)
      ? ThermalSolarCard.discoverEntities(hass)
      : {};
    return {
      title: 'Solarthermie',
      language: 'auto',
      tube_count: 8,
      pipe_height: 30,
      tank_height: 120,
      show_header: true,
      show_kpi: true,
      tank_return_height: 0,
      tank_flow_height: 0,
      flow_max: 450,
      ...disc,
      kpis: [
        { id: 'kol', entity: disc.kol_entity || '', label: 'Kollektor', unit: '°C', color: 'auto' },
        { id: 'vl', entity: disc.vl_entity || '', label: 'Vorlauf', unit: '°C', color: 'auto' },
        { id: 'rl', entity: disc.rl_entity || '', label: 'Rücklauf', unit: '°C', color: 'auto' },
        { id: 'sp_oben', entity: disc.speicher_temp_oben || '', label: 'Speicher Oben', unit: '°C', color: 'auto' },
        { id: 'sp_unten', entity: disc.speicher_temp_unten || '', label: 'Speicher Unten', unit: '°C', color: 'auto' },
        { id: 'pump', entity: disc.pump_entity || '', label: 'Pumpe', unit: '%', color: 'auto' },
        { id: 'flow', entity: disc.flow_entity || '', label: 'Durchfluss', unit: 'l/h', color: 'auto' },
        { id: 'power', entity: disc.power_entity || '', label: 'Leistung', unit: 'W', color: 'auto' },
        { id: 'press', entity: disc.pressure_entity || '', label: 'Druck', unit: 'bar', color: 'auto' }
      ]
    };
  }

  static async getConfigElement() {
    return document.createElement('thermal-solar-card-editor');
  }

  getCardSize() {
    return 6;
  }
}

class ThermalSolarCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._haForm = null;
    this._kpiContainer = null;
    this._currentLang = null;
  }

  _getLanguage() {
    if (this._config && (this._config.language === 'en' || this._config.language === 'de')) {
      return this._config.language;
    }
    const haLang = (this._hass?.locale?.language || this._hass?.language || 'en').toLowerCase();
    return haLang.startsWith('de') ? 'de' : 'en';
  }

  _getDefaultKpiList(c) {
    const lang = this._getLanguage();
    const isDe = lang === 'de';
    return [
      { id: 'kol', entity: c.kol_entity || '', label: isDe ? 'Kollektor' : 'Collector', unit: c.unit_kol || '°C', color: 'auto' },
      { id: 'vl', entity: c.vl_entity || '', label: isDe ? 'Vorlauf' : 'Flow Temp', unit: c.unit_vl || '°C', color: 'auto' },
      { id: 'rl', entity: c.rl_entity || '', label: isDe ? 'Rücklauf' : 'Return Temp', unit: c.unit_rl || '°C', color: 'auto' },
      { id: 'sp_oben', entity: c.speicher_temp_oben || '', label: isDe ? 'Speicher Oben' : 'Tank Top', unit: c.unit_sp_oben || '°C', color: 'auto' },
      { id: 'sp_unten', entity: c.speicher_temp_unten || '', label: isDe ? 'Speicher Unten' : 'Tank Bottom', unit: c.unit_sp_unten || '°C', color: 'auto' },
      { id: 'pump', entity: c.pump_entity || '', label: isDe ? 'Pumpe' : 'Pump Speed', unit: c.unit_pump || '%', color: 'auto' },
      { id: 'flow', entity: c.flow_entity || '', label: isDe ? 'Durchfluss' : 'Flow Rate', unit: c.unit_flow || 'l/h', color: 'auto' },
      { id: 'power', entity: c.power_entity || '', label: isDe ? 'Leistung' : 'Heat Power', unit: c.unit_power || 'W', color: 'auto' },
      { id: 'press', entity: c.pressure_entity || '', label: isDe ? 'Druck' : 'Pressure', unit: c.unit_press || 'bar', color: 'auto' }
    ];
  }

  _getSchema(lang) {
    const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
    return [
      {
        name: 'title',
        label: t.editor_title,
        selector: { text: {} }
      },
      {
        name: '',
        type: 'expandable',
        title: t.editor_sec_header,
        icon: 'mdi:page-layout-header',
        schema: [
          { name: 'show_header', label: t.editor_show_header, selector: { boolean: {} } },
          { name: 'show_header_title', label: t.editor_show_header_title, selector: { boolean: {} } },
          { name: 'show_header_icon', label: t.editor_show_header_icon, selector: { boolean: {} } },
          { name: 'header_icon', label: t.editor_header_icon, selector: { icon: {} } },
          { name: 'show_header_badge', label: t.editor_show_header_badge, selector: { boolean: {} } },
          {
            name: 'header_badge',
            label: t.editor_header_badge,
            selector: {
              select: {
                options: [
                  { value: 'pump', label: t.editor_badge_pump },
                  { value: 'power', label: t.editor_badge_power },
                  { value: 'kollektor', label: t.editor_badge_kollektor },
                  { value: 'flow', label: t.editor_badge_flow },
                  { value: 'pressure', label: t.editor_badge_pressure },
                  { value: 'none', label: t.editor_badge_none }
                ]
              }
            }
          }
        ]
      },
      {
        name: '',
        type: 'expandable',
        title: t.editor_sec_display,
        icon: 'mdi:tune-vertical',
        schema: [
          { name: 'tube_count', label: t.editor_tube_count, selector: { number: { min: 4, max: 24, step: 1, mode: 'slider' } } },
          { name: 'pipe_height', label: t.editor_pipe_height, selector: { number: { min: 20, max: 200, step: 5, mode: 'slider', unit_of_measurement: 'px' } } },
          { name: 'tank_height', label: t.editor_tank_height, selector: { number: { min: 100, max: 300, step: 5, mode: 'slider', unit_of_measurement: 'px' } } },
          { name: 'tank_return_height', label: t.editor_tank_return_height, selector: { number: { min: 0, max: 100, step: 1, mode: 'slider', unit_of_measurement: '%' } } },
          { name: 'tank_flow_height', label: t.editor_tank_flow_height, selector: { number: { min: 0, max: 100, step: 1, mode: 'slider', unit_of_measurement: '%' } } },
          { name: 'show_kpi', label: t.editor_show_kpi, selector: { boolean: {} } }
        ]
      },
      {
        name: '',
        type: 'expandable',
        title: t.editor_sec_entities,
        icon: 'mdi:gauge',
        schema: [
          { name: 'kol_entity', label: t.editor_kol, selector: { entity: { filter: [{ domain: 'sensor' }] } } },
          { name: 'unit_kol', label: t.editor_unit_kol, selector: { text: {} } },
          { name: 'vl_entity', label: t.editor_vl, selector: { entity: { filter: [{ domain: 'sensor' }] } } },
          { name: 'unit_vl', label: t.editor_unit_vl, selector: { text: {} } },
          { name: 'rl_entity', label: t.editor_rl, selector: { entity: { filter: [{ domain: 'sensor' }] } } },
          { name: 'unit_rl', label: t.editor_unit_rl, selector: { text: {} } },
          { name: 'speicher_temp_oben', label: t.editor_sp_oben, selector: { entity: { filter: [{ domain: 'sensor' }] } } },
          { name: 'unit_sp_oben', label: t.editor_unit_sp_oben, selector: { text: {} } },
          { name: 'speicher_temp_mitte', label: t.editor_sp_mitte, selector: { entity: { filter: [{ domain: 'sensor' }] } } },
          { name: 'unit_sp_mitte', label: t.editor_unit_sp_mitte, selector: { text: {} } },
          { name: 'speicher_temp_unten', label: t.editor_sp_unten, selector: { entity: { filter: [{ domain: 'sensor' }] } } },
          { name: 'unit_sp_unten', label: t.editor_unit_sp_unten, selector: { text: {} } },
          { name: 'flow_entity', label: t.editor_flow, selector: { entity: { filter: [{ domain: 'sensor' }] } } },
          { name: 'flow_max', label: t.editor_flow_max, selector: { number: { min: 1, max: 10000, mode: 'box' } } },
          { name: 'unit_flow', label: t.editor_unit_flow, selector: { text: {} } },
          { name: 'pump_entity', label: t.editor_pump, selector: { entity: { filter: [{ domain: 'sensor' }] } } },
          { name: 'unit_pump', label: t.editor_unit_pump, selector: { text: {} } },
          { name: 'power_entity', label: t.editor_power, selector: { entity: { filter: [{ domain: 'sensor' }] } } },
          { name: 'unit_power', label: t.editor_unit_power, selector: { text: {} } },
          { name: 'pressure_entity', label: t.editor_pressure, selector: { entity: { filter: [{ domain: 'sensor' }] } } },
          { name: 'unit_press', label: t.editor_unit_press, selector: { text: {} } },
          { name: 'unit_temp', label: t.editor_unit_temp, selector: { text: {} } }
        ]
      },
      {
        name: '',
        type: 'expandable',
        title: t.editor_sec_labels,
        icon: 'mdi:format-title',
        schema: [
          { name: 'label_sammelkasten', label: t.editor_sammelkasten, selector: { text: {} } },
          { name: 'label_verteiler', label: t.editor_verteiler, selector: { text: {} } },
          { name: 'label_speicher', label: t.editor_speicher, selector: { text: {} } },
          { name: 'label_badge_kol', label: t.editor_badge_kol, selector: { text: {} } },
          { name: 'label_badge_vl', label: t.editor_badge_vl, selector: { text: {} } },
          { name: 'label_badge_rl', label: t.editor_badge_rl, selector: { text: {} } },
          { name: 'label_speicher_oben', label: t.editor_badge_sp_oben, selector: { text: {} } },
          { name: 'label_speicher_mitte', label: t.editor_badge_sp_mitte, selector: { text: {} } },
          { name: 'label_speicher_unten', label: t.editor_badge_sp_unten, selector: { text: {} } },
          { name: 'label_pump_on', label: t.editor_pump_on, selector: { text: {} } },
          { name: 'label_pump_off', label: t.editor_pump_off, selector: { text: {} } }
        ]
      }
    ];
  }

  setConfig(config) {
    const c = Object.assign({}, config);
    // Flatten nested entities if present so form controls reflect values
    if (c.entities) {
      if (!c.kol_entity) c.kol_entity = c.entities.collector || c.entities.collector_temperature || c.entities.kollektor || c.entities.kol || c.entities.kol_entity;
      if (!c.vl_entity) c.vl_entity = c.entities.flow_temp || c.entities.flow_temperature || c.entities.flow_inlet || c.entities.vl || c.entities.vl_entity;
      if (!c.rl_entity) c.rl_entity = c.entities.return_temp || c.entities.return_temperature || c.entities.return_outlet || c.entities.rl || c.entities.rl_entity;
      if (!c.speicher_temp_oben) c.speicher_temp_oben = c.entities.tank_top || c.entities.buffer_top || c.entities.speicher_oben || c.entities.speicher_temp_oben;
      if (!c.speicher_temp_mitte) c.speicher_temp_mitte = c.entities.tank_middle || c.entities.buffer_middle || c.entities.speicher_mitte || c.entities.speicher_temp_mitte;
      if (!c.speicher_temp_unten) c.speicher_temp_unten = c.entities.tank_bottom || c.entities.buffer_bottom || c.entities.speicher_unten || c.entities.speicher_temp_unten || c.entities.tank;
      if (!c.pump_entity) c.pump_entity = c.entities.pump || c.entities.pump_entity;
      if (!c.flow_entity) c.flow_entity = c.entities.flow || c.entities.flow_rate || c.entities.flow_entity;
      if (!c.flow_max && c.entities.flow_max) c.flow_max = c.entities.flow_max;
      if (!c.power_entity) c.power_entity = c.entities.power || c.entities.heat_power || c.entities.power_entity;
      if (!c.pressure_entity) c.pressure_entity = c.entities.pressure || c.entities.pressure_entity;
    }
    if (c.labels) {
      for (const [k, v] of Object.entries(c.labels)) {
        const fullKey = k.startsWith('label_') ? k : `label_${k}`;
        if (!c[fullKey]) c[fullKey] = v;
      }
    }
    if (c.units) {
      for (const [k, v] of Object.entries(c.units)) {
        let fullKey = k.startsWith('unit_') ? k : `unit_${k}`;
        if (k === 'collector') fullKey = 'unit_kol';
        if (k === 'flow_temp' || k === 'flow_temperature') fullKey = 'unit_vl';
        if (k === 'return_temp' || k === 'return_temperature') fullKey = 'unit_rl';
        if (k === 'tank_top') fullKey = 'unit_sp_oben';
        if (k === 'tank_middle') fullKey = 'unit_sp_mitte';
        if (k === 'tank_bottom') fullKey = 'unit_sp_unten';
        if (k === 'pressure') fullKey = 'unit_press';
        if (!c[fullKey]) c[fullKey] = v;
      }
    }
    if (c.show_header === undefined) c.show_header = true;
    if (c.show_header_title === undefined) c.show_header_title = true;
    if (c.show_header_icon === undefined) c.show_header_icon = true;
    if (c.show_header_badge === undefined) c.show_header_badge = true;
    if (!c.header_badge) c.header_badge = 'pump';
    c.pipe_height = c.pipe_height !== undefined ? Number(c.pipe_height) : 30;
    c.tank_height = c.tank_height !== undefined ? Number(c.tank_height) : 120;
    c.tank_return_height = c.tank_return_height ?? c.speicher_rl_height ?? 0;
    c.tank_flow_height = c.tank_flow_height ?? c.speicher_vl_height ?? 0;
    if (Array.isArray(config.kpis) && config.kpis.length > 0) {
      c.kpis = config.kpis.map(k => ({ ...k }));
    } else {
      c.kpis = this._getDefaultKpiList(c);
    }
    this._config = c;
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
    if (this._haForm) {
      this._haForm.hass = hass;
    }
    if (this._kpiContainer) {
      this._kpiContainer.querySelectorAll('ha-entity-picker').forEach(p => {
        p.hass = hass;
      });
    }
    const newLang = this._getLanguage();
    if (newLang !== this._currentLang) {
      this._currentLang = newLang;
      if (this._haForm) {
        this._haForm.schema = this._getSchema(newLang);
      }
      this._renderKpiManager();
    }
  }

  _render() {
    if (!this.shadowRoot) return;
    const lang = this._getLanguage();
    this._currentLang = lang;
    if (!this._haForm) {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
          }
          ha-form {
            display: block;
            margin-bottom: 20px;
          }
          .kpi-manager {
            margin-top: 16px;
            border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
            border-radius: 12px;
            background: var(--ha-card-background, var(--card-background-color, rgba(255, 255, 255, 0.02)));
            overflow: hidden;
          }
          .kpi-mgr-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 16px;
            background: var(--secondary-background-color, rgba(255, 255, 255, 0.04));
            border-bottom: 1px solid var(--divider-color, rgba(255, 255, 255, 0.08));
          }
          .kpi-mgr-title {
            font-size: 15px;
            font-weight: 600;
            color: var(--primary-text-color, #f8fafc);
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .kpi-mgr-count {
            font-size: 12px;
            background: var(--primary-color, #3b82f6);
            color: #ffffff;
            border-radius: 10px;
            padding: 1px 8px;
            font-weight: 700;
          }
          .kpi-list {
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .kpi-card {
            border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.1));
            border-radius: 8px;
            background: var(--card-background-color, rgba(0, 0, 0, 0.15));
            overflow: hidden;
            transition: border-color 0.2s;
          }
          .kpi-card:hover {
            border-color: var(--primary-color, #3b82f6);
          }
          .kpi-card-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 12px;
            background: rgba(255, 255, 255, 0.02);
            border-bottom: 1px solid var(--divider-color, rgba(255, 255, 255, 0.06));
            user-select: none;
          }
          .kpi-card-title-group {
            display: flex;
            align-items: center;
            gap: 8px;
            flex: 1 1 auto;
            min-width: 0;
            cursor: pointer;
          }
          .kpi-card-badge {
            font-size: 11px;
            font-weight: 700;
            color: var(--secondary-text-color, #94a3b8);
          }
          .kpi-card-title {
            font-size: 13.5px;
            font-weight: 600;
            color: var(--primary-text-color, #f8fafc);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .kpi-card-sub {
            font-size: 11.5px;
            color: var(--secondary-text-color, #64748b);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .kpi-card-actions {
            display: flex;
            align-items: center;
            gap: 4px;
            flex: 0 0 auto;
          }
          .kpi-btn-action {
            background: transparent;
            border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.15));
            border-radius: 6px;
            color: var(--primary-text-color, #f8fafc);
            cursor: pointer;
            padding: 4px 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.15s;
          }
          .kpi-btn-action:hover:not([disabled]) {
            background: rgba(255, 255, 255, 0.1);
          }
          .kpi-btn-action[disabled] {
            opacity: 0.3;
            cursor: not-allowed;
          }
          .kpi-btn-action.delete {
            color: #ef4444;
            border-color: rgba(239, 68, 68, 0.3);
          }
          .kpi-btn-action.delete:hover {
            background: rgba(239, 68, 68, 0.15);
          }
          .kpi-card-body {
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .kpi-field {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          .kpi-field-row {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 8px;
          }
          @media (max-width: 480px) {
            .kpi-field-row {
              grid-template-columns: 1fr;
            }
          }
          .kpi-field-label {
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: var(--secondary-text-color, #94a3b8);
          }
          .kpi-input {
            background: var(--input-fill-color, rgba(255, 255, 255, 0.05));
            border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.18));
            border-radius: 6px;
            padding: 8px 10px;
            color: var(--primary-text-color, #f8fafc);
            font-size: 13px;
            outline: none;
            width: 100%;
            box-sizing: border-box;
            transition: border-color 0.15s;
          }
          .kpi-input:focus {
            border-color: var(--primary-color, #3b82f6);
          }
          .kpi-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 16px;
            border-top: 1px solid var(--divider-color, rgba(255, 255, 255, 0.08));
            background: var(--secondary-background-color, rgba(255, 255, 255, 0.02));
            flex-wrap: wrap;
            gap: 8px;
          }
          .btn-add-kpi {
            background: var(--primary-color, #3b82f6);
            color: #ffffff;
            border: none;
            border-radius: 8px;
            padding: 9px 16px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 6px;
            transition: opacity 0.15s;
          }
          .btn-add-kpi:hover {
            opacity: 0.9;
          }
          .btn-reset-kpi {
            background: transparent;
            border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.2));
            color: var(--secondary-text-color, #94a3b8);
            border-radius: 8px;
            padding: 8px 14px;
            font-size: 12.5px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 6px;
            transition: all 0.15s;
          }
          .btn-reset-kpi:hover {
            background: rgba(255, 255, 255, 0.05);
            color: var(--primary-text-color, #f8fafc);
          }
        </style>
      `;
      this._haForm = document.createElement('ha-form');
      this._haForm.schema = this._getSchema(lang);
      this._haForm.computeLabel = (s) => s.label || s.name;
      this._haForm.addEventListener('value-changed', (ev) => {
        ev.stopPropagation();
        this._valueChanged(ev);
      });
      this.shadowRoot.appendChild(this._haForm);

      this._kpiContainer = document.createElement('div');
      this._kpiContainer.className = 'kpi-manager';
      this.shadowRoot.appendChild(this._kpiContainer);
    } else {
      this._haForm.schema = this._getSchema(lang);
    }
    this._haForm.hass = this._hass;
    this._haForm.data = this._config;
    this._renderKpiManager();
  }

  _renderKpiManager() {
    if (!this._kpiContainer) return;
    const lang = this._getLanguage();
    const t = TRANSLATIONS[lang] || TRANSLATIONS.en;
    const c = this._config || {};
    const kpis = Array.isArray(c.kpis) ? c.kpis : [];

    this._kpiContainer.innerHTML = `
      <div class="kpi-mgr-header">
        <div class="kpi-mgr-title">
          <ha-icon icon="mdi:view-grid-plus" style="--mdc-icon-size: 20px;"></ha-icon>
          <span>${t.editor_kpi_manager_title}</span>
          <span class="kpi-mgr-count">${kpis.length}</span>
        </div>
        <button type="button" class="btn-reset-kpi" id="btn-kpi-reset" title="${t.editor_kpi_btn_reset}">
          <ha-icon icon="mdi:restore" style="--mdc-icon-size: 16px;"></ha-icon>
          <span>${t.editor_kpi_btn_reset}</span>
        </button>
      </div>
      <div class="kpi-list" id="kpi-list"></div>
      <div class="kpi-footer">
        <button type="button" class="btn-add-kpi" id="btn-kpi-add">
          <ha-icon icon="mdi:plus" style="--mdc-icon-size: 18px;"></ha-icon>
          <span>${t.editor_kpi_btn_add}</span>
        </button>
      </div>
    `;

    const btnReset = this._kpiContainer.querySelector('#btn-kpi-reset');
    if (btnReset) btnReset.onclick = () => this._resetCustomKpis();

    const btnAdd = this._kpiContainer.querySelector('#btn-kpi-add');
    if (btnAdd) btnAdd.onclick = () => this._addKpiTile();

    const list = this._kpiContainer.querySelector('#kpi-list');
    kpis.forEach((kpi, idx) => {
      const cardEl = document.createElement('div');
      cardEl.className = 'kpi-card';

      const headerEl = document.createElement('div');
      headerEl.className = 'kpi-card-header';
      headerEl.innerHTML = `
        <div class="kpi-card-title-group" data-toggle="collapse">
          <ha-icon icon="mdi:drag-horizontal-variant" style="--mdc-icon-size: 18px; opacity: 0.5; cursor: grab;"></ha-icon>
          <span class="kpi-card-badge">#${idx + 1}</span>
          <span class="kpi-card-title">${kpi.label || kpi.id || ('Tile ' + (idx + 1))}</span>
          ${kpi.entity ? `<span class="kpi-card-sub">(${kpi.entity})</span>` : ''}
          <ha-icon icon="mdi:chevron-down" class="kpi-collapse-icon" style="--mdc-icon-size: 18px; margin-left: auto;"></ha-icon>
        </div>
        <div class="kpi-card-actions">
          <button type="button" class="kpi-btn-action" data-action="up" title="Move up" ${idx === 0 ? 'disabled' : ''}>
            <ha-icon icon="mdi:arrow-up" style="--mdc-icon-size: 16px;"></ha-icon>
          </button>
          <button type="button" class="kpi-btn-action" data-action="down" title="Move down" ${idx === kpis.length - 1 ? 'disabled' : ''}>
            <ha-icon icon="mdi:arrow-down" style="--mdc-icon-size: 16px;"></ha-icon>
          </button>
          <button type="button" class="kpi-btn-action delete" data-action="delete" title="Delete">
            <ha-icon icon="mdi:delete" style="--mdc-icon-size: 16px;"></ha-icon>
          </button>
        </div>
      `;

      headerEl.querySelector('[data-action="up"]')?.addEventListener('click', (e) => {
        e.stopPropagation();
        this._moveKpi(idx, -1);
      });
      headerEl.querySelector('[data-action="down"]')?.addEventListener('click', (e) => {
        e.stopPropagation();
        this._moveKpi(idx, 1);
      });
      headerEl.querySelector('[data-action="delete"]')?.addEventListener('click', (e) => {
        e.stopPropagation();
        this._deleteKpi(idx);
      });

      const bodyEl = document.createElement('div');
      bodyEl.className = 'kpi-card-body';

      // Toggle collapse
      headerEl.querySelector('[data-toggle="collapse"]')?.addEventListener('click', () => {
        const isCollapsed = bodyEl.style.display === 'none';
        bodyEl.style.display = isCollapsed ? 'flex' : 'none';
        const chevron = headerEl.querySelector('.kpi-collapse-icon');
        if (chevron) chevron.setAttribute('icon', isCollapsed ? 'mdi:chevron-down' : 'mdi:chevron-right');
      });

      // Entity Picker
      const entityField = document.createElement('div');
      entityField.className = 'kpi-field';
      const entityLabel = document.createElement('span');
      entityLabel.className = 'kpi-field-label';
      entityLabel.textContent = t.editor_kpi_entity;
      entityField.appendChild(entityLabel);

      const entityPicker = document.createElement('ha-entity-picker');
      entityPicker.hass = this._hass;
      entityPicker.value = kpi.entity || '';
      entityPicker.includeDomains = ['sensor'];
      entityPicker.allowCustomEntity = true;
      entityPicker.addEventListener('value-changed', (ev) => {
        ev.stopPropagation();
        kpi.entity = ev.detail.value;
        const sub = headerEl.querySelector('.kpi-card-sub');
        if (sub) sub.textContent = kpi.entity ? `(${kpi.entity})` : '';
        this._notifyConfigChanged();
      });
      entityField.appendChild(entityPicker);
      bodyEl.appendChild(entityField);

      // Row with Label, Unit, Color
      const rowEl = document.createElement('div');
      rowEl.className = 'kpi-field-row';

      // Label Input
      const labelField = document.createElement('div');
      labelField.className = 'kpi-field';
      labelField.innerHTML = `<span class="kpi-field-label">${t.editor_kpi_label}</span>`;
      const labelInput = document.createElement('input');
      labelInput.type = 'text';
      labelInput.className = 'kpi-input';
      labelInput.value = kpi.label || '';
      labelInput.addEventListener('input', (e) => {
        kpi.label = e.target.value;
        const titleEl = headerEl.querySelector('.kpi-card-title');
        if (titleEl) titleEl.textContent = kpi.label || kpi.id || ('Tile ' + (idx + 1));
      });
      labelInput.addEventListener('change', () => {
        this._notifyConfigChanged();
      });
      labelField.appendChild(labelInput);
      rowEl.appendChild(labelField);

      // Unit Input
      const unitField = document.createElement('div');
      unitField.className = 'kpi-field';
      unitField.innerHTML = `<span class="kpi-field-label">${t.editor_kpi_unit}</span>`;
      const unitInput = document.createElement('input');
      unitInput.type = 'text';
      unitInput.className = 'kpi-input';
      unitInput.placeholder = 'auto';
      unitInput.value = kpi.unit || '';
      unitInput.addEventListener('change', (e) => {
        kpi.unit = e.target.value;
        this._notifyConfigChanged();
      });
      unitField.appendChild(unitInput);
      rowEl.appendChild(unitField);

      // Color Input
      const colorField = document.createElement('div');
      colorField.className = 'kpi-field';
      colorField.innerHTML = `<span class="kpi-field-label">${t.editor_kpi_color}</span>`;
      const colorInput = document.createElement('input');
      colorInput.type = 'text';
      colorInput.className = 'kpi-input';
      colorInput.placeholder = 'auto (#hex)';
      colorInput.value = kpi.color || 'auto';
      colorInput.addEventListener('change', (e) => {
        kpi.color = e.target.value;
        this._notifyConfigChanged();
      });
      colorField.appendChild(colorInput);
      rowEl.appendChild(colorField);

      bodyEl.appendChild(rowEl);

      cardEl.appendChild(headerEl);
      cardEl.appendChild(bodyEl);
      list.appendChild(cardEl);
    });
  }

  _resetCustomKpis() {
    this._config.kpis = this._getDefaultKpiList(this._config);
    this._renderKpiManager();
    this._notifyConfigChanged();
  }

  _addKpiTile() {
    if (!Array.isArray(this._config.kpis)) this._config.kpis = [];
    this._config.kpis.push({
      id: 'kpi_' + Date.now().toString(36),
      entity: '',
      label: 'New KPI',
      unit: '',
      color: 'auto'
    });
    this._renderKpiManager();
    this._notifyConfigChanged();
  }

  _moveKpi(index, delta) {
    if (!Array.isArray(this._config.kpis)) return;
    const target = index + delta;
    if (target < 0 || target >= this._config.kpis.length) return;
    const item = this._config.kpis.splice(index, 1)[0];
    this._config.kpis.splice(target, 0, item);
    this._renderKpiManager();
    this._notifyConfigChanged();
  }

  _deleteKpi(index) {
    if (!Array.isArray(this._config.kpis)) return;
    this._config.kpis.splice(index, 1);
    this._renderKpiManager();
    this._notifyConfigChanged();
  }

  _notifyConfigChanged() {
    const cleaned = Object.assign({}, this._config);
    for (const key of Object.keys(cleaned)) {
      if (cleaned[key] === undefined || cleaned[key] === '') {
        delete cleaned[key];
      }
    }
    const event = new CustomEvent('config-changed', {
      detail: { config: cleaned },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  _valueChanged(ev) {
    if (!this._config || !this._hass) return;
    const oldLang = this._config.language;
    const currentKpis = this._config.kpis;
    this._config = Object.assign({}, this._config, ev.detail.value);
    if (currentKpis) {
      this._config.kpis = currentKpis;
    }
    this._notifyConfigChanged();
    if (this._haForm && this._config.language !== oldLang) {
      const newLang = this._getLanguage();
      this._haForm.schema = this._getSchema(newLang);
      this._renderKpiManager();
    }
  }
}

// Register custom element & editor (both thermal-solar-card and legacy alias solarthermie-flow-card)
if (!customElements.get('thermal-solar-card-editor')) {
  customElements.define('thermal-solar-card-editor', ThermalSolarCardEditor);
}
if (!customElements.get('thermal-solar-card')) {
  customElements.define('thermal-solar-card', ThermalSolarCard);
}
if (!customElements.get('solarthermie-flow-card')) {
  customElements.define('solarthermie-flow-card', class extends ThermalSolarCard {});
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'thermal-solar-card',
  name: 'Thermal Solar Card',
  description: 'Interactive evacuated tube thermal solar collector & stratified buffer tank card with real-time flow animation, multi-language support and visual UI editor',
  preview: true
});
