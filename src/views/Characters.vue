<template>
  <div class="characters">
    <ul class="characters-headers">
      <li v-for="header in headers" :key="header.id">{{ header }}</li>
    </ul>
    <Character
      v-for="character in charactersApi"
      :key="character.id"
      :photo="character.image"
      :characterID="character.id"
      :name="character.name"
      :gender="character.gender"
      :species="character.species"
      :lastEpisode="character.episode.length"
    />
    <!-- {{ charactersApi }} -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Character from "./Character.vue";
import { axiosInstance } from "../api/api";
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
  mounted(): void {
    axiosInstance
      .get("character")
      .then((res: any) => (this.charactersApi = res.data.results));
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
