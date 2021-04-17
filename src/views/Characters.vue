<template>
  <div class="characters">
    <ul class="characters-headers">
      <li v-for="header in headers" :key="header.id">{{ header }}</li>
    </ul>
    <div class="loading" v-if="loading">Loading, please wait..</div>
    <div class="error" v-if="error">
      Unexpected error, please try again later!
    </div>
    <input
      class="form-control"
      type="text"
      v-model="searchPhrase"
      placeholder="Search"
    />
    <Character
      v-for="character in resultSearching"
      :key="character.id"
      :photo="character.image"
      :characterID="character.id"
      :name="character.name"
      :gender="character.gender"
      :species="character.species"
      :lastEpisode="character.episode[character.episode.length - 1].episode"
      :character="character"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Character from "./Character.vue";
import { CharactersApiI } from "@/models/models";
import { Getter } from "vuex-class";
@Component({
  components: {
    Character,
  },
})
export default class Characters extends Vue {
  @Getter("characters/getCharacters") characters!: CharactersApiI[];
  @Getter("characters/getLoading") loading!: boolean;
  @Getter("characters/getError") error!: boolean;
  // @Mutation("characters/resultSearching") resultSearching!: () => CharactersApiI[];
  // @Getter("characters/getSearchPhrase") searchPhrase!: string;
  @Getter("characters/getHeaders") headers!: string[];
  // @Action("characters/setResultSearching") setResultSearching!: (newValue: string) => void;
  searchPhrase = '';
  get resultSearching(): CharactersApiI[] {
    // return this.searchPhrase;
    return this.characters.filter((character) => {
      return character.name
        .toLowerCase()
        .match(this.searchPhrase.toLowerCase());
    });
  }
  // set resultSearching(newValue: string) {
  //   this.setResultSearching(newValue);
  // }

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
