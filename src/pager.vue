<template>
  <div class="g-pager" :class="{hide:hideIfOnePage === true && totalPage <=1}">
    <span
      class="g-pager-item prev"
      :class="{disabled:currentPage === 1}"
      @click="onClickPage(currentPage-1)"
    >
      <Icon name="left"></Icon>
    </span>
    <span
      v-for="n in pages"
      :key="n"
      class="g-pager-item"
      :class="{active:n === currentPage,separator:n === '...'}"
      @click="onClickPage(n)"
    >{{n}}</span>
    <span
      class="g-pager-item next"
      :class="{disabled:currentPage === totalPage}"
      @click="onClickPage(currentPage+1)"
    >
      <Icon name="right"></Icon>
    </span>
  </div>
</template>
<script>
import Icon from "./icon";
export default {
  name: "Gpager",
  components: {
    Icon
  },
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    hideIfOnePage: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    pages() {
      let pages = [
        ...new Set(
          [
            1,
            this.totalPage,
            this.currentPage,
            this.currentPage - 1,
            this.currentPage - 2,
            this.currentPage + 1,
            this.currentPage + 2
          ]
            .filter(item => item >= 1 && item <= this.totalPage)
            .sort((a, b) => {
              return a - b;
            })
        )
      ].reduce((prev, current, index, array) => {
        prev.push(current);
        array[index + 1] !== undefined &&
          array[index + 1] - array[index] > 1 &&
          prev.push("...");
        return prev;
      }, []);
      return pages;
    }
  },
  methods: {
    onClickPage(n) {
      if (n >= 1 && n <= this.totalPage) {
        this.$emit("update:currentPage", n);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "var";
.g-pager {
  display: flex;
  align-items: center;
  &.hide{
      display:none;
  }
  &-item {
    display: inline-flex;
    cursor: pointer;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: $border-radius;
    min-width: 28px;
    height: 28px;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 4px;
    &.separator {
      border: 0;
      cursor: auto;
      &:hover {
        color: #333;
      }
    }
    &.active,
    &:hover {
      border-color: #597ef7;
      color: #597ef7;
      .icon {
        fill: #597ef7;
      }
    }
    &.disabled {
      cursor: no-drop;
      border-color: #dedede;
      background: #eee;
      &:hover {
        border-color: #dedede;
        svg {
          fill: #aaa;
          color: #aaa;
        }
      }
      svg {
        fill: #aaa;
      }
    }
    &.active {
      cursor: no-drop;
    }
  }
}
.icon {
  fill: #333;
}
</style>
