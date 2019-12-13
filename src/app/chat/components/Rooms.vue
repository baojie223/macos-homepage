<template>
  <scroll class="rooms">
    <ul class="list">
      <li
        v-for="(item, i) in list"
        :key="item.id"
        class="item"
        :class="i === current ? 'active' : ''"
      >
        <el-avatar
          :size="50"
          :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
        ></el-avatar>
        <div class="text">
          <p>{{ item.from }}</p>
          <p>{{ item.msg[0] | ellipsis }}</p>
        </div>
        <div class="cover" @click="onSelect(i)"></div>
      </li>
    </ul>
  </scroll>
</template>

<script>
import BScroll from 'better-scroll'
const list = [
  {
    id: 1,
    from: 'baojie',
    msg: ['hello噢啊啊啊啊啊啊啊啊']
  },
  {
    id: 2,
    from: 'jack',
    msg: ['world']
  },
  {
    id: 3,
    from: '马云',
    msg: ['阿里是你的！']
  },
  {
    id: 4,
    from: '马化腾',
    msg: ['tencent也是你的！']
  },
  {
    id: 5,
    from: '刘德华',
    msg: ['ass we can']
  },
  {
    id: 6,
    from: '周杰伦',
    msg: ['塞纳河畔，左岸的咖啡A']
  },
  {
    id: 7,
    from: '刘德华',
    msg: ['ass we can']
  },
  {
    id: 8,
    from: '周杰伦',
    msg: ['塞纳河畔，左岸的咖啡A']
  }
]
export default {
  name: '',
  data() {
    return {
      list,
      current: -1,
      scroll: null
    }
  },
  methods: {
    onSelect(i) {
      this.current = i
      this.$store.dispatch('chat/setRoom', this.list[i])
    }
  },
  filters: {
    ellipsis(str) {
      const maxLength = 16
      // 双字节字符
      const doubleByte = /[^\x00-\xff]/
      const charList = str.split('')
      // console.log(charList)
      let byteLength = 0
      let result = ''
      for (let i = 0; i < charList.length; i++) {
        if (doubleByte.test(charList[i])) {
          byteLength += 2
        } else {
          byteLength += 1
        }
        if (byteLength > maxLength) {
          result += '...'
          break
        } else {
          result = result + charList[i]
        }
      }
      // console.log(result, byteLength)
      return result
    }
  }
}
</script>

<style lang="scss" scoped>
.rooms {
  background: #fff;
}
.list {
  position: relative;
  display: flex;
  flex-direction: column;
  .item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 80px;
    transition: all 0.3s ease;
    .text {
      width: 130px;
      height: 100%;
      p {
        padding-top: 15px;
        font-size: 16px;
      }
      p + p {
        font-size: 14px;
        color: $--color-text-regular;
      }
    }
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    &:hover {
      background: #f8f8f8;
    }
  }
  .active {
    background-color: #f8f8f8;
  }
  &::after {
    content: "";
    position: absolute;
    top: -50%;
    right: 0;
    transform: scaleY(0.5);
    width: 1px;
    height: 200%;
    background-color: #f2f6fc;
  }
}
</style>
