<template>
  <div>
    <table class="g-table" :class="{border:border,compact:compact,nostripe:!striped}">
      <thead>
        <tr>
          <th>
            <input type="checkbox" @change="onChangeAllItems">
          </th>
          <th v-if="numberVisible">#</th>
          <th v-for="column in columns" :key="column.text">{{column.text}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in dataSource">
          <td>
            <input type="checkbox" @change="onChangeItem(item,index,$event)">
          </td>
          <td v-if="numberVisible">{{index+1}}</td>
          <template v-for="column in columns">
            <td :key="column.field">{{item[column.field]}}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "Gtable",
  props: {
    columns: {
      type: Array,
      required: true
    },
    dataSource: {
      type: Array,
      required: true
    },
    numberVisible: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    compact: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: true
    },
    selectedItems:{
        type:Array,
        default:()=>[]
    }
  },
  methods:{
      onChangeItem(item,index,e){
          this.$emit('changeitem',{selected:e.target.checked,item,index})
          //e.target.checked
          //console.log(e.target.checked)
      },
      onChangeAllItems(e){
          let selected = e.target.checked
          this.dataSource.map((item,index)=>{
              this.$emit('changeItem',{selected,item,index})
          })
      }
  }
};
</script>
<style lang="scss" scoped>
.g-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-bottom: 1px solid #e2e2e2;
  &.border {
    border: 1px solid #eee;
    th,
    td {
      border: 1px solid #eee;
    }
  }
  th,
  td {
    text-align: left;
    border-bottom: 1px solid #eee;
    padding: 8px;
  }
  &.compact {
    th,
    td {
      padding: 3px;
    }
  }
  tbody {
    > tr {
      &:nth-child(even) {
        background: #f8f8f8;
      }
      &:nth-child(odd) {
        background: #fff;
      }
    }
  }
  &.nostripe {
    tbody {
      > tr {
        background: #fff;
      }
    }
  }
}
</style>
