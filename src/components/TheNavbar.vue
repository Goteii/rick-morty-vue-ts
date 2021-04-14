<template>
  <nav class="navbar">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
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
  min-height: 30%;
  padding: 30px;
  display: flex;
  background: red;
}
.logo-img {
  width: 10%;
  height: auto;
}
</style>
