<template>
  <div class="categories">
    <div class="categories__container">
      <router-link to="/">All Characters</router-link>
      <router-link to="/favorites">Favorites</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/styles.scss";
.categories {
  position: relative;
  border-top: 1px solid $bg-color-dark;
  padding-left: 5%;
  padding-top: 1.5em;
  padding-bottom: 1.5em;

  .categories__container {
    @include font-bold;
    display: flex;
    justify-content: space-around;

    a {
      @include font-bold;
      text-decoration: none;

      &.router-link-exact-active {
        color: $color-1;
        text-decoration: underline solid 3px;
        text-underline-offset: 5px;
      }
    }
  }
}
@media (max-width: 5200px) {
  .categories {
    .categories__container {
      width: 15%;
      font-size: $font-retina-large;
    }
  }
}
@media (max-width: 3500px) {
  .categories {
    .categories__container {
      font-size: $font-retina-regular;
    }
  }
}
@media (max-width: 2500px) {
  .categories {
    .categories__container {
      width: 20%;
      font-size: $font-desktop-regular;
    }
  }
}
@media (max-width: 1024px) {
  .categories {
    .categories__container {
      width: 30%;
      font-size: $font-desktop-small;
    }
  }
}
@media (max-width: 768px) {
  .categories {
    .categories__container {
      width: 50%;
    }
  }
}
@media (max-width: 480px) {
  .categories {
    .categories__container {
      width: 100%;
    }
  }
}
</style>
