<template>
  <div class="characters">
    <ul class="characters-headers">
      <li v-for="header in headers" :key="header.id">{{ header }}</li>
    </ul>
    <div class="loading" v-if="loading">
      You don't have any favorite character :(
    </div>
    <Favorite
      v-for="character in favorites"
      :key="character.id"
      :photo="character.image"
      :characterID="character.id"
      :name="character.name"
      :gender="character.gender"
      :species="character.species"
      :lastEpisode="character.episode[character.episode.length - 1].episode"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import Favorite from "./Favorite.vue";
import { FavoritesI } from "../models/models";
@Component({
  components: {
    Favorite,
  },
})
export default class Characters extends Vue {
  @Getter("favorites/getFavoriteCharacters") favorites!: FavoritesI[];
  @Getter("favorites/getLoading") loading!: boolean;
  @Action("favorites/fetchFavorites") fetchFavorites!: () => void;
  headers = [
    "Photo",
    "Character ID",
    "Name",
    "Gender",
    "Species",
    "Last Episode",
    "Add To Favorites",
  ];
  mounted(): void {
    this.fetchFavorites();
  }
  // currentPage = 1;
  // charactersOnPage = 8;
  // indexOfLastCharacter = this.currentPage * this.charactersOnPage;
  // indexOfFirstCharacter = this.indexOfLastCharacter - this.charactersOnPage;
  // currentCharacters = [];
  // currentPageNumber(pageNumber: number): void {
  //   this.currentPage = pageNumber;
  // }
}
</script>

<style lang="scss" scoped>
.characters {
  position: relative;
  background-color: #e5eaf4;
  color: #a9b1bd;

  .characters-headers {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    color: #a9b1bd;
    padding: 1em;
    width: 80%;
    font-weight: 500;
  }

  .loading {
    background-color: #fcfcfc;
    display: flex;
    padding: 2em;
    justify-content: center;
    font-size: 20px;
    font-style: italic;
  }
  .error {
    background-color: #fcfcfc;
    display: flex;
    padding: 2em;
    justify-content: center;
    font-size: 20px;
    font-style: italic;
    color: red;
  }
}

@media (min-width: 1025px) {
  .characters {
    .characters-headers {
      width: 80%;
      justify-content: space-around;
      font-size: 16px;
    }
  }
}
@media (max-width: 1024px) {
  .characters {
    .characters-headers {
      width: 90%;
      justify-content: space-around;
      font-size: 12px;
    }
  }
}
@media (max-width: 768px) {
  .characters {
    .characters-headers {
      width: 100%;
      justify-content: space-around;
      font-size: 12px;
    }
  }
}
@media (max-width: 480px) {
  .characters {
    .characters-headers {
      width: 100%;
      justify-content: space-between;
      font-size: 8px;
    }
  }
}
</style>
