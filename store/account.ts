import { AsyncModule } from 'vuex-async-mutations';
import {
  Nullable, SocialUser, CreateUser, SignInUser
} from '@/types';

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
    async ['signUp']({ commit }, profile: CreateUser) {
      const user = await this.$axios.$post<SocialUser>('/signup', profile);

      commit('set:user', user);
    },

    async ['signIn']({ commit }, profile: SignInUser) {
      const user = await this.$axios.$post<SocialUser>('/login', profile);

      commit('set:user', user);
    },
  },
};

export default mod;
