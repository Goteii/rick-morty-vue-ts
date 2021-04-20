<template>
  <div class="pages">
    <ul class="pages__list">
      <button class="pages__btn" @click="changePage('previous')">
        <span>&#9668;</span>
      </button>
      <li
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        @click="setPage(pageNumber)"
        class="pages__page"
        :class="{ active: currentPage === pageNumber }"
      >
        <span> {{ pageNumber }} </span>
      </li>
      <button class="pages__btn" @click="changePage('next')">
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
@import "../styles/styles.scss";
.pages {
  position: fixed;
  left: 5%;
  .pages__list {
    display: flex;
    background-color: $bg-color-light;
    padding-top: 20px;
    height: 3.7em;

    .pages__btn {
      @include pagination-btn;

      span {
        text-align: center;
      }
    }

    .pages__btn:focus {
      color: $color-1;
    }

    .pages__page {
      @include pagination-btn;
      padding: 15px;

      span {
        text-align: center;
      }
    }
    .active {
      color: white;
      background-color: $color-1;
      border-color: $color-1;
    }
  }
}

@media (max-width: 5200px) {
  .pages {
    bottom: 60px;
    .pages__list {
      .pages__page {
        height: 3vh;
        span {
          font-size: $font-retina-large;
        }
      }
      .pages__btn {
        height: 3vh;
        span {
          font-size: $font-retina-large;
        }
      }
    }
  }
}
@media (max-width: 4200px) {
  .pages {
    bottom: 60px;
    .pages__list {
      .pages__page {
        height: 3vh;
        span {
          font-size: $font-retina-regular;
        }
      }
      .pages__btn {
        height: 3vh;
        span {
          font-size: $font-retina-regular;
        }
      }
    }
  }
}
@media (max-width: 3500px) {
  .pages {
    bottom: 90px;
    .pages__list {
      .pages__page {
        height: 4vh;
        span {
          font-size: $font-retina-small;
        }
      }
      .pages__btn {
        height: 4vh;
        span {
          font-size: $font-retina-small;
        }
      }
    }
  }
}
@media (max-width: 2560px) {
  .pages {
    bottom: 50px;
    .pages__list {
      .pages__page {
        height: 4vh;
        span {
          font-size: $font-desktop-regular;
        }
      }
      .pages__btn {
        height: 4vh;
        span {
          font-size: $font-desktop-regular;
        }
      }
    }
  }
}
@media (max-width: 1920px) {
  .pages {
    bottom: 20px;
    .pages__list {
      .pages__page {
        height: 3.5vh;
      }
      .pages__btn {
        height: 3.5vh;
      }
    }
  }
}
@media (max-width: 480px) {
  .pages {
    .pages__list {
      .pages__page {
        height: 3vh;
      }
      .pages__btn {
        height: 3vh;
      }
    }
  }
}
</style>
