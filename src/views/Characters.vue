<template>
  <div class="characters">
    <ul class="characters-headers">
      <li v-for="header in headers" :key="header.id">{{ header }}</li>
    </ul>
    <div class="loading" v-if="loading">Loading, please wait..</div>
    <div class="error" v-if="error">
      Unexpected error, please try again later!
    </div>
    <!-- dummy input which gets data from characters.ts module and filters characters if v-for="character in resultSearching"--->
    <!-- <input class="form-control" type="text" placeholder="Search" :value="searchPhrase"/> -->
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
import { Getter } from "vuex-class";
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
  currentPage = 1;
  itemsPerPage = 5;
  resultCount = 0;
  // get resultSearching(): CharactersApiI[] {
  //   return this.characters.filter((character) => {
  //     return character.name
  //       .toLowerCase()
  //       .match(this.searchPhrase.toLowerCase());
  //   });
  // }
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
