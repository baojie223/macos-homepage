<template>
  <box app="chat">
    <!-- <div>
      <el-button @click="onRoomsShow">rooms</el-button>
      <el-button @click="onContactsShow">contacts</el-button>
    </div>-->
    <div class="chat">
      <div class="left">
        <component :is="leftBar"></component>
      </div>
      <div class="right">
        <empty v-if="typeof currentRoom === 'undefined'"></empty>
        <dialogue v-else></dialogue>
      </div>
    </div>
  </box>
</template>

<script>
import { mapGetters } from 'vuex'
import Contacts from './components/Contacts'
import Rooms from './components/Rooms'
import Dialogue from './components/Dialogue'
export default {
  name: '',
  components: {
    Contacts,
    Rooms,
    Dialogue
  },
  data() {
    return {
      leftBar: 'rooms'
    }
  },
  computed: {
    ...mapGetters(['currentRoom'])
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
    flex: none;
    width: 240px;
    // background-color: red;
  }
  .right {
    width: 100%;
    // background-color: blue;
  }
}
</style>
