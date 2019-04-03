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
      <span class="turn-right" v-if="leftItem.children"><Icon name="right"></Icon></span>
      </div>
    </div>
    <div class="right" v-if="rightItems" ref="right">
      <recursive-item :sourceItem="rightItems" :height="height" :level="level+1" :selected="selected" @update:selected="onChildrenUpdate"></recursive-item>
    </div>
  </div>
</template>
<script>
import Icon from './icon'
export default {
  name: "recursiveItem",
  components:{
    Icon
  },
  props: {
    sourceItem: {
      type: Array
    },
    height:{
      type:String
    },
    selected:{
      type:Array,
      default:()=>[]
    },
    level:{
      type:Number,
      default:0
    }
  },
  computed: {
    rightItems() {
      let currentSelected = this.selected[this.level]
      if (currentSelected && currentSelected.children) {
        return currentSelected.children;
      } else {
        return null;
      }
    }
  },
  methods:{
    //
    onClickLabel(item){
      //不建议子组件直接控制父组件
      //this.$set(this.selected,this.level,item.label)
      let copy = JSON.parse(JSON.stringify(this.selected))
      copy[this.level] = item
      copy.splice(this.level+1)
      this.$emit('update:selected',copy)
    },
    //递归时第N层需要向上传递selected
    onChildrenUpdate(newSelected){
      this.$emit('update:selected',newSelected)
    }
  }
};
</script>
<style lang="scss" scoped>
.recursive-item {
  display: flex;
  .left {
    padding-top:.5em;
    border-left:1px solid #efefef;
    overflow-y:scroll;
  }
  .right {
  }
  .level-content{
    padding:.5em 1em;
    cursor: pointer;
    .turn-right{
      margin-left:1em;
      .icon{
        width:.8em;
        height:.8em;
        fill:#999
      }
    }
  }
}
</style>

