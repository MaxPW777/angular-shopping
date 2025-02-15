export interface PokemonCard {
  id: string;
  nom: string;
  numero: string;
  image: string;
  hp: string;
  attaque: { name: string; damage: string }[];
  type: string[];
  rareté: string;
  prixMoyen: number;
  nomEvolution?: string;
  isFavorite: boolean;
  inCart: boolean;
}
