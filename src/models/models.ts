export interface CharactersApiI {
  image: string;
  id: string;
  name: string;
  gender: string;
  species: string;
  episode: object[];
}

export type FavoritesI = CharactersApiI;
