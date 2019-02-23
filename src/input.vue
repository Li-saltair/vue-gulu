<template>
  <div class="wrapper" :class="{error}">
    <input
      type="text"
      v-bind:value="value"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change',$event)"
      @focus="$emit('focus',$event)"
      @blur="$emit('blur',$event)"
      @input="$emit('input',$event)"
    >
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="error-msg">{{error}}</span>
    </template>
  </div>
</template>
<script>
import Icon from "./icon";

export default {
  name: "gInput",
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  },
  components: { Icon }
};
</script>
<style lang="scss" scoped>
$height: 34px;
$border-color: #aaa;
$border-color-hover: #666;
$border-color-focus: #427cff;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.3);
$disabled-border-color: #bbb;
$red: #f66;
.wrapper {
  display: inline-flex;
  align-items: center;
  font-size: $font-size;
  > input {
    height: $height;
    background: #fff;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    outline: none;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      border-color: $border-color-hover;
      box-shadow: inset 0 1px 3px $box-shadow-color;
    }
    &[disabled],
    &[readonly] {
      color: #ccc;
      border-color: $disabled-border-color;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
    .icon-error {
      width: 1.4em;
      height: 1.4em;
      fill: $red;
      margin: 0 0.5em;
    }
    .error-msg {
      vertical-align: middle;
      color: $red;
    }
  }
}
</style>

