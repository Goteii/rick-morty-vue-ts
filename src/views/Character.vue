<template>
  <div class="character">
    <ul class="character__list">
      <li>
        <img :src="photo" :alt="name + '_icon'" class="character__img" />
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
          class="character__btn--add"
          @click="
            addCharacterToFav(character);
            toggle();
          "
        >
          <img src="../assets/blue-star.png" />
        </button>
        <button
          v-else
          class="character__btn--delete"
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
import { Mutation, Action } from "vuex-class";
import { CharactersApiI } from "../models/models";
@Component({})
export default class Character extends Vue {
  @Action("favorites/addCharacterToFav") addCharacterToFav!: (
    character: CharactersApiI
  ) => CharactersApiI;
  @Mutation("favorites/deleteFavorite") deleteFavorite!: (
    characterID: string
  ) => void;
  @Prop({ required: true, type: String }) readonly photo!: string;
  @Prop({ required: true, type: String }) readonly characterID!: string;
  @Prop({ required: true, type: String }) readonly name!: string;
  @Prop({ required: true, type: String }) readonly gender!: string;
  @Prop({ required: true, type: String }) readonly species!: string;
  @Prop({ required: true, type: String }) readonly lastEpisode!: string;
  @Prop({ required: true, type: Object }) readonly character!: CharactersApiI;
  isFavorite = false;
  toggle(): void {
    this.isFavorite = !this.isFavorite;
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/styles.scss";
.character {
  position: relative;
  background-color: $bg-color-light;

  .character__list {
    @include records;

    li {
      flex: 1;
      display: flex;
      text-align: center;
    }

    .character__btn--add {
      @include favorite-btn;

      img {
        display: flex;
      }
    }

    .character__btn--delete {
      @include unfavorite-btn;
      img {
        display: flex;
      }
    }
  }
  hr {
    height: 1px;
    background-color: $bg-color-dark;
    border: none;
  }
}

@media (max-width: 5200px) {
  .character {
    .character__list {
      width: 87.5%;
      font-size: $font-retina-large;
      padding-top: 1em;
      height: 17.5vh;
      li {
        justify-content: center;
      }
      .character__img {
        width: 25%;
      }
      .character__btn--add,
      .character__btn--delete {
        padding: 12px;
        border-radius: 10px;
      }
    }
  }
}
@media (max-width: 4200px) {
  .character {
    .character__list {
      width: 85%;
      font-size: $font-retina-regular;
      height: 16vh;

      .character__img {
        width: 27.5%;
      }
    }
  }
}
@media (max-width: 3500px) {
  .character {
    .character__list {
      font-size: $font-retina-small;
      height: 15vh;
      width: 82.5%;

      .character__img {
        width: 30%;
      }
    }
  }
}
@media (max-width: 2560px) {
  .character {
    .character__list {
      font-size: 18px;
      width: 77.5%;

      .character__img {
        width: 30%;
      }
      .character__btn--add,
      .character__btn--delete {
        padding: 8px;
        border-radius: 5px;
      }
    }
  }
}
@media (max-width: 1920px) {
  .character {
    .character__list {
      font-size: $font-desktop-regular;
      height: 12vh;

      .character__img {
        width: 32.5%;
      }
      .character__btn--add,
      .character__btn--delete {
        padding: 5px;
      }
    }
  }
}
@media (max-width: 1024px) {
  .character {
    .character__list {
      width: 90%;
      font-size: $font-desktop-small;

      .character__img {
        width: 50%;
      }
      .character__btn--add,
      .character__btn--delete {
        padding: 2px;
      }
    }
  }
}
@media (max-width: 768px) {
  .character {
    .character__list {
      width: 100%;
      font-size: $font-tablet-regular;
      li {
        justify-content: space-around;
      }
    }
  }
}
@media (max-width: 480px) {
  .character {
    .character__list {
      font-size: $font-mobile-regular;
      li {
        justify-content: stretch;
      }
      .character__img {
        width: 65%;
      }
      .character__btn--add,
      .character__btn--delete {
        padding: 0px;
      }
    }
  }
}
</style>
