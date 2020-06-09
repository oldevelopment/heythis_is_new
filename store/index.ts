import { AsyncModule } from 'vuex-async-mutations';

export default {
  actions: {
    async nuxtServerInit({ commit }, { req }) {
      commit('account/set:user', req.user);
    },
  },
} as AsyncModule<any, any>;
