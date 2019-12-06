<template>
  <universal-container app="bg-setting">
    <div class="main">
      <div>
        <span>背景色：</span>
        <el-color-picker v-model="color" @change="onColorChange"></el-color-picker>
      </div>
      <div>
        <span>背景图片：</span>
        <img :src="bgImg" style="max-width: 100px; max-height: 100px" />
        <el-button @click="() => show = true">选择图片</el-button>
        <my-upload
          field="img"
          @crop-success="cropSuccess"
          v-model="show"
          :width="1920"
          :height="1080"
          img-format="png"
        ></my-upload>
      </div>
    </div>
  </universal-container>
</template>

<script>
import MyUpload from 'vue-image-crop-upload'
export default {
  name: '',
  components: {
    MyUpload
  },
  data() {
    return {
      color: '#409EFF',
      show: false,
      bgImg: ''
    }
  },
  created() {
    this.color = this.$store.state.bgColor
  },
  methods: {
    onColorChange(color) {
      this.$store.dispatch('settings/setBg', color)
    },
    cropSuccess(img) {
      // console.log(jsonData, field)
      this.bgImg = img
      this.$store.dispatch('settings/setBgImg', img)
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding: 16px;
}
</style>
