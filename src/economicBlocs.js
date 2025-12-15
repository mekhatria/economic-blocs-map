// Data structure for economic blocs
// Each bloc has: name, countries (ISO 2-letter codes), year founded, and economic stats
export const economicBlocs = {
  EU: {
    name: "European Union",
    founded: 1993,
    gdp: "17.9 trillion USD",
    population: "447 million",
    countries: ['DE', 'FR', 'IT', 'ES', 'PL', 'RO', 'NL', 'BE', 'CZ', 'PT', 
                'GR', 'HU', 'SE', 'AT', 'BG', 'DK', 'FI', 'SK', 'IE', 'HR',
                'LT', 'SI', 'LV', 'EE', 'CY', 'LU', 'MT']
  },
  ASEAN: {
    name: "Association of Southeast Asian Nations",
    founded: 1967,
    gdp: "3.6 trillion USD",
    population: "686 million",
    countries: ['ID', 'TH', 'PH', 'VN', 'MY', 'SG', 'MM', 'KH', 'LA', 'BN']
  },
  USMCA: {
    name: "United States-Mexico-Canada Agreement",
    founded: 2020,
    gdp: "28.3 trillion USD",
    population: "500 million",
    countries: ['US', 'CA', 'MX']
  },
  MERCOSUR: {
    name: "Southern Common Market (Mercosur)",
    founded: 1991,
    gdp: "2.9 trillion USD",
    population: "295 million",
    countries: ['BR', 'AR', 'UY', 'PY']
  },
  AU: {
    name: "African Union",
    founded: 2002,
    gdp: "2.8 trillion USD",
    population: "1.4 billion",
    countries: ['DZ', 'AO', 'BJ', 'BW', 'BF', 'BI', 'CM', 'CV', 'CF', 'TD', 
                'KM', 'CG', 'CD', 'CI', 'DJ', 'EG', 'GQ', 'ER', 'ET', 'GA',
                'GM', 'GH', 'GN', 'GW', 'KE', 'LS', 'LR', 'LY', 'MG', 'MW',
                'ML', 'MR', 'MU', 'MA', 'MZ', 'NA', 'NE', 'NG', 'RW', 'ST',
                'SN', 'SC', 'SL', 'SO', 'ZA', 'SS', 'SD', 'SZ', 'TZ', 'TG',
                'TN', 'UG', 'ZM', 'ZW']
  },
  GCC: {
    name: "Gulf Cooperation Council",
    founded: 1981,
    gdp: "2.1 trillion USD",
    population: "59 million",
    countries: ['SA', 'AE', 'KW', 'OM', 'QA', 'BH']
  },
  SAARC: {
    name: "South Asian Association for Regional Cooperation",
    founded: 1985,
    gdp: "4.3 trillion USD",
    population: "1.9 billion",
    countries: ['IN', 'PK', 'BD', 'LK', 'NP', 'BT', 'MV', 'AF']
  },
  EAEU: {
    name: "Eurasian Economic Union",
    founded: 2015,
    gdp: "2.4 trillion USD",
    population: "184 million",
    countries: ['RU', 'KZ', 'BY', 'AM', 'KG']
  },
  EFTA: {
    name: "European Free Trade Association",
    founded: 1960,
    gdp: "1.1 trillion USD",
    population: "14 million",
    countries: ['NO', 'CH', 'IS', 'LI']
  },
  CARICOM: {
    name: "Caribbean Community",
    founded: 1973,
    gdp: "98 billion USD",
    population: "18 million",
    countries: ['JM', 'TT', 'GY', 'BB', 'BS', 'BZ', 'AG', 'DM', 'GD', 'KN',
                'LC', 'VC', 'SR', 'HT']
  },
  ECOWAS: {
    name: "Economic Community of West African States",
    founded: 1975,
    gdp: "784 billion USD",
    population: "424 million",
    countries: ['NG', 'GH', 'CI', 'SN', 'ML', 'BF', 'NE', 'GN', 'BJ', 'TG',
                'SL', 'LR', 'GM', 'GW', 'CV']
  },
  SADC: {
    name: "Southern African Development Community",
    founded: 1980,
    gdp: "742 billion USD",
    population: "365 million",
    countries: ['ZA', 'AO', 'BW', 'CD', 'LS', 'MG', 'MW', 'MU', 'MZ', 'NA',
                'SC', 'SZ', 'TZ', 'ZM', 'ZW', 'KM']
  },
  EAC: {
    name: "East African Community",
    founded: 2000,
    gdp: "305 billion USD",
    population: "300 million",
    countries: ['KE', 'TZ', 'UG', 'RW', 'BI', 'SS', 'CD']
  },
  PACIFIC_ALLIANCE: {
    name: "Pacific Alliance",
    founded: 2012,
    gdp: "3.2 trillion USD",
    population: "235 million",
    countries: ['MX', 'CO', 'PE', 'CL']
  },
  ARAB_LEAGUE: {
    name: "Arab League",
    founded: 1945,
    gdp: "3.1 trillion USD",
    population: "456 million",
    countries: ['EG', 'DZ', 'SD', 'IQ', 'MA', 'SA', 'YE', 'SY', 'TN', 'SO',
                'JO', 'AE', 'LY', 'LB', 'OM', 'KW', 'MR', 'QA', 'BH', 'DJ',
                'KM', 'PS']
  },
  BRICS: {
    name: "BRICS",
    founded: 2009,
    gdp: "28.5 trillion USD",
    population: "3.5 billion",
    countries: ['BR', 'RU', 'IN', 'CN', 'ZA', 'EG', 'ET', 'IR', 'AE', 'SA']
  }
};