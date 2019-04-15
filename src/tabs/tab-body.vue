<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:"g-tabsBody",
    inject:['eventBus'],
    created(){
        //console.log(this.eventBus)
    }
}
</script>
<style lang="scss" scoped>
    .tabs-body{
        padding:10px 15px;
    }
</style>