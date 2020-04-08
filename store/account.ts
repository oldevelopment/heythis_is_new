import { AsyncModule } from 'vuex-async-mutations';
import { Nullable, SocialUser } from '@/types';

type AccountState = {
  user: Nullable<SocialUser>;
};

const stateFactory = (): AccountState => ({ user: null });

const mod: AsyncModule<AccountState, any> = {
  namespaced: true,

  state: stateFactory,

  async: true,

  mutations: {
    ['set:user'](state, user: SocialUser) {
      state.user = user;
    },

    ['signOut'](state) {
      state.user = null;
    },
  },

  getters: {
    ['isAuthenticated'](state) {
      return !!state.user;
    },
  },

  actions: {
    async ['signOut']({ commit }) {
      console.log('signOut?');
      // await this.$axios.post('/signOut');

      // commit('signOut');
    },
  },
};

export default mod;
