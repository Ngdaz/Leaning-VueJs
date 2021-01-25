import Vuex from 'vuex';

export const store = new Vuex.Store({
    state: {
      safelyStoredNumber: 0,
      isCollapse: false,
    },

    mutations: {
        menuCollapse(state){
            state.isCollapse = !state.isCollapse
        }
    }
  });