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
        <button class="favorite-btn" @click="deleteFavorite(characterID)">
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
.character {
  position: relative;
  background-color: #ffffff;

  .character-values {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    color: #a9b1bd;
    padding: 1em;
    align-items: center;

    li {
      flex: 1;
      display: flex;
      text-align: center;
    }

    .favorite-btn {
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
      .favorite-btn {
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

      .favorite-btn {
        padding: 8px;
        border-radius: 5px;
      }
    }
  }
}
@media (max-width: 1920px) {
  .character {
    .character-values {
      display: flex;
      width: 90%;
      font-size: 16px;
      height: 12vh;

      .character-img {
        width: 35%;
      }
      .favorite-btn {
        padding: 5px;
      }
    }
  }
}
@media (max-width: 1024px) {
  .character {
    .character-values {
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
      font-size: 8px;
      li {
        justify-content: stretch;
      }
      .character-img {
        width: 60%;
      }
      .favorite-btn {
        padding: 0px;
      }
    }
  }
}
</style>
