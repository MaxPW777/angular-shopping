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
  isFavorite: boolean;
  inCart: boolean;
}
