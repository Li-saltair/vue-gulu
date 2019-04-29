<template>
  <div class="g-uploader">
    <div @click="onClickUpload" ref="trigger">
      <slot></slot>
    </div>
    <div ref="inputFile" style="width:0;height:0;overflow:hidden"></div>
    <slot name="tips"></slot>
    <ol>
      <li v-for="item in fileList" :key="item.name">
          <template v-if="item.status === 'uploading'">
              <div>
                    loading 
              </div>
          </template>
        <img :src="url" alt="preview">
        {{item.name}}
        <button @click="OnRemoveFile(item)">删除</button>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  name: "Guploader",
  props: {
    //表单中file的name
    name: {
      type: String,
      required: true
    },
    method: {
      type: String,
      default: "post"
    },
    action: {
      type: String,
      required: true
    },
    parseresponse: {
      type: Function,
      required: true
    },
    fileList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      url:
        "https://image.uisdc.com/wp-content/uploads/2019/04/uisdc-banner-20190421-3.jpg"
    };
  },
  methods: {
    onClickUpload() {
      let input = this.createInput();
      //listen to input

      input.addEventListener("change", () => {
        let file = input.files[0];
        this.uploadFile(file);
        input.remove();
      });
      //trigger click
      input.click();
    },
    createInput() {
      // create input
      const input = document.createElement("input");
      input.type = "file";
      this.$refs.inputFile.appendChild(input);
      return input;
    },
    doUploadFile(formData,success) {
      //success是回调函数
      //ajax
      let xhr = new XMLHttpRequest();
      xhr.open(this.method, this.action);
      xhr.onload = () => {
        success(xhr.response);
        //获取服务器的response
      };
      xhr.send(formData);
    },
    uploadFile(file) {
      //upload file
      this.beforeUploadFile(file)
      let formData = new FormData();
      formData.append(this.name, file);
      //console.log(file)
      let { name, size, type } = file;
      this.doUploadFile(formData,response => {
        this.url = this.parseresponse(response);
        while (this.fileList.filter(f => f.name === name).length > 0) {
          let dotIndex = name.lastIndexOf(".");
          let part1 = name.substring(0, dotIndex);
          let part2 = name.substring(dotIndex);
          name = part1 + "(1)" + part2;
        }
        this.afterLoadFile()
        this.$emit("update:fileList", [
          ...this.fileList,
          { name, type, size, url: this.url }
        ]);
      });
    },
    OnRemoveFile(file) {
      let answer = window.confirm("你确定要删除此文件吗");
      if (answer) {
        let copy = Array.from(this.fileList);
        //从此处删除一个
        copy.splice(copy.indexOf(file), 1);
        this.$emit("update:fileList", copy);
      }
    },
    beforeUploadFile(file){
        let { name, size, type } = file;
        this.$emit('update:fileList',[...fileList,{name,type,size,status:'uploading'}])
    },
    afterLoadFile(){
        
    }
  }
};
</script>
<style lang="scss" scoped>
.g-uploader {
  border: 1px solid #f66;
}
</style>
