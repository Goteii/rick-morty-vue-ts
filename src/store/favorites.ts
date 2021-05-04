import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import store from "./index";
import { CharactersApiI, FavoritesI } from "../models/models";

@Module({ namespaced: true })
class Favorites extends VuexModule {
  favorites: FavoritesI[] = [];
  loading = true;
  searchPhrase = "";

  get getFavoriteCharacters(): FavoritesI[] {
    return this.favorites;
  }

  get getLoading(): boolean {
    return this.loading;
  }

  get getSearchPhrase(): string {
    return this.searchPhrase;
  }

  @Mutation
  deleteFavorite(id: string): void {
    this.favorites = this.favorites.filter((x) => x.id != id);
    store.dispatch("loadFavoritesToLocalStorage");
  }
  @Mutation
  addFavorite(character: CharactersApiI): void {
    this.favorites.push(character);
    this.favorites = [...new Set(this.favorites)];
  }

  @Mutation
  loadFavorites(favorites: FavoritesI[]): void {
    this.favorites = favorites;
  }

  @Mutation
  loadingOff(): void {
    if (this.favorites.length > 0) {
      this.loading = false;
    } else {
      this.loading = true;
    }
  }

  @Mutation
  updateFavMessage(e: { target: { value: string } }): void {
    this.searchPhrase = e.target.value;
  }

  @Mutation
  resultSearching(newValue: string): CharactersApiI[] {
    this.searchPhrase = newValue;
    return this.favorites.filter((character) => {
      return character.name
        .toLowerCase()
        .match(this.searchPhrase.toLowerCase());
    });
  }

  @Action
  setResultSearching(newValue: string): void {
    this.context.commit("resultSearching", newValue);
  }

  @Action
  updateLocalStorageFavorites(): void {
    const updatedStoreFavorites = this.context.getters['getFavoriteCharacters'];
    const favoritesJson = JSON.stringify(updatedStoreFavorites);
    localStorage.setItem('favorites', favoritesJson);
  }

  @Action
  addCharacterToFav(character: CharactersApiI): void {
    this.context.commit('addFavorite', character);
    this.context.dispatch('updateLocalStorageFavorites');
  }

  @Action
  fetchFavorites(): void {
    const favorites: FavoritesI[] = JSON.parse(
      localStorage.getItem("favorites") || ""
    );
    this.context.commit("loadFavorites", favorites);
    this.context.commit("loadingOff");
  }
}

export default Favorites;
