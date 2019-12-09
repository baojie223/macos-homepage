<template>
  <universal-container>
    <div>
      <el-button @click="onRoomsShow">rooms</el-button>
      <el-button @click="onContactsShow">contacts</el-button>
    </div>
    <div class="chat">
      <div class="left">
        <component :is="leftBar"></component>
      </div>
      <div class="right"></div>
    </div>
  </universal-container>
</template>

<script>
import Contacts from './components/Contacts'
import Rooms from './components/Rooms'
export default {
  name: '',
  components: {
    Contacts,
    Rooms
  },
  data() {
    return {
      leftBar: 'rooms'
    }
  },
  methods: {
    onRoomsShow() {
      this.leftBar = 'rooms'
    },
    onContactsShow() {
      this.leftBar = 'contacts'
    }
  }
}
</script>

<style lang="scss" scoped>
.chat {
  display: flex;
  height: 100%;
  .left {
    width: 200px;
    background-color: red;
  }
  .right {
    background-color: blue;
  }
}
</style>
