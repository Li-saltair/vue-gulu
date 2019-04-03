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
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Cascader from './cascader'

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
Vue.component("g-collapse", Collapse);
Vue.component("g-collapse-item", CollapseItem);
Vue.component("g-cascader", Cascader);


new Vue({
  el: "#root",
  data: {
    selectedTab:['1','2'],
    selected:[],
    source:[
      {
        value: 'zhejiang',
        label: '浙江',
        children: [{
          value: 'hangzhou',
          label: '杭州',
          children: [{
            value: 'xihu',
            label: '西湖区',
          },{
            value: 'gongshu',
            label: '拱墅区',
          },{
            value: 'shangcheng',
            label: '上城区',
          },{
            value: 'xiacheng',
            label: '下城区',
          }]
        },{
          value: 'jiaxing',
          label: '嘉兴',
          children: [{
            value: 'nanhu',
            label: '南湖区',
          },{
            value: 'xiuzhou',
            label: '秀洲区',
          }]
        },{
          value: 'huzhou',
          label: '湖州'
        }]
      },{
        value: 'fujian',
        label: '福建',
        children: [{
          value: 'fuzhou',
          label: '福州',
          children: [{
            value: 'gulou',
            label: '鼓楼区',
          },{
            value: 'taijiang',
            label: '台江区',
          },{
            value: 'cangshan',
            label: '仓山区',
          },{
            value: 'mawei',
            label: '马尾区',
          }]
        },{
          value: 'xiamen',
          label: '厦门'
        },{
          value: 'quanzhou',
          label: '泉州'
        }]
      },{
        value:'shandong',
        label:'山东山东山东',
        children:[
          {
            value:'jinan',
            label:'济南'
          }
        ]
      }
    ]
  },
  methods:{

  }
});
