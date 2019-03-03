<template>
  <div class="col" :class="colClasses" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
let validator = value => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach(function(item) {
    if (!["span", "offset"].includes(item)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "Gcol",
  props: {
    span: [Number, String],
    offset: [Number, String],
    phone: {
      type: Object,
      validator
    },
    ipad: {
      type: Object,
      validator
    },
    narrowPc: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
    }
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
    colClasses() {
      let { span, offset, ipad, phone, narrowPc, pc } = this;
      let createClasses = this.createClasses
      return [
        ...createClasses({ span, offset }),
        ...createClasses(ipad, "ipad-"),
        ...createClasses(phone, "phone-"),
        ...createClasses(narrowPc, "narrow-pc-"),
        ...createClasses(pc, "pc-")
      ];
    }
  },
  methods: {
    createClasses: (obj, str = "") => {
      //str: ipad-
      if (!obj) {
        return "";
      }
      let array = [];
      if (obj.span) {
        array.push(`col-${str}${obj.span}`);
      }
      if (obj.offset) {
        array.push(`offset-${str}${obj.span}`);
      }
      return array;
    }
  }
};
</script>
<style lang="scss" scoped>
.col {
  padding: 0 10px;
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

  @media (max-width: 1600px) {
    $class: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }
  @media (max-width: 1600px) {
    $class: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (max-width: 1200px) {
    $class: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }
  @media (max-width: 1200px) {
    $class: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (max-width: 768px) {
    $class: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }
  @media (max-width: 768px) {
    $class: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (max-width: 576px) {
    $class: col-phone-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }
  @media (max-width: 576px) {
    $class: offset-phone-;
    @for $n from 1 through 24 {
      &.#{$class}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>
