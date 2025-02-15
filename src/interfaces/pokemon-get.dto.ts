export interface PokemonGetDto {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp: string;
  types: string[];
  evolvesTo?: string[];
  attacks: Attack[];
  weaknesses?: Weakness[];
  retreatCost?: string[];
  convertedRetreatCost?: number;
  set: CardSet;
  number: string;
  artist: string;
  rarity: string;
  nationalPokedexNumbers: number[];
  legalities: Legalities;
  images: CardImages;
  tcgplayer?: MarketData;
  cardmarket?: MarketData;
}

export interface Attack {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

export interface Weakness {
  type: string;
  value: string;
}

export interface CardSet {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: Legalities;
  releaseDate: string;
  updatedAt: string;
  images: SetImages;
}

export interface Legalities {
  unlimited?: string;
}

export interface SetImages {
  symbol: string;
  logo: string;
}

export interface CardImages {
  small: string;
  large: string;
}

export interface MarketData {
  url: string;
  updatedAt: string;
  prices: Prices;
}

export interface Prices {
  normal?: PriceDetails;
  averageSellPrice?: number;
  lowPrice?: number;
  trendPrice?: number;
  reverseHoloSell?: number;
  reverseHoloLow?: number;
  reverseHoloTrend?: number;
  lowPriceExPlus?: number;
  avg1?: number;
  avg7?: number;
  avg30?: number;
  reverseHoloAvg1?: number;
  reverseHoloAvg7?: number;
  reverseHoloAvg30?: number;
}

export interface PriceDetails {
  low?: number;
  mid?: number;
  high?: number;
  market?: number;
  directLow?: number | null;
}
