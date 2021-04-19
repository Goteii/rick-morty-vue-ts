<template>
  <div class="searchbar">
    <input
      class="searchbar--input"
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
.searchbar {
  position: relative;
  width: 50%;
  padding-left: 5em;
  display: flex;
  align-items: center;

  ::placeholder {
    color: #a9b1bd;
  }

  .searchbar--input {
    position: relative;
    max-height: 100%;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #a9b1bd;
    background: url("../assets/search-icon.png") no-repeat scroll 95% 50%;
    padding-left: 2.5%;
    font-weight: 500;
  }
}

@media (max-width: 5200px) {
  .searchbar {
    ::placeholder {
      font-size: 30px;
    }
    .searchbar--input {
      width: 55%;
      padding: 27.5px;
    }
  }
}
@media (max-width: 4200px) {
  .searchbar {
    ::placeholder {
      font-size: 25px;
    }
    .searchbar--input {
      padding: 25px;
    }
  }
}
@media (max-width: 3500px) {
  .searchbar {
    ::placeholder {
      font-size: 20px;
    }
    .searchbar--input {
      padding: 20px;
    }
  }
}
@media (max-width: 2560px) {
  .searchbar {
    ::placeholder {
      font-size: 16px;
    }
    padding-left: 2.5em;
    .searchbar--input {
      font-size: 16px;
      width: 50%;
      padding: 15px;
    }
  }
}
@media (max-width: 1024px) {
  .searchbar {
    .searchbar--input {
      width: 65%;
      font-size: 12px;
    }
  }
}
@media (max-width: 768px) {
  .searchbar {
    .searchbar--input {
      width: 70%;
      font-size: 10px;
    }
  }
}
@media (max-width: 480px) {
  .searchbar {
    .searchbar--input {
      width: 100%;
      font-size: 8px;
    }
  }
}
</style>
