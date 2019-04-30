<template>
  <div class="g-uploader">
    <div @click="onClickUpload" ref="trigger">
      <slot></slot>
    </div>
    <div ref="inputFile" style="width:0;height:0;overflow:hidden"></div>
    <slot name="tips"></slot>
    <ol class="g-uploader-list">
      <li v-for="item in fileList" :key="item.name" class="g-uploader-list-unit">
        <template v-if="item.status === 'uploading'">
          <div class="g-uploader-list-unit-loading">
            <Icon name="loading" class="g-uploader-list-unit-loading-content"></Icon>
          </div>
        </template>
        <template v-else-if="item.type.indexOf('image') === 0">
          <img :src="item.url" alt="preview" width="50">
        </template>
        <template v-else>
          <div class="g-uploader-default-image"></div>
        </template>
        <span class="g-uploader-list-unit-filename" :class="item.status">{{item.name}}</span>

        <Icon name="delete" @click="OnRemoveFile(item)"></Icon>
      </li>
    </ol>
  </div>
</template>
<script>
import Icon from "./icon";
import Button from "./button/button";
export default {
  name: "Guploader",
  components: {
    Icon,
    'g-button':Button
  },
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
      //应该是一个占位符，考虑使用props接受一个尺寸显示一张图片
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
    doUploadFile(formData, success, fail) {
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
      let { name, size, type } = rawFile;
      let newName = this.generateNewName(name);
      this.beforeUploadFile(rawFile, newName);
      let formData = new FormData();
      formData.append(this.name, rawFile);
      this.doUploadFile(
        formData,
        response => {
          let url = this.parseresponse(response);
          this.url = url;
          this.afterLoadFile(newName, url);
        },
        () => {
          this.uploadError(newName);
        }
      );
    },
    generateNewName(name) {
      while (this.fileList.filter(f => f.name === name).length > 0) {
        let dotIndex = name.lastIndexOf(".");
        let part1 = name.substring(0, dotIndex);
        let part2 = name.substring(dotIndex);
        name = part1 + "(1)" + part2;
      }
      return name;
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
    beforeUploadFile(rawFile, newName) {
      let { size, type } = rawFile;
      this.$emit("update:fileList", [
        ...this.fileList,
        { name: newName, type, size, status: "uploading" }
      ]);
    },
    afterLoadFile(newName, url) {
      let file = this.fileList.filter(file => file.name === newName)[0];
      let index = this.fileList.indexOf(file);
      let copy = JSON.parse(JSON.stringify(file));
      copy.url = url;
      copy.status = "success";
      let fileListCopy = Array.from(this.fileList);
      fileListCopy.splice(index, 1, copy);
      this.$emit("update:fileList", fileListCopy);
    },
    uploadError(newName) {
      let file = this.fileList.filter(file => file.name === newName)[0];
      let copy = JSON.parse(JSON.stringify(file));
      copy.status = "failed";
      let fileListCopy = Array.from(this.fileList);
      let index = this.fileList.indexOf(file);
      fileListCopy.splice(index, 1, copy);
      this.$emit("update:fileList", fileListCopy);
    }
  }
};
</script>
<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-uploader {
  &-list {
    &-unit {
      display: flex;
      align-items: center;
      margin: 8px 0;
      > img {
        margin-right: 1em;
      }
      &-filename {
        &.success {
          color: #01c957;
        }
        &.failed {
          color: #c90101;
        }
      }
      &-default-image {
        border: 1px solid #ddd;
        width: 32px;
        height: 32px;
      }
      &-loading {
        &-content {
          fill: #597ef7;
          animation: spin 1s linear infinite;
        }
      }
    }
  }
  .icon{
      cursor:pointer;
      margin-left:2em;
      width:1.2em;
      height:1.2em;
      align-items:center;
  }
}
</style>
