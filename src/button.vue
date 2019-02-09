<template>
  <button class="g-button" :class="{[`icon-${buttonPosition}`]:true}" @click="$emit('click')">
    <g-icon v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon v-if="loading" class="loading icon" name="loading"></g-icon>
    <div class="button-content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  props: {
    icon: String,
    buttonPosition: {
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
  font-size: var(--font-size);
  height: var(--button-height);
  background: var(--button-bg);
  padding: 0 0.8em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font: inherit;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  &:hover {
    border: 1px solid var(--border-color-hover);
  }
  &:active {
    background: var(--button-active-bg);
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
    font-size: var(--font-size);
  }
  &.icon-right {
    > .icon {
      margin-left: 0.3em;
      margin-right: 0;
      order: 2;
    }
    > .button-content {
      order: 1;
      font-size: var(--font-size);
    }
  }
  .loading{
    animation: spin 1s linear infinite;
  }
}
</style>

