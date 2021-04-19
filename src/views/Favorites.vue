<template>
  <div class="characters">
    <ul class="characters-headers">
      <li v-for="header in headers" :key="header.id">{{ header }}</li>
    </ul>
    <div class="loading" v-if="loading">
      You don't have any favorite character :(
    </div>
    <template v-if="favorites.length > 0">
      <Favorite
        v-for="character in paginate"
        :key="character.id"
        :photo="character.image"
        :characterID="character.id"
        :name="character.name"
        :gender="character.gender"
        :species="character.species"
        :lastEpisode="character.episode[character.episode.length - 1].episode"
      />
    </template>
    <Pagination
      :currentPage="currentPage"
      :itemsPerPage="itemsPerPage"
      :resultCount="resultCount"
      :totalPages="totalPages"
      @setPage="setPage"
      @changePage="changePage"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import Favorite from "./Favorite.vue";
import { FavoritesI } from "../models/models";
import Pagination from "../components/Pagination.vue";
@Component({
  components: {
    Favorite,
    Pagination,
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
  currentPage = 1;
  itemsPerPage = 5;
  resultCount = 0;

  get totalPages(): number {
    return Math.ceil(this.resultCount / this.itemsPerPage);
  }
  get paginate(): FavoritesI[] {
    this.resultCount = this.favorites.length;
    if (this.currentPage >= this.totalPages) {
      this.currentPage = this.totalPages;
    }
    const index = this.currentPage * this.itemsPerPage - this.itemsPerPage;
    return this.favorites.slice(index, index + this.itemsPerPage);
  }
  setPage(pageNumber: number): void {
    this.currentPage = pageNumber;
  }
  changePage(value: string): void {
    if (
      value === "next" &&
      this.currentPage < this.resultCount / this.itemsPerPage
    ) {
      this.currentPage = this.currentPage + 1;
    } else if (value === "previous" && this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
    } else {
      return;
    }
  }
}
</script>

<style lang="scss" scoped>
.characters {
  position: relative;
  background-color: #e5eaf4;

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

@media (max-width: 5200px) {
   .characters {
    .characters-headers {
      width: 90%;
       justify-content: space-around;
      font-size: 30px;
    }
  }
}
@media (max-width: 4200px) {
   .characters {
    .characters-headers {
      width: 87.5%;
      font-size: 25px;
    }
  }
}
@media (max-width: 3500px) {
   .characters {
    .characters-headers {
      width: 85%;
      font-size: 20px;
    }
  }
}
@media (max-width: 2560px) {
  .characters {
    .characters-headers {
      width: 80%;
      font-size: 16px;
    }
  }
}

@media (max-width: 1920px) {
  .characters {
    .characters-headers {
      width: 90%;
      font-size: 16px;
    }
  }
}
@media (max-width: 1024px) {
  .characters {
    .characters-headers {
      font-size: 12px;
    }
  }
}
@media (max-width: 768px) {
  .characters {
    .characters-headers {
      width: 100%;
    }
  }
}
@media (max-width: 480px) {
  .characters {
    .characters-headers {
      justify-content: space-between;
      font-size: 8px;
    }
  }
}
</style>
