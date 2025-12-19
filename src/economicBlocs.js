// Data structure for economic blocs
// Each bloc has: name, countries (ISO 2-letter codes), year founded, and economic stats
export const economicBlocs = {
  EU: {
    name: "European Union",
    founded: 1993,
    gdp: "17.9 trillion USD",
    population: "447 million",
    countries: ['de', 'fr', 'it', 'es', 'pl', 'ro', 'nl', 'be', 'cz', 'pt', 
                'gr', 'hu', 'se', 'at', 'bg', 'dk', 'fi', 'sk', 'ie', 'hr',
                'lt', 'si', 'lv', 'ee', 'cy', 'lu', 'mt']
  },
  ASEAN: {
    name: "Association of Southeast Asian Nations",
    founded: 1967,
    gdp: "3.6 trillion USD",
    population: "686 million",
    countries: ['id', 'th', 'ph', 'vn', 'my', 'sg', 'mm', 'kh', 'la', 'bn']
  },
  USMCA: {
    name: "United States-Mexico-Canada Agreement",
    founded: 2020,
    gdp: "28.3 trillion USD",
    population: "500 million",
    countries: ['us', 'ca', 'mx']
  },
  MERCOSUR: {
    name: "Southern Common Market (Mercosur)",
    founded: 1991,
    gdp: "2.9 trillion USD",
    population: "295 million",
    countries: ['br', 'ar', 'uy', 'py']
  },
  AU: {
    name: "African Union",
    founded: 2002,
    gdp: "2.8 trillion USD",
    population: "1.4 billion",
    countries: ['dz', 'ao', 'bj', 'bw', 'bf', 'bi', 'cm', 'cv', 'cf', 'td', 
                'km', 'cg', 'cd', 'ci', 'dj', 'eg', 'gq', 'er', 'et', 'ga',
                'gm', 'gh', 'gn', 'gw', 'ke', 'ls', 'lr', 'ly', 'mg', 'mw',
                'ml', 'mr', 'mu', 'ma', 'mz', 'na', 'ne', 'ng', 'rw', 'st',
                'sn', 'sc', 'sl', 'so', 'za', 'ss', 'sd', 'sz', 'tz', 'tg',
                'tn', 'ug', 'zm', 'zw']
  },
  GCC: {
    name: "Gulf Cooperation Council",
    founded: 1981,
    gdp: "2.1 trillion USD",
    population: "59 million",
    countries: ['sa', 'ae', 'kw', 'om', 'qa', 'bh']
  },
  SAARC: {
    name: "South Asian Association for Regional Cooperation",
    founded: 1985,
    gdp: "4.3 trillion USD",
    population: "1.9 billion",
    countries: ['in', 'pk', 'bd', 'lk', 'np', 'bt', 'mv', 'af']
  },
  EAEU: {
    name: "Eurasian Economic Union",
    founded: 2015,
    gdp: "2.4 trillion USD",
    population: "184 million",
    countries: ['ru', 'kz', 'by', 'am', 'kg']
  },
  EFTA: {
    name: "European Free Trade Association",
    founded: 1960,
    gdp: "1.1 trillion USD",
    population: "14 million",
    countries: ['no', 'ch', 'is', 'li']
  },
  CARICOM: {
    name: "Caribbean Community",
    founded: 1973,
    gdp: "98 billion USD",
    population: "18 million",
    countries: ['jm', 'tt', 'gy', 'bb', 'bs', 'bz', 'ag', 'dm', 'gd', 'kn',
                'lc', 'vc', 'sr', 'ht']
  },
  ECOWAS: {
    name: "Economic Community of West African States",
    founded: 1975,
    gdp: "784 billion USD",
    population: "424 million",
    countries: ['ng', 'gh', 'ci', 'sn', 'ml', 'bf', 'ne', 'gn', 'bj', 'tg',
                'sl', 'lr', 'gm', 'gw', 'cv']
  },
  SADC: {
    name: "Southern African Development Community",
    founded: 1980,
    gdp: "742 billion USD",
    population: "365 million",
    countries: ['za', 'ao', 'bw', 'cd', 'ls', 'mg', 'mw', 'mu', 'mz', 'na',
                'sc', 'sz', 'tz', 'zm', 'zw', 'km']
  },
  EAC: {
    name: "East African Community",
    founded: 2000,
    gdp: "305 billion USD",
    population: "300 million",
    countries: ['ke', 'tz', 'ug', 'rw', 'bi', 'ss', 'cd']
  },
  PACIFIC_ALLIANCE: {
    name: "Pacific Alliance",
    founded: 2012,
    gdp: "3.2 trillion USD",
    population: "235 million",
    countries: ['mx', 'co', 'pe', 'cl']
  },
  ARAB_LEAGUE: {
    name: "Arab League",
    founded: 1945,
    gdp: "3.1 trillion USD",
    population: "456 million",
    countries: ['eg', 'dz', 'sd', 'iq', 'ma', 'sa', 'ye', 'sy', 'tn', 'so',
                'jo', 'ae', 'ly', 'lb', 'om', 'kw', 'mr', 'qa', 'bh', 'dj',
                'km', 'ps']
  },
  BRICS: {
    name: "BRICS",
    founded: 2009,
    gdp: "28.5 trillion USD",
    population: "3.5 billion",
    countries: ['br', 'ru', 'in', 'cn', 'za', 'eg', 'et', 'ir', 'ae', 'sa']
  },
  CEFTA: {
    name: "Central European Free Trade Agreement",
    founded: 1992,
    gdp: "282 billion USD",
    population: "28 million",
    countries: ['al', 'ba', 'md', 'me', 'mk', 'rs', 'xk']
  },
  CIS: {
    name: "Commonwealth of Independent States",
    founded: 1991,
    gdp: "2.6 trillion USD",
    population: "240 million",
    countries: ['ru', 'kz', 'by', 'am', 'az', 'kg', 'md', 'tj', 'uz']
  },
  GUAM: {
    name: "Organization for Democracy and Economic Development",
    founded: 1997,
    gdp: "640 billion USD",
    population: "93 million",
    countries: ['ge', 'ua', 'az', 'md']
  },
  ANDEAN_COMMUNITY: {
    name: "Andean Community",
    founded: 1969,
    gdp: "1.0 trillion USD",
    population: "113 million",
    countries: ['bo', 'co', 'ec', 'pe']
  },
  CAFTA_DR: {
    name: "Central America-Dominican Republic Free Trade Agreement",
    founded: 2006,
    gdp: "28.6 trillion USD",
    population: "550 million",
    countries: ['cr', 'do', 'sv', 'gt', 'hn', 'ni', 'us']
  },
  CACM: {
    name: "Central American Common Market",
    founded: 1960,
    gdp: "320 billion USD",
    population: "50 million",
    countries: ['cr', 'sv', 'gt', 'hn', 'ni']
  },
  SICA: {
    name: "Central American Integration System",
    founded: 1991,
    gdp: "425 billion USD",
    population: "60 million",
    countries: ['bz', 'cr', 'do', 'sv', 'gt', 'hn', 'ni', 'pa']
  },
  ALBA: {
    name: "Bolivarian Alliance for the Americas",
    founded: 2004,
    gdp: "450 billion USD",
    population: "75 million",
    countries: ['ag', 'bo', 'cu', 'dm', 'gd', 'ni', 'kn', 'lc', 'vc', 've']
  },
  OECS: {
    name: "Organisation of Eastern Caribbean States",
    founded: 1981,
    gdp: "11 billion USD",
    population: "634,000",
    countries: ['ag', 'dm', 'gd', 'kn', 'lc', 'vc']
  },
  RCEP: {
    name: "Regional Comprehensive Economic Partnership",
    founded: 2022,
    gdp: "26.3 trillion USD",
    population: "2.3 billion",
    countries: ['au', 'bn', 'kh', 'cn', 'id', 'jp', 'kr', 'la', 'my', 'mm',
                'nz', 'ph', 'sg', 'th', 'vn']
  },
  CPTPP: {
    name: "Comprehensive and Progressive Trans-Pacific Partnership",
    founded: 2018,
    gdp: "13.5 trillion USD",
    population: "510 million",
    countries: ['au', 'bn', 'ca', 'cl', 'jp', 'my', 'mx', 'nz', 'pe', 'sg', 'vn']
  },
  APEC: {
    name: "Asia-Pacific Economic Cooperation",
    founded: 1989,
    gdp: "62 trillion USD",
    population: "2.9 billion",
    countries: ['au', 'bn', 'ca', 'cl', 'cn', 'hk', 'id', 'jp', 'kr', 'my',
                'mx', 'nz', 'pg', 'pe', 'ph', 'ru', 'sg', 'tw', 'th', 'us', 'vn']
  },
  BIMSTEC: {
    name: "Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation",
    founded: 1997,
    gdp: "4.5 trillion USD",
    population: "1.7 billion",
    countries: ['bd', 'bt', 'in', 'mm', 'np', 'lk', 'th']
  },
  ECO: {
    name: "Economic Cooperation Organization",
    founded: 1985,
    gdp: "4.2 trillion USD",
    population: "510 million",
    countries: ['af', 'az', 'ir', 'kz', 'kg', 'pk', 'tj', 'tr', 'tm', 'uz']
  },
  SCO: {
    name: "Shanghai Cooperation Organisation",
    founded: 2001,
    gdp: "23.3 trillion USD",
    population: "3.2 billion",
    countries: ['cn', 'in', 'kz', 'kg', 'pk', 'ru', 'tj', 'uz', 'ir']
  },
  APTA: {
    name: "Asia-Pacific Trade Agreement",
    founded: 1975,
    gdp: "23 trillion USD",
    population: "3 billion",
    countries: ['bd', 'cn', 'in', 'kr', 'la', 'lk']
  },
  MSG: {
    name: "Melanesian Spearhead Group",
    founded: 1988,
    gdp: "42 billion USD",
    population: "12 million",
    countries: ['fj', 'pg', 'sb', 'vu']
  },
  PIF: {
    name: "Pacific Islands Forum",
    founded: 1971,
    gdp: "220 billion USD",
    population: "15 million",
    countries: ['au', 'ck', 'fj', 'fm', 'ki', 'mh', 'nr', 'nu', 'nz', 'pw',
                'pg', 'ws', 'sb', 'tk', 'to', 'tv', 'vu']
  },
  UEMOA: {
    name: "West African Economic and Monetary Union",
    founded: 1994,
    gdp: "192 billion USD",
    population: "133 million",
    countries: ['bj', 'bf', 'ci', 'gw', 'ml', 'ne', 'sn', 'tg']
  },
  CEMAC: {
    name: "Economic and Monetary Community of Central Africa",
    founded: 1994,
    gdp: "115 billion USD",
    population: "58 million",
    countries: ['cm', 'cf', 'td', 'cg', 'gq', 'ga']
  },
  COMESA: {
    name: "Common Market for Eastern and Southern Africa",
    founded: 1994,
    gdp: "805 billion USD",
    population: "583 million",
    countries: ['bi', 'km', 'cd', 'dj', 'eg', 'er', 'sz', 'et', 'ke', 'ly',
                'mg', 'mw', 'mu', 'rw', 'sc', 'so', 'sd', 'tn', 'ug', 'zm', 'zw']
  },
  IGAD: {
    name: "Intergovernmental Authority on Development",
    founded: 1996,
    gdp: "445 billion USD",
    population: "283 million",
    countries: ['dj', 'er', 'et', 'ke', 'so', 'ss', 'sd', 'ug']
  },
  SACU: {
    name: "Southern African Customs Union",
    founded: 1910,
    gdp: "418 billion USD",
    population: "68 million",
    countries: ['bw', 'sz', 'ls', 'na', 'za']
  },
  AMU: {
    name: "Arab Maghreb Union",
    founded: 1989,
    gdp: "685 billion USD",
    population: "105 million",
    countries: ['dz', 'ly', 'mr', 'ma', 'tn']
  },
  ECCAS: {
    name: "Economic Community of Central African States",
    founded: 1983,
    gdp: "188 billion USD",
    population: "200 million",
    countries: ['ao', 'bi', 'cm', 'cf', 'td', 'cd', 'cg', 'gq', 'ga', 'rw', 'st']
  },
  ACC: {
    name: "Arab Cooperation Council",
    founded: 1989,
    gdp: "2.8 trillion USD",
    population: "150 million",
    countries: ['bh', 'kw', 'om', 'qa', 'sa', 'ae', 'iq', 'jo', 'ye']
  },
  COMMONWEALTH: {
    name: "Commonwealth of Nations",
    founded: 1931,
    gdp: "15 trillion USD",
    population: "2.6 billion",
    countries: ['ag', 'au', 'bs', 'bd', 'bb', 'bz', 'bw', 'bn', 'cm', 'ca',
                'cy', 'dm', 'fj', 'gm', 'gh', 'gd', 'gy', 'in', 'jm', 'ke',
                'ki', 'ls', 'mw', 'my', 'mv', 'mt', 'mu', 'mz', 'na', 'nr',
                'nz', 'ng', 'pk', 'pg', 'rw', 'kn', 'lc', 'vc', 'ws', 'sc',
                'sl', 'sg', 'sb', 'za', 'lk', 'sz', 'tz', 'to', 'tt', 'tv',
                'ug', 'gb', 'vu', 'zm']
  },
  G7: {
    name: "Group of Seven",
    founded: 1975,
    gdp: "46 trillion USD",
    population: "777 million",
    countries: ['ca', 'fr', 'de', 'it', 'jp', 'gb', 'us']
  },
  G20: {
    name: "Group of Twenty",
    founded: 1999,
    gdp: "85 trillion USD",
    population: "4.6 billion",
    countries: ['ar', 'au', 'br', 'ca', 'cn', 'fr', 'de', 'in', 'id', 'it',
                'jp', 'mx', 'ru', 'sa', 'za', 'kr', 'tr', 'gb', 'us']
  },
  OECD: {
    name: "Organisation for Economic Co-operation and Development",
    founded: 1961,
    gdp: "60 trillion USD",
    population: "1.4 billion",
    countries: ['au', 'at', 'be', 'ca', 'cl', 'co', 'cr', 'cz', 'dk', 'ee',
                'fi', 'fr', 'de', 'gr', 'hu', 'is', 'ie', 'il', 'it', 'jp',
                'kr', 'lv', 'lt', 'lu', 'mx', 'nl', 'nz', 'no', 'pl', 'pt',
                'sk', 'si', 'es', 'se', 'ch', 'tr', 'gb', 'us']
  },
  AFCFTA: {
    name: "African Continental Free Trade Area",
    founded: 2021,
    gdp: "3.4 trillion USD",
    population: "1.4 billion",
    countries: ['dz', 'ao', 'bj', 'bw', 'bf', 'bi', 'cv', 'cm', 'cf', 'td', 
                'km', 'cg', 'cd', 'ci', 'dj', 'eg', 'gq', 'er', 'sz', 'et',
                'ga', 'gm', 'gh', 'gn', 'gw', 'ke', 'ls', 'lr', 'ly', 'mg',
                'mw', 'ml', 'mr', 'mu', 'ma', 'mz', 'na', 'ne', 'ng', 'rw',
                'st', 'sn', 'sc', 'sl', 'so', 'za', 'ss', 'sd', 'tz', 'tg',
                'tn', 'ug', 'zm', 'zw']
  },
  UNASUR: {
    name: "Union of South American Nations",
    founded: 2008,
    gdp: "4.2 trillion USD",
    population: "430 million",
    countries: ['ar', 'bo', 'br', 'cl', 'co', 'ec', 'gy', 'pe', 'py', 'sr', 'uy', 've']
  }
};