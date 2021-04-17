import store from "../store/index";

export function loadFavoritesToLocalStorage(): void {
  localStorage.setItem(
    "favorites",
    JSON.stringify(store.state.favorites.favorites)
  );
}
