<template>
  <div id="app">
    <TheNavbar />
    <!-- <router-view /> -->
  
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TheNavbar from "./components/TheNavbar.vue";
@Component({
  components: {
    TheNavbar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-weight: 500; // medium
  font-size: 16px;
  // font-weight: 400 //regular
}

// .nav {
//   position: relative;
//   height: 25%;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
