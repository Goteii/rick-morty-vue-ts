<template>
  <nav class="navbar">
    <img alt="rick-morty-logo" class="logo-img" src="../assets/logo.png" />
    <TheSearchbar />
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TheSearchbar from "./TheSearchbar.vue";
@Component({
  components: {
    TheSearchbar,
  },
})
export default class TheNavbar extends Vue {}
</script>

<style lang="scss" scoped>
.navbar {
  position: relative;
  width: 100%;
  padding: 30px;
  display: flex;
  padding-left: 5%;
}
@media (max-width: 3000px) {
  .logo-img {
    width: 11%;
  }
}
@media (max-width: 2000px) {
  .logo-img {
    width: 12.5%;
  }
}
@media (max-width: 1024px) {
  .logo-img {
    width: 20%;
  }
}
@media (max-width: 768px) {
  .logo-img {
    width: 25%;
  }
}
@media (max-width: 480px) {
  .navbar {
    margin-left: 0%;
    justify-content: space-around;
  }
  .logo-img {
    width: 45%;
  }
}
</style>
