import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";
import Ginput from './input'
import Row from './row'
import Col from './col'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Layout from './layout'
import Footer from './footer'
import Plugin from './plugin'

Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", ButtonGroup);
Vue.component("g-input", Ginput);
Vue.component("g-row", Row);
Vue.component("g-col", Col);
Vue.component("g-content", Content);
Vue.component("g-header", Header);
Vue.component("g-sider", Sider);
Vue.component("g-layout", Layout);
Vue.component("g-footer", Footer);
Vue.use(Plugin)

new Vue({
  el: "#root",
  data: {
    loading1: false,
    message:"hello"
  },
  created(){
  },
  methods:{
    onChange:function(e){
      console.log(e.target.value)
    },
    btnClick1:function(){
      this.$toast(`哈哈哈${parseInt(Math.random() * 100)}`,{
        closeButton: {
          text: "关闭",
          callback(){
            console.log('hdhds')
          }
        }
      })
    },
    btnClick2:function(){
      this.$toast(`<i>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈${parseInt(Math.random() * 100)}</i>`,{
        enabledHtml:true,
        /*autoClose:false,
        position:'middle',
        closeButton:{
          text:'dfdvhjd',
          callback(toast){
            //toast.log()
            console.log('callback的内容')
          }
        }*/
      })
    },
    btnClick3:function(){
      this.$toast(`哈哈哈${parseInt(Math.random() * 100)}`,{
        //enabledHtml:true,
        position:'bottom',
        closeButton:{
          text:'关闭',
          callback(toast){
            //toast.log()
            console.log('callback的内容')
          }
        }
      })
    }
  }
});
