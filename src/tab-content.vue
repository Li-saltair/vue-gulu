<template>
    <div class="tabs-content">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:"g-tabsContent",
    // props:{
    //     name:{
    //         type:String | Number,
    //         required:true
    //     }
    // },
    inject:['eventBus'],
    created(){
        this.eventBus.$on('update:selected',(name)=>{
            console.log(name + '...')
        })
    }
}
</script>
<style lang="scss" scoped>
    .tabs-content{

    }
</style>