import Vue from 'vue'
import Button from './button/button'
import Icon from './icon'
import ButtonGroup from './button/button-group'
import Input from './input'
import Row from './grid/row'
import Col from './grid/col'
import Header from './layout/header'
import Sider from './layout/sider'
import Content from './layout/content'
import Layout from './layout/layout'
import Footer from './layout/footer'
import Plugin from './plugin' //toast
import Tabs from './tabs/tabs'
import TabsItem from './tabs/tab-item'
import TabsNav from './tabs/tab-nav'
import TabsBody from './tabs/tab-body'
import TabsContent from './tabs/tab-content'
import Popover from './popover'
import Collapse from './collapse/collapse'
import CollapseItem from './collapse/collapse-item'
import Cascader from './cascader/cascader'
import Slides from './slides/slides'
import SlidesItem from './slides/slides-item'
import Nav from './nav/nav'
import SubNav from './nav/sub-nav'
import NavItem from './nav/nav-item'
import Pager from './pager'
import Table from './table/table'
import Sticky from './sticky'
import Uploader from './uploader'
//import db from "../test/fixtures/_db"

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-content', Content)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-layout', Layout)
Vue.component('g-footer', Footer)
Vue.use(Plugin)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-nav', TabsNav)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-content', TabsContent)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.component('g-cascader', Cascader)
Vue.component('g-slides', Slides)
Vue.component('g-slides-item', SlidesItem)
Vue.component('g-nav', Nav)
Vue.component('g-nav-item', NavItem)
Vue.component('g-sub-nav', SubNav)
Vue.component('g-pager', Pager)
Vue.component('g-table', Table)
Vue.component('g-sticky', Sticky)
Vue.component('g-uploader', Uploader)

// function ajax(pid = 0) {
//   //pid是上一级的ID

//   setTimeout(() => {
//     let result = db.filter(item => item.pid == pid)
//     result.forEach(node => {
//       if (db.filter(item => item.pid === node.id).length > 0) {
//         node.isLeaf = false
//       } else {
//         node.isLeaf = true
//       }
//     })
//     return result
//   }, 1000)
// }
// function ajax2(pid = 0) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let result = db.filter(item => item.pid == pid)
//       //判断是否叶子节点
//       result.forEach(node => {
//         if (db.filter(item => item.pid === node.id).length > 0) {
//           node.isLeaf = false
//         } else {
//           node.isLeaf = true
//         }
//       })
//       resolve(result)
//     }, 1000)
//   })
// }
new Vue({
  el: '#root',
  data: {
    selectedTab:"three",
    collapseTab:["1","2"],
    //selectedTab: ['1', '2'],
    //selected: [],
    source: [],
    selected: '2',
    menu: ['two'],
    currentData: 1,
    selectedContent: [],
    column: [
      { text: '姓名', field: 'name', sort: 'asc', width:200 },
      { text: '分数', field: 'score', sort: 'desc' }
    ],
    orderBy: {
      //name: 'asc', //显示排序
      score: 'asc' //倒序
    },
    dataSource: [
      { id: 1, name: '方方', score: '90', description:'的世界观和电话记得告诉觉得韩国釜山' },
      { id: 2, name: '圆圆', score: '89', description:'的美好方式和电的技术风格还是数据库很快' },
      { id: 3, name: '张三', score: '79' },
      { id: 4, name: '李四', score: '77' },
      { id: 5, name: '超人', score: '91' },
      { id: 6, name: '二狗', score: '92' },
      { id: 7, name: '陈皮', score: '93' },
      { id: 8, name: '哈哈', score: '94' },
      { id: 9, name: '哈哈', score: '94' },
      { id: 10, name: '哈哈', score: '94' },
      { id: 11, name: '哈哈', score: '94' },
      { id: 12, name: '哈哈', score: '94' },
      { id: 13, name: '哈哈', score: '94' },
      { id: 14, name: '哈哈', score: '94' },
      { id: 15, name: '哈哈', score: '94' },
      { id: 16, name: '哈哈', score: '94' },
      { id: 17, name: '哈哈', score: '94' },
      { id: 18, name: '哈哈', score: '94' },
      { id: 19, name: '哈哈', score: '94' }
    ],
    fileList:[]
  },
  mounted() {
    
    // ajax2(0).then(r => {
    //   this.source = r
    // })
    // setTimeout(() => {
    //     this.selected = '2'
    // },2000);
  },
  methods: {
    // changeData() {
    //   //console.log(this.selected[0].label)
    //   ajax2(this.selected[0].id).then(r => {
    //     let lastLevelSelected = this.source.filter(
    //       item => item.id == this.selected[0].id
    //     )[0]
    //     //console.log(lastLevelSelected)
    //     this.$set(lastLevelSelected, "children", r)
    //     //lastLevelSelected[0].children = r
    //   })
    // },
    // loadData({ id }, fn) {
    //   ajax2(id).then(r => {
    //     fn(r) //把传递过来的回调函数调用一下
    //   })
    // }
    sortData() {
      console.log('哈哈哈')
      this.dataSource = this.dataSource.sort((a, b) => a.score - b.score)
    },
    parseFunc(res){     
      let obj = JSON.parse(res)
      let url = `http://localhost:3001/preview/${obj.key}`
      return url
    },
    error(msg){
      alert(msg || '上传失败')
    },
    addFile(value){
      //console.log(value)
      this.fileList.push(value)
    }
  }
})
