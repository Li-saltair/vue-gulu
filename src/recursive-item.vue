<template>
  <div class="recursive-item" :style="{height:height}">
    <div class="left">
      <div
        class="level-content"
        v-for="leftItem in sourceItem"
        :key="leftItem.label"
        @click="onClickLabel(leftItem)"
      >
        {{leftItem.label}}
        <span
          class="turn-right"
          v-if="loadData ? !leftItem.isLeaf :leftItem.children"
        >
          <template v-if="leftItem.label === loadingItem.label">
            <Icon name="loading" class="loading"></Icon>
          </template>
          <template v-else>
            <Icon name="right"></Icon>
          </template>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItems" ref="right">
      <recursive-item
        :source-item="rightItems"
        :height="height"
        :level="level+1"
        :loading-item="loadingItem"
        :selected="selected"
        @update:selected="onChildrenUpdate"
        :load-data="loadData"
      ></recursive-item>
    </div>
  </div>
</template>
<script>
import Icon from "./icon";
export default {
  name: "recursiveItem",
  components: {
    Icon
  },
  props: {
    sourceItem: {
      type: Array
    },
    loadingItem: {
      type: Object,
      default: () => ({})
    },
    loadData:{
      type:Function
    },
    height: {
      type: String
    },
    selected: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number,
      default: 0
    },
    loadData: {
      type: Function
    }
  },
  computed: {
    rightItems() {
      if (this.selected[this.level]) {
        let selectObj = this.sourceItem.filter(
          item => item.label === this.selected[this.level].label
        );
        if (
          selectObj &&
          selectObj[0].children &&
          selectObj[0].children.length > 0
        ) {
          return selectObj[0].children;
        }
      }
    }
  },
  methods: {
    onClickLabel(item) {
      //不建议子组件直接控制父组件
      //this.$set(this.selected,this.level,item.label)
      let copy = JSON.parse(JSON.stringify(this.selected));
      copy[this.level] = item;
      copy.splice(this.level + 1);
      this.$emit("update:selected", copy);
    },
    //递归时第N层需要向上传递selected
    onChildrenUpdate(newSelected) {
      this.$emit("update:selected", newSelected);
    }
  }
};
</script>
<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.recursive-item {
  display: flex;
  .left {
    padding-top: 0.5em;
    border-left: 1px solid #efefef;
    overflow-y: scroll;
  }
  .level-content {
    white-space: nowrap;
    padding: 0.5em 1em;
    cursor: pointer;
    &:hover {
      background: #f1fff1;
    }
    .turn-right {
      margin-left: 1em;
      .icon {
        width: 0.8em;
        height: 0.8em;
        fill: #999;
        margin-left: auto;
        &.loading {
          animation: spin 1s linear infinite;
        }
      }
    }
  }
}
</style>

