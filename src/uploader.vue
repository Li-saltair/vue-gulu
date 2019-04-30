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
          <div>loading</div>
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
        this.uploadFile(input.files[0]);
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
    doUploadFile(formData, success,fail) {
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
    uploadFile(rawFile) {
      //upload file
      let newName = this.generateNewName(name)
      this.beforeUploadFile(rawFile,newName);
      let formData = new FormData();
      formData.append(this.name, rawFile);
      let { name, size, type } = rawFile;
      this.doUploadFile(formData, response => {
          let url = this.parseresponse(response);
        this.url = url
        this.afterLoadFile(newName,url)
      },()=>{
          this.uploadError(newName)
      });
    },
    generateNewName(name){
        while (this.fileList.filter(f => f.name === name).length > 0) {
          let dotIndex = name.lastIndexOf(".");
          let part1 = name.substring(0, dotIndex);
          let part2 = name.substring(dotIndex);
          name = part1 + "(1)" + part2;
        }
        return name
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
    beforeUploadFile(rawFile,newName,url) {
      let { size, type } = rawFile;
      this.$emit("update:fileList", [
        ...this.fileList,
        { name:newName, type, size, status: "uploading" }
      ]);
    },
    afterLoadFile(newName, url) {
      let file = this.fileList.filter(file => file.name === newName)[0];
      let index = this.fileList.indexOf(file);
      let copy = JSON.parse(JSON.stringify(file));
      copy.url = url;
      copy.status = "success";
      let fileListCopy = Array.from(this.fileList)
      fileListCopy.splice(index, 1, copy);
      this.$emit("update:fileList", fileListCopy);
    },
    uploadError(newName){
        let file = this.fileList.filter(file=>file.name === newName)[0]
        let copy = JSON.parse(JSON.stringify(file))
        copy.status = 'failed'
        let fileListCopy = Array.from(this.fileList)
        let index = this.fileList.indexOf(file)
        fileListCopy.splice(index,1,copy)
        this.$emit('update:fileList',fileListCopy)
    }
  }
};
</script>
<style lang="scss" scoped>
.g-uploader {
  border: 1px solid #f66;
}
</style>
