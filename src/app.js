import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";
import Ginput from './input'

Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", ButtonGroup);
Vue.component("g-input", Ginput);

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
