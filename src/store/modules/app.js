const state = {
  activeApps: []
}

const mutations = {
  ADD_APP(state, app) {
    state.activeApps = state.activeApps.concat(app)
  },
  DEL_APP(state, app) {
    state.activeApps = state.activeApps.filter(item => item !==app)
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}