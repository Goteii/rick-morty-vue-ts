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
    font-weight: 500;
    font-size: 16px;
    a {
      text-decoration: none;
      color: #a9b1bd;

      &.router-link-exact-active {
        color: #11b0c8;
        text-decoration: underline solid 3px;
        text-underline-offset: 5px;
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
    width: 50%;
  }
}
@media (max-width: 480px) {
  .categories {
    width: 100%;
  }
}
</style>
