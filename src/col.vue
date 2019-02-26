<template>
  <div class="col" :class=colClasses :style="colStyle">
    <div style="border:1px solid #f00;background:#fc0; height:100px;">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Gcol",
  props: {
    span: [Number, String],
    offset: [Number, String]
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      };
    },
    colClasses(){
      return [this.span && `col-${this.span}`,this.offset && `offset-${this.offset}`]
    }
  }
};
</script>
<style lang="scss" scoped>
.col {
  padding: 0 10px;
  width: 50%;
  height: 100px;
  $class: col-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n / 24) * 100%;
    }
  }

  $class: offset-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>
