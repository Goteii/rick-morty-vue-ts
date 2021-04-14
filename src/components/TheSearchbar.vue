<template>
  <div class="searchbar">
    <input
      class="searchbar--input"
      type="search"
      placeholder="Start typing to search..."
    />
  </div>
</template>

<style lang="scss" scoped>
.searchbar {
  position: relative;
  width: 50%;
  padding-left: 3em;
}
.searchbar--input {
  position: relative;
  height: auto;
  min-height: 90%;
  width: 40%;
  border-radius: 10px;
  border: 1px solid #a9b1bd;
  background: url("../assets/search-icon2.png") no-repeat scroll 95% 50%;
  padding-left: 10px;
}
</style>
