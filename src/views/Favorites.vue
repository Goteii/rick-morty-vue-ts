<template>
  <div class="favorites">
    <ul class="favorites__headers">
      <li v-for="header in headers" :key="header.id">{{ header }}</li>
    </ul>
    <!-- <div class="favorites__loading" v-if="loading">
      You don't have any favorite character :(
    </div> -->
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
import Pagination from "../components/Pagination.vue";
import { FavoritesI } from "../models/models";
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
@import "../styles/styles.scss";
.favorites {
  position: relative;
  background-color: $bg-color-dark-opacity;

  .favorites__headers {
    @include headers;
  }

  // .favorites__loading {
  //   @include loading;
  // }
}

@media (max-width: 5200px) {
  .favorites {
    .favorites__headers {
      width: 90%;
      justify-content: space-around;
      font-size: $font-retina-large;
    }
  }
}
@media (max-width: 4200px) {
  .favorites {
    .favorites__headers {
      width: 87.5%;
      font-size: $font-retina-regular;
    }
  }
}
@media (max-width: 3500px) {
  .favorites {
    .favorites__headers {
      width: 85%;
      font-size: $font-retina-small;
    }
  }
}
@media (max-width: 2560px) {
  .favorites {
    .favorites__headers {
      width: 80%;
      font-size: $font-desktop-regular;
    }
  }
}

@media (max-width: 1024px) {
  .favorites {
    .favorites__headers {
      font-size: $font-desktop-small;
      width: 85%;
    }
  }
}
@media (max-width: 768px) {
  .favorites {
    .favorites__headers {
      width: 100%;
      font-size: $font-tablet-regular;
    }
  }
}
@media (max-width: 480px) {
  .favorites__ {
    .favorites__headers {
      justify-content: space-between;
      font-size: $font-mobile-regular;
    }
  }
}
</style>
