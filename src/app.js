import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";
import Ginput from './input'
import Row from './row'
import Col from './col'

Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", ButtonGroup);
Vue.component("g-input", Ginput);
Vue.component("g-row", Row);
Vue.component("g-col", Col);

new Vue({
  el: "#root",
  data: {
    loading1: false,
    message:"hello"
  },
  methods:{
    onChange:function(e){
      console.log(e.target.value)
    }
  }
});
