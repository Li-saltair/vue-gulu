<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <g-icon v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon v-if="loading" class="loading icon" name="loading"></g-icon>
    <div class="button-content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from "./../icon"
export default {
  name:"Gbutton",
  components:{
    "g-icon":Icon
  },
  props: {
    icon: String,
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        //传进来的value值
        return value === "left" || value === "right";
      }
    },
    loading:{
      type:Boolean,
      default:false
    }
  }
};
</script>
<style lang="scss">
@import '../var';
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  vertical-align: middle;
  font-size: $font-size;
  height: $button-height;
  background: $button-bg;
  padding: 0 0.8em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font: inherit;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  &:hover {
    border: 1px solid $border-color-hover;
  }
  &:active {
    background: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  > .button-content {
    order: 2;
    font-size: $font-size;
  }
  &[disabled]{
    cursor:no-drop;
  }
  &.icon-right {
    > .icon {
      margin-left: 0.3em;
      margin-right: 0;
      order: 2;
    }
    > .button-content {
      order: 1;
      font-size: $font-size;
    }
  }
  .loading{
    animation: spin 1s linear infinite;
  }
}
</style>

