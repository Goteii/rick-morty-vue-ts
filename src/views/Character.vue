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
        <button class="favorite-btn">
          <img src="../assets/blue-star.png" />
        </button>
      </li>
    </ul>
    <hr />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({})
export default class Character extends Vue {
  @Prop({ required: true, type: String }) readonly photo!: string;
  @Prop({ required: true, type: Number }) readonly characterID!: number;
  @Prop({ required: true, type: String }) readonly name!: string;
  @Prop({ required: true, type: String }) readonly gender!: string;
  @Prop({ required: true, type: String }) readonly species!: string;
  @Prop({ required: true, type: Number }) readonly lastEpisode!: number;
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
    width: 75%;

    li {
      flex: 1;
      display: flex;
      text-align: center;
    }

    .favorite-btn {
      border-radius: 5px;
      border-color: #11b0c8;
      border: 2px solid #11b0cb;
      cursor: pointer;

      img {
        display: flex;
      }
    }
  }
}

@media (min-width: 1025px) {
  .character {
    .character-values {
      display: flex;
      width: 75%;
      font-size: 16px;
      padding-top: 2.5em;
      li {
        justify-content: center;
      }
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
      display: flex;
      width: 90%;
      font-size: 16px;
      padding-top: 1em;
      li {
        justify-content: center;
      }
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
      display: flex;
      width: 100%;
      font-size: 12px;
      padding-top: 1em;
      li {
        justify-content: space-around;
      }
      .character-img {
        width: 50%;
      }
      .favorite-btn {
        padding: 2px;
      }
    }
  }
}
@media (max-width: 480px) {
  .character {
    .character-values {
      display: flex;
      width: 100%;
      font-size: 8px;
      padding-top: 1em;
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
