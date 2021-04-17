import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import store from "./index";
import { CharactersApiI, FavoritesI } from "../models/models";

@Module({ namespaced: true })
class Favorites extends VuexModule {
  favorites: FavoritesI[] = [];
  loading = true;

  get getFavoriteCharacters(): FavoritesI[] {
    return this.favorites;
  }

  get getLoading(): boolean {
    return this.loading;
  }

  @Mutation
  deleteFavorite(id: string): void {
    this.favorites = this.favorites.filter((x) => x.id != id);
    store.dispatch("loadFavoritesToLocalStorage");
    console.log(this.favorites);
  }
  @Mutation
  addFavorite(character: CharactersApiI): void {
    this.favorites.push(character);
    this.favorites = [...new Set(this.favorites)];
    store.dispatch("loadFavoritesToLocalStorage");
    console.log(this.favorites);
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

  @Action
  fetchFavorites(): void {
    const favorites: FavoritesI[] = JSON.parse(
      localStorage.getItem("favorites") || ""
    );
    this.context.commit("loadFavorites", favorites);
    this.context.commit('loadingOff');
  }
}

export default Favorites;
