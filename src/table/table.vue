<template>
  <div class="g-table" ref="wrapper">
    <div style="height:400px;overflow-y:auto">
      <table
        class="g-table-content"
        :class="{border:border,compact:compact,nostripe:!striped}"
        ref="table"
      >
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                @change="onChangeAllItems"
                ref="allChecked"
                :checked="isAllChecked"
              >
            </th>
            <th v-if="numberVisible">#</th>
            <th v-for="column in columns" :key="column.field">
              <div class="g-table-content-header">
                {{column.text}}
                <span
                  v-if="column.field in orderBy"
                  @click="changeOrderBy(column.field)"
                >
                  <Icon name="arrow-up" :class="{active:orderBy[column.field] === 'asc'}"></Icon>
                  <Icon name="arrow-down" :class="{active:orderBy[column.field] === 'desc'}"></Icon>
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in dataSource" :key="item.id">
            <td>
              <input
                type="checkbox"
                @change="onChangeItem(item,index,$event)"
                :checked="inSelectItems(item)"
              >
            </td>
            <td v-if="numberVisible">{{index+1}}</td>
            <template v-for="column in columns">
              <td :key="column.field">{{item[column.field]}}</td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="g-table-loading" v-if="loading">
      <Icon name="loading" class="g-table-loading-icon"></Icon>
    </div>
  </div>
</template>
<script>
import Icon from "./../icon";
//默认固定表头
export default {
  name: "Gtable",
  components: {
    Icon
  },
  props: {
    columns: {
      type: Array,
      required: true
    },
    dataSource: {
      type: Array,
      required: true,
      validator(array) {
        if (array.filter(i => i.id === undefined).length > 0) {
          return false;
        } else {
          return true;
        }
      }
    },
    height: {
      type: [String, Number]
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
    selectedItems: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    },
    orderBy: {
      type: Object,
      default: () => ({})
      // validator(object){

      // }
    }
  },
  // data() {
  //   return {
  //     table2: ""
  //   };
  // },
  watch: {
    selectedItems() {
      if (this.selectedItems.length === this.dataSource.length) {
        this.$refs.allChecked.indeterminate = false;
      } else if (this.selectedItems.length === 0) {
        this.$refs.allChecked.indeterminate = false;
      } else {
        this.$refs.allChecked.indeterminate = true;
      }
    }
  },
  computed: {
    isAllChecked() {
      return this.dataSource.length === this.selectedItems.length;
    }
  },
  mounted() {
    let table2 = this.$refs.table.cloneNode(true);
    this.table2 = table2;
    table2.classList.add("g-table-content-copy");
    this.$refs.wrapper.appendChild(table2);
    this.updateHeadersWidth();
    this.onWindowResize = () => this.updateHeadersWidth();
    window.addEventListener("resize", this.onWindowResize);
  },
  beforeDestroy() {
    this.table2.remove();
    window.removeEventListener("resize", this.onWindowResize);
  },
  methods: {
    onChangeItem(item, index, e) {
      let selected = e.target.checked;
      let selectedItemsCopy = JSON.parse(JSON.stringify(this.selectedItems));
      if (selected) {
        selectedItemsCopy.push(item);
      } else {
        //如果未选中，就在copy数组中留下不等于此id的项
        selectedItemsCopy = selectedItemsCopy.filter(i => i.id !== item.id);
      }
      this.$emit("update:selectedItems", selectedItemsCopy);
    },
    onChangeAllItems(e) {
      let selected = e.target.checked;
      this.$emit("update:selectedItems", selected ? this.dataSource : []);
    },
    inSelectItems(item) {
      return this.selectedItems.filter(i => i.id === item.id).length > 0;
    },
    changeOrderBy(key) {
      let copy = JSON.parse(JSON.stringify(this.orderBy));
      let oldValue = copy[key];
      if (oldValue === "asc") {
        copy[key] = "desc";
      } else if (oldValue === "desc") {
        copy[key] = true;
      } else {
        copy[key] = "asc";
      }
      this.$emit("update:orderby", copy);
    },
    updateHeadersWidth() {
      let table2 = this.table2;
      let tableHeader = Array.from(this.$refs.table.children).filter(
        node => node.tagName.toLowerCase() === "thead"
      )[0];
      let tableHeader2;
      Array.from(table2.children).map(node => {
        if (node.tagName.toLowerCase() !== "thead") {
          node.remove();
        } else {
          tableHeader2 = node;
        }
      });
      Array.from(tableHeader.children[0].children).map((th, index) => {
        const { width } = th.getBoundingClientRect();
        console.log(width);
        tableHeader2.children[0].children[index].style.width = width + "px";
      });
    }
  }
};
//排序时的操作:
//用户在组件标签上监听@update:orderBy="方法",在方法中进行其他操作
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-table {
  position: relative;
  &-content {
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
    th {
      background: #fff;
    }
    &-header {
      display: flex;
      align-items: center;
      span {
        display: inline-flex;
        margin-left: 10px;
        flex-direction: column;
        svg {
          width: 0.6em;
          height: 0.6em;
          cursor: pointer;
        }
      }
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
    .icon {
      fill: #aaa;
      &.active {
        fill: #597ef7;
      }
    }
    &-copy {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
}

.g-table-loading {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    &.g-table-loading-icon {
      fill: #597ef7;
      width: 2em;
      height: 2em;
      animation: spin 1s linear infinite;
    }
  }
}
</style>
