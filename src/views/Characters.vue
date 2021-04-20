<template>
  <div class="characters">
    <ul class="characters__headers">
      <li v-for="header in headers" :key="header.id">{{ header }}</li>
    </ul>
    <div class="characters__loading" v-if="loading">Loading, please wait..</div>
    <div class="characters__error" v-if="error">
      Unexpected error, please try again later!
    </div>
    <!-- dummy input which gets data from characters.ts module and filters characters if v-for="character in resultSearching"--->
    <!-- <input
      class="form-control"
      type="text"
      placeholder="Search"
      :value="searchPhrase"
      @input="handleInput"
    /> -->
    <template v-if="characters.length > 0">
      <Character
        v-for="character in paginate"
        :key="character.id"
        :photo="character.image"
        :characterID="character.id"
        :name="character.name"
        :gender="character.gender"
        :species="character.species"
        :lastEpisode="character.episode[character.episode.length - 1].episode"
        :character="character"
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
import Character from "./Character.vue";
import { CharactersApiI } from "../models/models";
import Pagination from "../components/Pagination.vue";
import { Getter, Mutation } from "vuex-class";
@Component({
  components: {
    Character,
    Pagination,
  },
})
export default class Characters extends Vue {
  @Getter("characters/getCharacters") characters!: CharactersApiI[];
  @Getter("characters/getLoading") loading!: boolean;
  @Getter("characters/getError") error!: boolean;
  @Getter("characters/getSearchPhrase") searchPhrase!: string;
  @Getter("characters/getHeaders") headers!: string[];
  @Mutation("characters/updateMessage") updateMessage!: (e: {
    target: { value: string };
  }) => void;
  currentPage = 1;
  itemsPerPage = 5;
  resultCount = 0;
  get resultSearching(): CharactersApiI[] {
    return this.characters.filter((character) => {
      return character.name
        .toLowerCase()
        .match(this.searchPhrase.toLowerCase());
      // .match(this.$store.state.searchbar.searchPhrase.toLowerCase())
    });
  }
  get totalPages(): number {
    return Math.ceil(this.resultCount / this.itemsPerPage);
  }
  get paginate(): CharactersApiI[] {
    this.resultCount = this.characters.length;
    if (this.currentPage >= this.totalPages) {
      this.currentPage = this.totalPages;
    }
    const index = this.currentPage * this.itemsPerPage - this.itemsPerPage;
    return this.characters.slice(index, index + this.itemsPerPage);
  }
  handleInput(e: { target: { value: string } }): void {
    this.updateMessage(e);
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
.characters {
  position: relative;
  background-color: $bg-color-dark-opacity;

  .characters__headers {
    @include headers;
  }

  .characters__loading {
    @include loading;
  }
  .characters__error {
    @include error;
  }
}

@media (max-width: 5200px) {
  .characters {
    .characters__headers {
      width: 90%;
      justify-content: space-around;
      font-size: $font-retina-large;
    }
  }
}
@media (max-width: 4200px) {
  .characters {
    .characters__headers {
      width: 87.5%;
      font-size: $font-retina-regular;
    }
  }
}
@media (max-width: 3500px) {
  .characters {
    .characters__headers {
      width: 85%;
      font-size: $font-retina-small;
    }
  }
}
@media (max-width: 2560px) {
  .characters {
    .characters__headers {
      width: 80%;
      font-size: $font-desktop-regular;
    }
  }
}
@media (max-width: 1024px) {
  .characters {
    .characters__headers {
      width: 90%;
      font-size: $font-desktop-small;
    }
  }
}
@media (max-width: 768px) {
  .characters {
    .characters__headers {
      width: 100%;
      font-size: $font-tablet-regular;
    }
  }
}
@media (max-width: 480px) {
  .characters {
    .characters__headers {
      justify-content: space-between;
      font-size: $font-mobile-regular;
    }
  }
}
</style>
