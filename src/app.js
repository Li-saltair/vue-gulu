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
import Plugin from './plugin'   //toast
import Tabs from './tabs'
import TabsItem from './tab-item'
import TabsNav from './tab-nav'
import TabsBody from './tab-body'
import TabsContent from './tab-content'
import Popover from './popover'

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
Vue.component("g-tabs", Tabs);
Vue.component("g-tabs-item", TabsItem);
Vue.component("g-tabs-nav", TabsNav);
Vue.component("g-tabs-body", TabsBody);
Vue.component("g-tabs-content", TabsContent);
Vue.component("g-popover", Popover);


new Vue({
  el: "#root",
  data: {
    selectedTab:'one'
  },
  created(){
  },
  methods:{
    
  }
});
