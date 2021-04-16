<template>
  <div class="characters">
    <ul class="characters-headers">
      <li v-for="header in headers" :key="header.id">{{ header }}</li>
    </ul>
    <div class="loading" v-if="loading">Loading, please wait..</div>
    <div class="error" v-if="error">
      Unexpected error, please try again later!
    </div>
    <Character
      v-for="character in charactersApi"
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
import Character from "./Character.vue";
import axios from "axios";
@Component({
  components: {
    Character,
  },
})
export default class Characters extends Vue {
  headers = [
    "Photo",
    "Character ID",
    "Name",
    "Gender",
    "Species",
    "Last Episode",
    "Add To Favorites",
  ];
  charactersApi = [];
  loading = true;
  error = false;
  // currentPage = 1;
  // charactersOnPage = 8;
  // indexOfLastCharacter = this.currentPage * this.charactersOnPage;
  // indexOfFirstCharacter = this.indexOfLastCharacter - this.charactersOnPage;
  // currentCharacters = [];
  // currentPageNumber(pageNumber: number): void {
  //   this.currentPage = pageNumber;
  // }
  async created(): Promise<void> {
    try {
      let result = await axios({
        method: "POST",
        url: "https://rickandmortyapi.com/graphql",
        data: {
          query: `
          {
            characters {
            results {
              name
              id
              gender
              species
              image
              episode {
                episode
              }
              }
            }
          }
          `,
        },
      });
      this.charactersApi = result.data.data.characters.results;
    } catch (e) {
      console.error(e);
      this.error = true;
      this.loading = false;
    } finally {
      this.loading = false;
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
