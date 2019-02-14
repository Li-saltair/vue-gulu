import Vue from "vue"
import Button from "./button"
import Icon from "./icon"
import ButtonGroup from "./button-group"

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

new Vue({
    el:"#root",
    data:{
        loading1:false
    }
})

//chai 单元测试
import chai from "chai"
const expect = chai.expect
{
    const constructor = Vue.extend(Button)
    const button = new constructor({
        propsData:{
            icon:"setting"
        }
    })
    button.$mount("#test")
    const useElement = button.$el.querySelector("use")
    let href = useElement.getAttribute("xlink:href")
    expect(href).to.eq("#i-setting")
}