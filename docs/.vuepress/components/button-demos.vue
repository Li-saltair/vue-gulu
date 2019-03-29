<template>
    <div>
        <g-button>默认按钮</g-button>
        <g-button icon='setting'>icon按钮</g-button>
        <g-button loading>loading按钮</g-button>
        <g-button disabled>不可用按钮</g-button>
    </div>
</template>
<script>
import Button from '../../../src/button'
export default {
    components:{
        'g-button':Button
    }
}
</script>


