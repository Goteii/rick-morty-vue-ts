<template>
  <div class="pages-container">
    <ul class="pages">
      <button class="pages-btn" @click="changePage('previous')">
        <span>&#9668;</span>
      </button>
      <li
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        @click="setPage(pageNumber)"
        class="page"
        :class="{ active: currentPage === pageNumber }"
      >
        <span> {{ pageNumber }} </span>
      </li>
      <button class="pages-btn" @click="changePage('next')">
        <span>&#9658;</span>
      </button>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})
export default class Pagination extends Vue {
  @Prop({ required: true }) currentPage!: number;
  @Prop({ required: true }) itemsPerPage!: number;
  @Prop({ required: true }) resultCount!: number;
  @Prop({ required: true }) totalPages!: () => number;
  setPage(pageNumber: number): void {
    this.$emit("setPage", pageNumber);
  }
  changePage(value: string): void {
    this.$emit("changePage", value);
  }
}
</script>

<style lang="scss" scoped>
.pages-container {
  position: fixed;
  bottom: 30px;
  left: 5%;
  .pages {
    background-color: red;
    display: flex;
    background-color: #ffffff;
    padding-top: 20px;
    height: 3.7em;

    .pages-btn {
      background-color: red;
      padding: 12.5px;
      list-style-type: none;
      margin-left: 10px;
      border: 1px solid #a9b1bd;
      border-radius: 5px;
      background-color: #fcfcfc;
      color: #a9b1bd;
      cursor: pointer;
      display: flex;
      align-items: center;

      span {
        text-align: center;
      }
    }

    .pages-btn:focus {
      color: #11b0c8;
    }

    .page {
      padding: 15px;
      list-style-type: none;
      margin-left: 10px;
      border: 1px solid #a9b1bd;
      border-radius: 5px;
      color: #a9b1bd;
      background-color: #ffffff;
      cursor: pointer;
      display: flex;
      align-items: center;
      text-align: center;

      span {
        text-align: center;
      }
    }
    .active {
      color: white;
      background-color: #11b0c8;
      border-color: #11b0c8;
    }
  }
}

@media (max-width: 5200px) {
  .pages-container {
    bottom: 60px;
    .pages {
      .page {
        height: 3vh;
        span {
          font-size: 30px;
        }
      }
      .pages-btn {
        height: 3vh;
        span {
          font-size: 30px;
        }
      }
    }
  }
}
@media (max-width: 4200px) {
  .pages-container {
    bottom: 60px;
    .pages {
      .page {
        height: 3vh;
        span {
          font-size: 25px;
        }
      }
      .pages-btn {
        height: 3vh;
        span {
          font-size: 25px;
        }
      }
    }
  }
}
@media (max-width: 3500px) {
  .pages-container {
    bottom: 90px;
    .pages {
      .page {
        height: 4vh;
        span {
          font-size: 20px;
        }
      }
      .pages-btn {
        height: 4vh;
        span {
          font-size: 20px;
        }
      }
    }
  }
}
@media (max-width: 2560px) {
  .pages-container {
    bottom: 40px;
    .pages {
      .page {
        height: 4vh;
        span {
          font-size: 16px;
        }
      }
      .pages-btn {
        height: 4vh;
        span {
          font-size: 16px;
        }
      }
    }
  }
}
@media (max-width: 480px) {
  .pages-container {
    .pages {
      .page {
        height: 3vh;
      }
      .pages-btn {
        height: 3vh;
      }
    }
  }
}
</style>
