import Vue from "vue";
import Vuex from "vuex";
import Favorites from "./favorites";
import Characters from "./characters";

import { loadFavoritesToLocalStorage } from "../utils/utils";

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    loadFavoritesToLocalStorage() {
      if (localStorage.getItem("continents")) {
        loadFavoritesToLocalStorage();
      }
    },
  },
  modules: {
    favorites: Favorites,
    characters: Characters,
  },
});
