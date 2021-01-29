import Vuex from 'vuex';

export const store = new Vuex.Store({
  state: {
    isCollapse: false,
    drawer: false,
    isHorizontal: true,
    layouttype:''
  },

  mutations: {
    menuCollapse(state) {
      state.isCollapse = !state.isCollapse
    },
    drawerCollapse(state) {
      state.drawer = !state.drawer
    },
    chekcHorizontal(state) {
      state.isHorizontal = ! state.isHorizontal
    },
    checkLayout(state,event) {
      state.layouttype = event
      console.log(state.layouttype);
    }
    
  }
});