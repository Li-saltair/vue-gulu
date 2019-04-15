
let onClickDocument = document.addEventListener('click',(e)=>{
    callback.forEach(item=>{
        if(item.el.contains(e.target)){
            return
        } else {
            item.callback()
        }
    })
})
let callback = []
export default {
  bind: function(el, binding, vnode) {
    callback.push({el:el,callback:binding.value})
  }
}
