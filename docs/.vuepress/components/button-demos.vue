<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="setting">icon按钮</g-button>
    <g-button loading>loading按钮</g-button>
    <g-button disabled>不可用按钮</g-button>
    <pre><code>{{content}}</code></pre>
  </div>
 
</template>
<script>
import Button from "../../../src/button/button";
export default {
  components: {
    "g-button": Button
  },
  data() {
    return {
      content: `
                <g-button>默认按钮</g-button>
                <g-button icon='setting'>icon按钮</g-button>
                <g-button loading>loading按钮</g-button>
                <g-button disabled>不可用按钮</g-button>
            `.replace(/\t+| +/g,'').trim()
    };
  }
};
</script>


