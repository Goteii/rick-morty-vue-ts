<template>
  <div id="app">
    <TheNavbar />
    <TheCategories />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TheNavbar from "./components/TheNavbar.vue";
import TheCategories from "./components/TheCategories.vue";
import { Action } from "vuex-class";
@Component({
  components: {
    TheNavbar,
    TheCategories,
  },
})
export default class App extends Vue {
  @Action("characters/fetchCharacters") fetchCharacters!: () => Promise<void>;
  created(): void {
    this.fetchCharacters();
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
</style>
