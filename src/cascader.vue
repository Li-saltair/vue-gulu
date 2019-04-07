<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">{{selectValue || '&nbsp;'}}</div>
    <div class="popover" v-if="popoverVisible">
      <recursive-item
        :sourceItem="source"
        :height="popoverHeight"
        @update:selected="onUpdate"
        :selected="selected"
      ></recursive-item>
    </div>
  </div>
</template>
<script>
import recursiveItem from "./recursive-item";
export default {
  name: "gCascader",
  components: { recursiveItem },
  props: {
    source: {
      type: Array,
      required: true
    },
    popoverHeight: {
      type: String
    },
    selected: {
      type: Array,
      default: () => []
    },
    loadData: {
      type: Function
    }
  },
  data() {
    return {
      popoverVisible: false
    };
  },
  computed: {
    selectValue() {
      return this.selected.map(item => item.label).join(" ");
    }
  },
  methods: {
    onUpdate(value) {
      this.$emit("update:selected", value);
      //value是选中的item
      let lastItem = value[value.length - 1];
      let simplest = (children, id) => {
        return children.filter(item => item.id === id)[0];
      };
      let complex = (children, id) => {
        let noChildren = [];
        let hasChildren = [];
        children.forEach(item => {
          if (item.children) {
            hasChildren.push(item);
          } else {
            noChildren.push(item);
          }
        });
        let found = simplest(noChildren, id);
        if (found) {
          return found;
        } else {
          found = simplest(hasChildren, id);
          if (found) {
            return found;
          } else {
            for (let i = 0; i < hasChildren.length; i++) {
              found = complex(hasChildren[i].children, id);
              if (found) {
                return found;
              }
            }
            return undefined;
          }
        }
      };
      let updateSource = result => {
        let copy = JSON.parse(JSON.stringify(this.source));
        let toUpdate = complex(copy, lastItem.id);
        toUpdate.children = result;
        this.$emit('update:selected',copy)
      };
      this.loadData(lastItem, updateSource);
      //调回调的时候传递一个函数，这个函数理论上应该被调用
    }
  }
};
</script>
<style lang="scss" scoped>
@import "var";
.cascader {
  position: relative;
  .trigger {
    display: inline-flex;
    padding: 0 2px;
    align-items: center;
    justify-content: flex-start;
    min-width: 10em;
    height: 32px;
    border: 1px solid #7c7;
    border-radius: $border-radius;
  }
  .popover {
    position: absolute;
    min-height: 150px;
    background: #fff;
    z-index: 99;
    top: 100%;
    left: 0;
    box-shadow: $box-shadow;
  }
}
</style>
