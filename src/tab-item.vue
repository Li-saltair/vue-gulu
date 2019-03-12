<template>
    <div class="tabs-item" @click='xxx'>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:"g-tabsItem",
    props:{
        name:{
            type:String | Number,
            required:true
        },
        disabled:{
            type:Boolean,
            default:false
        }
    },
    inject:['eventBus'],
    created(){
        this.eventBus.$on('update:selected',(name)=>{
            console.log(name)
        })
    },
    methods:{
        xxx(){
            this.eventBus.$emit('update:selected',this.name)
        }
    }
}
</script>
<style lang="scss" scoped>
    .tabs-item{

    }
</style>