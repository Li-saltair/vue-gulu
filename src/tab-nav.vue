<template>
    <div class="tabs-nav">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
        <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:"g-tabsNav",
    inject:['eventBus'],
    created(){
        this.eventBus.$on('update:selected',(item,vm)=>{
            console.log(vm.$el)
        })
    }
}
</script>
<style lang="scss" scoped>
    $tab-height: 40px;
    .tabs-nav{
        position:relative;
        display: flex;
        height:$tab-height;
        justify-content: flex-start;
        align-items: center;
        line-height:$tab-height; 
        > .line{
            position: absolute;
            bottom:1px;
            width:100px;
            border-bottom:1px solid #333
        }    
        > .actions-wrapper{
            margin-left:auto;
        }
    }
</style>