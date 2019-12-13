const state = {
  currentRoom: void 0
}
const mutations = {
  SET_ROOM(state, room) {
    state.currentRoom = room
  }
}
const actions = {
  setRoom({ commit }, room) {
    return new Promise(resolve => {
      commit('SET_ROOM', room)
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
