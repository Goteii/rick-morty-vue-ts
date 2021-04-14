<template>
  <div class="categories-container">
    <div class="categories">
      <router-link to="/">All Characters</router-link>
      <router-link to="/favorites">Favorites</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.categories-container {
  position: relative;
  border-top: 1px solid #e5eaf4;
  padding-left: 5%;
  padding-top: 1.5em;
  padding-bottom: 1.5em;

  .categories {
    display: flex;
    justify-content: space-around;

    a {
      text-decoration: none;
      color: #a9b1bd;

      &.router-link-exact-active {
        color: #11b0c8;
        text-decoration: underline solid 4px;
      }
    }
  }
}

@media (min-width: 1025px) {
  .categories {
    width: 20%;
  }
}
@media (max-width: 1024px) {
  .categories {
    width: 30%;
  }
}
@media (max-width: 768px) {
  .categories {
    width: 42.5%;
  }
}
@media (max-width: 480px) {
  .categories {
    width: 60%;
  }
}
</style>
