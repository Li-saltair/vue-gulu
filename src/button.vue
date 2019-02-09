<template>
  <button class="g-button" :class="{[`icon-${buttonClass}`]:true}">
    <svg class="icon" aria-hidden="true" v-if="icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="button-content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  props: {
    icon:String,
    buttonClass:{
      type:String,
      default:"left"
    }
  }
};
</script>
<style lang="scss">
.g-button {
  vertical-align: middle;
  font-size: var(--font-size);
  height: var(--button-height);
  background: var(--button-bg);
  padding: 0 .8em;
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
    margin-right:.3em;
  }
  > .button-content {
    order: 2;
    font-size: var(--font-size);
  }
  &.icon-right {
    > .icon {
      margin-left:.3em;
      margin-right:0;
      order: 2;
    }
    > .button-content {
      order: 1;
      font-size: var(--font-size);
    }
  }
}
</style>

