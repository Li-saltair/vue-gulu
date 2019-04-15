const expect = chai.expect
import Vue from "vue"
import Slides from "../src/slides/slides"
import SlidesItem from "../src/slides/slides-item"

Vue.component("g-slides", Slides)
Vue.component("g-slides-item", SlidesItem)
Vue.config.productionTip = false
Vue.config.devtools = false

describe("Slides", () => {
  it("存在", () => {
    expect(Slides).to.be.ok
  })
  it("接受GslidesItem", done => {
    const div = document.createElement("div")
    document.body.appendChild(div)
    div.innerHTML = `
    <g-slides :selected.sync="selected" :data-index="selected">
        <g-slides-item name="1">
          <div class="slide-item">1</div>
        </g-slides-item>
        <g-slides-item name="2">
          <div class="slide-item">2</div>
        </g-slides-item>
        <g-slides-item name="3">
          <div class="slide-item">3</div>
        </g-slides-item>
    </g-slides>
    `
    const vm = new Vue({
      el: div,
      data: {
        selected: "2"
      }
    })
    setTimeout(() => {
      let result = vm.$el.querySelector(".slide-item")
      expect(result.innerText).to.be.eq("2")
      done()
      vm.$el.remove()
      vm.$destroy()
    }, 1000)
  })

  it("点击第三个-展示第三个", () => {
    const div = document.createElement("div")
    document.body.appendChild(div)
    div.innerHTML = `
    <g-slides :selected.sync="selected">
        <g-slides-item name="1">
          <div class="slide-item">1</div>
        </g-slides-item>
        <g-slides-item name="2">
          <div class="slide-item">2</div>
        </g-slides-item>
        <g-slides-item name="3">
          <div class="slide-item">3</div>
        </g-slides-item>
    </g-slides>
    `
    const vm = new Vue({
      el: div,
      data: {
        selected: "3"
      }
    })
    setTimeout(done => {
      let dots = vm.$el.querySelector(".g-slides-pages")
      let btn = dots.querySelectorAll("span")[2]
      btn.click()
      //setTimeout(() => {
      vm.$nextTick(done => {
        let result = vm.$el.querySelector(".slide-item")
        //console.log(result.innerText)
        expect(result.innerText === "2").to.be.true
        done()
      })
      //}, 1000)
      done()
      vm.$el.remove()
      vm.$destroy()
    }, 800)
  })
})
