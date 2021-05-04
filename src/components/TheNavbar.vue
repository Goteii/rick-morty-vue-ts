<template>
  <nav class="navbar">
    <router-link to="/" class="navbar__link">
      <img
        alt="rick-morty-logo"
        class="navbar__logo"
        src="../assets/logo.png"
      />
    </router-link>
    <div class="navbar__searchbar">
      <input
        v-if="this.$route.path === '/favorites'"
        class="searchbar__input"
        type="search"
        placeholder="Start typing to search..."
        :value="handleInputGen"
        @input="handleInputFav"
      />
      <input
        v-else
        class="searchbar__input"
        type="search"
        placeholder="Start typing to search..."
        :value="handleInputGen"
        @input="handleInput"
      />
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Getter, Mutation } from "vuex-class";
@Component({})
export default class TheNavbar extends Vue {
  @Getter("characters/getSearchPhrase") searchPhrase!: string;
  @Getter("favorites/getSearchPhrase") favSearchPhrase!: string;
  @Mutation("characters/updateMessage") updateMessage!: (e: {
    target: { value: string };
  }) => void;
  @Mutation("favorites/updateFavMessage") updateFavMessage!: (e: {
    target: { value: string };
  }) => void;
  handleInputFav(e: { target: { value: string } }): void {
    this.updateFavMessage(e);
  }
  handleInput(e: { target: { value: string } }): void {
    this.updateMessage(e);
  }
  get handleInputGen(): string {
    if (this.$route.path === "/favorites") {
      return this.favSearchPhrase;
    } else {
      return this.searchPhrase;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/styles.scss";
.navbar {
  position: relative;
  width: 100%;
  padding: 30px;
  display: flex;
  padding-left: 5%;
  .navbar__searchbar {
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
}

@media (max-width: 5200px) {
  .navbar {
    .navbar__searchbar {
      ::placeholder {
        font-size: $font-retina-large;
      }
      .searchbar__input {
        width: 55%;
        padding: 27.5px;
      }
    }
  }
}
@media (max-width: 4200px) {
  .navbar {
    .navbar__searchbar {
      ::placeholder {
        font-size: $font-retina-regular;
      }
      .searchbar--input {
        padding: 25px;
      }
    }
  }
}
@media (max-width: 3500px) {
  .navbar {
    .navbar__searchbar {
      ::placeholder {
        font-size: $font-retina-small;
      }
      .searchbar__input {
        padding: 20px;
      }
    }
    .navbar__link {
      width: 11%;
    }
  }
}

@media (max-width: 2560px) {
  .navbar {
    .navbar__searchbar {
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
    .navbar__link {
      width: 13.5%;
      display: flex;
      align-self: center;
      .navbar__logo {
        width: 100%;
      }
    }
  }
}
@media (max-width: 1024px) {
  .navbar {
    .navbar__searchbar {
      .searchbar__input {
        width: 65%;
        font-size: $font-desktop-small;
      }
    }
    .navbar__link {
      width: 20%;
    }
  }
}
@media (max-width: 768px) {
  .navbar {
    .navbar__searchbar {
      .searchbar__input {
        width: 70%;
        font-size: $font-tablet-regular;
      }
    }
    .navbar__link {
      width: 25%;
    }
  }
}
@media (max-width: 480px) {
  .navbar {
    margin-left: 0%;
    justify-content: space-around;
    .navbar__searchbar {
      .searchbar__input {
        width: 100%;
        font-size: $font-mobile-regular;
      }
    }
    .navbar__link {
      width: 45%;
    }
    .navbar__logo {
      width: 100%;
    }
  }
}
</style>
