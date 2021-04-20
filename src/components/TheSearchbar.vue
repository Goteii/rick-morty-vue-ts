<template>
  <div class="searchbar">
    <input
      class="searchbar__input"
      type="search"
      placeholder="Start typing to search..."
    />
    <!-- :value="searchState"
      @input="updateMessage" -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import { Getter, Mutation } from "vuex-class";
Component({});
export default class TheSearchbar extends Vue {
  // @Getter("characters/getSearchPhrase") searchPhrase!: string;
  // @Mutation("characters/updateMessage") updateMessage!: (e: {
  //   target: { value: string };
  // }) => void;
  // handleInput(e: { target: { value: string } }): void {
  //   this.updateMessage(e);
  // }
}
</script>

<style lang="scss" scoped>
@import "../styles/styles.scss";
.searchbar {
  position: relative;
  width: 50%;
  padding-left: 5em;
  display: flex;
  align-items: center;

  ::placeholder {
    @include font-bold;
  }

  .searchbar__input {
    position: relative;
    max-height: 100%;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid $color-2;
    background: url("../assets/search-icon.png") no-repeat scroll 95% 50%;
    padding-left: 2.5%;
  }
}

@media (max-width: 5200px) {
  .searchbar {
    ::placeholder {
      font-size: $font-retina-large;
    }
    .searchbar__input {
      width: 55%;
      padding: 27.5px;
    }
  }
}
@media (max-width: 4200px) {
  .searchbar {
    ::placeholder {
      font-size: $font-retina-regular;
    }
    .searchbar--input {
      padding: 25px;
    }
  }
}
@media (max-width: 3500px) {
  .searchbar {
    ::placeholder {
      font-size: $font-retina-small;
    }
    .searchbar__input {
      padding: 20px;
    }
  }
}
@media (max-width: 2560px) {
  .searchbar {
    ::placeholder {
      font-size: $font-desktop-regular;
    }
    padding-left: 2.5em;
    .searchbar__input {
      font-size: 16px;
      width: 50%;
      padding: 15px;
    }
  }
}
@media (max-width: 1024px) {
  .searchbar {
    .searchbar__input {
      width: 65%;
      font-size: $font-desktop-small;
    }
  }
}
@media (max-width: 768px) {
  .searchbar {
    .searchbar__input {
      width: 70%;
      font-size: $font-tablet-regular;
    }
  }
}
@media (max-width: 480px) {
  .searchbar {
    .searchbar__input {
      width: 100%;
      font-size: $font-mobile-regular;
    }
  }
}
</style>
