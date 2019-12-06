import * as db from 'localforage'

const state = {
  bgColor: '',
  bgImg: ''
}
const mutations = {}
const actions = {
  getBg({ state }) {
    return db.getItem('bgColor').then(res => {
      console.log(res)
      state.bgColor = res
    })
  },
  setBg({ state }, color) {
    return db.setItem('bgColor', color || '#fff').then(res => {
      state.bgColor = res
    })
  },
  setBgImg({ state }, img) {
    db.setItem('bgImg', img || '').then(res => {
      state.bgImg = res
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}