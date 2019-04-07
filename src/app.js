import Vue from "vue"
import Button from "./button"
import Icon from "./icon"
import ButtonGroup from "./button-group"
import Ginput from "./input"
import Row from "./row"
import Col from "./col"
import Header from "./header"
import Sider from "./sider"
import Content from "./content"
import Layout from "./layout"
import Footer from "./footer"
import Plugin from "./plugin" //toast
import Tabs from "./tabs"
import TabsItem from "./tab-item"
import TabsNav from "./tab-nav"
import TabsBody from "./tab-body"
import TabsContent from "./tab-content"
import Popover from "./popover"
import Collapse from "./collapse"
import CollapseItem from "./collapse-item"
import Cascader from "./cascader"
import db from "./_db"

Vue.component("g-button", Button)
Vue.component("g-icon", Icon)
Vue.component("g-button-group", ButtonGroup)
Vue.component("g-input", Ginput)
Vue.component("g-row", Row)
Vue.component("g-col", Col)
Vue.component("g-content", Content)
Vue.component("g-header", Header)
Vue.component("g-sider", Sider)
Vue.component("g-layout", Layout)
Vue.component("g-footer", Footer)
Vue.use(Plugin)
Vue.component("g-tabs", Tabs)
Vue.component("g-tabs-item", TabsItem)
Vue.component("g-tabs-nav", TabsNav)
Vue.component("g-tabs-body", TabsBody)
Vue.component("g-tabs-content", TabsContent)
Vue.component("g-popover", Popover)
Vue.component("g-collapse", Collapse)
Vue.component("g-collapse-item", CollapseItem)
Vue.component("g-cascader", Cascader)

function ajax(pid = 0) {
  return db.filter(item => item.pid == pid)
}
function ajax2(pid = 0) {
  return new Promise((resolve, reject) => {
    let result = db.filter(item => item.pid == pid)
    resolve(result)
  })
}

new Vue({
  el: "#root",
  data: {
    selectedTab: ["1", "2"],
    selected: [],
    source: []
  },
  mounted() {
    ajax2(0).then(r => {
      this.source = r
    })
  },
  updated(){

  },
  methods: {
    changeData(){
      //console.log(this.selected[0].label)
      ajax2(this.selected[0].id).then(r=>{
        let lastLevelSelected = this.source.filter(item=>item.id == this.selected[0].id)[0]
        //console.log(lastLevelSelected)
        this.$set(lastLevelSelected,'children',r)
        //lastLevelSelected[0].children = r
      })
    },
    loadData({id},fn){
      ajax2(id).then(r=>{
        fn(r)   //把传递过来的回调函数调用一下
      })
    }
  }
})
