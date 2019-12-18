<template>
  <box app="markdown" class="markdown">
    <div class="operate">
      <el-input v-model="title" placeholder="请输入标题..." style="width: calc(50% - 8px)"></el-input>
      <div style="margin-left: auto">
        <el-button @click="exportMd">导出.md文件</el-button>
        <el-button @click="exportPdf">导出.pdf文件</el-button>
      </div>
    </div>
    <div class="main">
      <textarea v-model="input" class="bg in"></textarea>
      <div v-html="output" class="bg out md markdown-body" ref="out"></div>
    </div>
  </box>
</template>

<script>
const download = (blobUrl, name) => {
  const a = document.createElement('a')
  a.download = name
  a.href = blobUrl
  a.click()
}
import 'github-markdown-css/github-markdown.css'
import { postPdf } from '../../api/file'
import * as html2pdf from 'html2pdf.js'
import MarkdownIt from 'markdown-it'
export default {
  name: '',
  data() {
    return {
      title: '',
      input: '',
      output: '',
      md: null
    }
  },
  watch: {
    input: {
      handler(val, newVal) {
        this.output = this.md.render(val)
      }
    }
  },
  created() {
    this.md = new MarkdownIt()
  },
  methods: {
    exportMd() {
      const link = document.createElement('a')
      const blob = new Blob([this.input])
      // link.addEventListener('click', e => console.log(e))
      link.download = this.title + '.md'
      link.href = URL.createObjectURL(blob)
      link.click()
      link.remove()
    },
    async exportPdf() {
      try {
        await postPdf({ html: this.output })
        const a = document.createElement('a')
        a.href = `http://localhost:3000/api/file/pdf?title=${this.title}.pdf`
        a.click()
        a.remove()
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.markdown {
  display: flex;
  flex-direction: column;
}
.operate {
  display: flex;
  padding: 16px;
  padding-bottom: 0;
  // text-align: right;
}
.main {
  display: flex;
  height: 100%;
  padding: 16px;
  .bg {
    width: 50%;
    height: 100%;
    background: #fff;
    padding: 24px;
    box-sizing: border-box;
  }
  .in {
    margin-right: 8px;
    outline: none;
    border: none;
  }
  .out {
    margin-left: 8px;
    overflow: auto;
  }
}
</style>
