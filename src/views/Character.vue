<template>
  <div class="character">
    <ul class="character-values">
      <li>
        <img :src="photo" alt="rick" class="character-img" />
      </li>
      <li>{{ characterID }}</li>
      <li>{{ name }}</li>
      <li>
        <img
          v-if="gender === 'Male'"
          src="../assets/male.png"
          :alt="gender + '_icon'"
        />
        <img
          v-else-if="gender === 'Female'"
          src="../assets/female.png"
          :alt="gender + '_icon'"
        />
        <img
          v-else-if="gender === 'unknown'"
          src="../assets/unknown.png"
          :alt="gender + '_icon'"
        />
        <img v-else src="../assets/genderless.png" :alt="gender + '_icon'" />
        {{ gender }}
      </li>
      <li>{{ species }}</li>
      <li>{{ lastEpisode }}</li>
      <li>
        <button
          v-if="!isFavorite"
          class="favorite-btn"
          @click="
            addFavorite(character);
            toggle();
          "
        >
          <img src="../assets/blue-star.png" />
        </button>
        <button
          v-else
          class="favorite"
          @click="
            deleteFavorite(characterID);
            toggle();
          "
        >
          <img src="../assets/white-star.png" />
        </button>
      </li>
    </ul>
    <hr />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { FavoritesI } from "../models/models";
import { Mutation } from "vuex-class";
@Component({})
export default class Character extends Vue {
  @Mutation("favorites/addFavorite") addFavorite!: (
    character: FavoritesI
  ) => void;
  @Mutation("favorites/deleteFavorite") deleteFavorite!: (
    characterID: string
  ) => void;
  @Prop({ required: true, type: String }) readonly photo!: string;
  @Prop({ required: true, type: String }) readonly characterID!: string;
  @Prop({ required: true, type: String }) readonly name!: string;
  @Prop({ required: true, type: String }) readonly gender!: string;
  @Prop({ required: true, type: String }) readonly species!: string;
  @Prop({ required: true, type: String }) readonly lastEpisode!: string;
  @Prop({ required: true, type: Object }) readonly character!: FavoritesI;
  isFavorite = false;
  toggle(): void {
    this.isFavorite = !this.isFavorite;
    console.log(this.isFavorite);
  }
}
</script>

<style lang="scss" scoped>
.character {
  position: relative;
  background-color: #ffffff;

  .character-values {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    color: #a9b1bd;
    padding-bottom: 1em;
    align-items: center;

    li {
      flex: 1;
      display: flex;
      text-align: center;
    }

    .favorite-btn {
      border-color: #11b0c8;
      border-radius: 5px;
      border: 2px solid #11b0cb;
      cursor: pointer;
      background-color: #ffffff;

      img {
        display: flex;
      }
    }

    .favorite {
      border-radius: 5px;
      border-color: #11b0c8;
      background-color: #11b0c8;
      border: 2px solid #11b0cb;
      cursor: pointer;
      img {
        display: flex;
      }
    }
  }
  hr {
    height: 1px;
    background-color: #e5eaf4;
    border: none;
  }
}

@media (max-width: 5200px) {
  .character {
    .character-values {
      width: 87.5%;
      font-size: 30px;
      padding-top: 1em;
      height: 17.5vh;
      li {
        justify-content: center;
      }
      .character-img {
        width: 25%;
      }
      .favorite-btn,
      .favorite {
        padding: 12px;
        border-radius: 10px;
      }
    }
  }
}
@media (max-width: 4200px) {
  .character {
    .character-values {
      width: 85%;
      font-size: 25px;
      height: 16vh;

      .character-img {
        width: 27.5%;
      }
    }
  }
}
@media (max-width: 3500px) {
  .character {
    .character-values {
      font-size: 20px;
      height: 15vh;
      width: 82.5%;

      .character-img {
        width: 30%;
      }
    }
  }
}
@media (max-width: 2560px) {
  .character {
    .character-values {
      font-size: 18px;
      width: 77.5%;

      .character-img {
        width: 30%;
      }
      .favorite-btn,
      .favorite {
        padding: 8px;
        border-radius: 5px;
      }
    }
  }
}
@media (max-width: 1920px) {
  .character {
    .character-values {
      font-size: 16px;
      height: 12vh;

      .character-img {
        width: 35%;
      }
      .favorite-btn,
      .favorite {
        padding: 5px;
      }
    }
  }
}
@media (max-width: 1024px) {
  .character {
    .character-values {
      width: 90%;
      font-size: 16px;

      .character-img {
        width: 50%;
      }
      .favorite-btn {
        padding: 2px;
      }
    }
  }
}
@media (max-width: 768px) {
  .character {
    .character-values {
      width: 100%;
      font-size: 12px;
      li {
        justify-content: space-around;
      }
    }
  }
}
@media (max-width: 480px) {
  .character {
    .character-values {
      font-size: 9px;
      li {
        justify-content: stretch;
      }
      .character-img {
        width: 65%;
      }
      .favorite-btn,
      .favorite {
        padding: 0px;
      }
    }
  }
}
</style>
