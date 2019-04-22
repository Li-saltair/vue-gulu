<template>
  <div class="g-pager">
    <span
      v-for="n in pages"
      :key="n"
      class="g-pager-item"
      :class="{active:n === currentPage,separator:n === '...'}"
    >{{n}}</span>
  </div>
</template>
<script>
export default {
  name: "Gpager",
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    hideOnePage: {
      type: Boolean,
      default: true
    }
  },
  data() {
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
        ].sort((a, b) => {
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
    return {
      pages
    };
  }
};
</script>
<style lang="scss" scoped>
@import "var";
.g-pager {
  &-item {
    display: inline-flex;
    cursor: pointer;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: $border-radius;
    min-width: 20px;
    height: 24px;
    justify-content: center;
    align-items: center;
    margin: 0 4px;
    &.separator {
      border: 0;
      cursor: auto;
      &:hover{
          color:#333;
      }
    }
    &.active,
    &:hover {
      border-color: #597ef7;
      color: #597ef7;
    }
    &.active {
      cursor: no-drop;
    }
  }
}
</style>
