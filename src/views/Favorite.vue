<template>
  <div class="favorite">
    <ul class="favorite__list">
      <li>
        <img :src="photo" :alt="name + '_icon'" class="favorite__img" />
      </li>
      <li>{{ characterID }}</li>
      <li>{{ name }}</li>
      <li>
        <img
          v-if="gender === 'Male'"
          src="../assets/male.png"
          alt="${gender}icon"
        />
        <img
          v-else-if="gender === 'Female'"
          src="../assets/female.png"
          alt="${gender}icon"
        />
        <img
          v-else-if="gender === 'unknown'"
          src="../assets/unknown.png"
          alt="${gender}icon"
        />
        <img v-else src="../assets/genderless.png" alt="${gender}icon" />
        {{ gender }}
      </li>
      <li>{{ species }}</li>
      <li>{{ lastEpisode }}</li>
      <li>
        <button
          class="favorite__btn--delete"
          @click="deleteFavorite(characterID)"
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
import { Mutation } from "vuex-class";
@Component({})
export default class Character extends Vue {
  @Mutation("favorites/deleteFavorite") deleteFavorite!: (
    characterID: string
  ) => void;
  @Prop({ required: true, type: String }) readonly photo!: string;
  @Prop({ required: true, type: String }) readonly characterID!: string;
  @Prop({ required: true, type: String }) readonly name!: string;
  @Prop({ required: true, type: String }) readonly gender!: string;
  @Prop({ required: true, type: String }) readonly species!: string;
  @Prop({ required: true, type: String }) readonly lastEpisode!: string;
}
</script>

<style lang="scss" scoped>
@import "../styles/styles.scss";
.favorite {
  position: relative;
  background-color: $bg-color-light;

  .favorite__list {
    @include records;

    li {
      flex: 1;
      display: flex;
      text-align: center;
    }

    .favorite__btn--delete {
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
  .favorite {
    .favorite__list {
      width: 87.5%;
      font-size: $font-retina-large;
      padding-top: 1em;
      height: 17.5vh;
      li {
        justify-content: center;
      }
      .favorite__img {
        width: 25%;
      }
      .favorite__btn--delete {
        padding: 12px;
        border-radius: 10px;
      }
    }
  }
}
@media (max-width: 4200px) {
  .favorite {
    .favorite__list {
      width: 85%;
      font-size: $font-retina-regular;
      height: 16vh;

      .favorite__img {
        width: 27.5%;
      }
    }
  }
}
@media (max-width: 3500px) {
  .favorite {
    .favorite__list {
      font-size: $font-retina-small;
      height: 15vh;
      width: 82.5%;

      .favorite__img {
        width: 30%;
      }
    }
  }
}
@media (max-width: 2560px) {
  .favorite {
    .favorite__list {
      font-size: $font-desktop-regular;
      width: 77.5%;

      .favorite__btn--delete {
        padding: 8px;
        border-radius: 5px;
      }
    }
  }
}
@media (max-width: 1920px) {
  .favorite {
    .favorite__list {
      display: flex;
      height: 12vh;

      .favorite__img {
        width: 32.5%;
      }
      .favorite__btn--delete {
        padding: 5px;
      }
    }
  }
}
@media (max-width: 1024px) {
  .favorite {
    .favorite__list {
      font-size: $font-desktop-small;
      width: 82.5%;
      .favorite__img {
        width: 50%;
      }
      .favorite__btn--delete {
        padding: 2px;
      }
    }
  }
}
@media (max-width: 768px) {
  .favorite {
    .favorite__list {
      width: 100%;
      font-size: $font-tablet-regular;
      li {
        justify-content: space-around;
      }
    }
  }
}
@media (max-width: 480px) {
  .favorite {
    .favorite__list {
      font-size: $font-mobile-regular;
      li {
        justify-content: stretch;
      }
      .favorite__img {
        width: 60%;
      }
      .favorite__btn--delete {
        padding: 0px;
      }
    }
  }
}
</style>
