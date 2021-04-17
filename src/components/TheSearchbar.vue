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
    width: 40%;
    border-radius: 10px;
    border: 1px solid #a9b1bd;
    background: url("../assets/search-icon.png") no-repeat scroll 95% 50%;
    padding-left: 2.5%;
    font-weight: 500;
  }
}

@media (min-width: 1025px) {
  .searchbar {
    .searchbar--input {
      width: 55%;
    }
  }
}
@media (max-width: 1024px) {
  .searchbar {
    padding-left: 2.5em;
    .searchbar--input {
      width: 65%;
    }
  }
}
@media (max-width: 768px) {
  .searchbar {
    .searchbar--input {
      width: 70%;
    }
  }
}
@media (max-width: 480px) {
  .searchbar {
    .searchbar--input {
      width: 100%;
    }
  }
}
</style>
