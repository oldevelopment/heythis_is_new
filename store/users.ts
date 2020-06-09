import { AsyncModule, wrapModule, module } from 'vuex-async-mutations';
import { UserProfile } from '@/types';

type UsersState = {
  users: UserProfile[];
  pending: number;
};

type UserParams = {
  city?: string;
  profession?: string;
  genre?: string;
};

const stateFactory = (): UsersState => ({ users: [], pending: 0 });

const mod: AsyncModule<UsersState, any> = {
  namespaced: true,

  state: stateFactory,

  async: true,

  mutations: {
    ...module.mutations,
  },

  getters: {
    ...module.mutations,

    'get:bySite'(state) {
      return (site: string) => state.users.find((user) => user.site === site);
    },
  },

  actionsAsync: {
    fetch: {
      handler({ state, commitAsync }, params?: UserParams) {
        if (state.users.length) {
          return Promise.resolve(state.users);
        }

        return commitAsync(this.$axios.$get<UserProfile[]>('https://europe-west1-heythisis-api.cloudfunctions.net/api/users',
          { params },),
        params,);
      },

      resolved(state, users: UserProfile[]) {
        state.users = users;
      },
    },

    ['fetch:latest']: {
      handler({ state, commitAsync }) {
        if (state.users.length) {
          return Promise.resolve(state.users);
        }

        return commitAsync(this.$axios.$get<UserProfile[]>('https://europe-west1-heythisis-api.cloudfunctions.net/api/users/new',),);
      },

      resolved(state, users: UserProfile[]) {
        state.users = users;
      },
    },

    async 'fetch:bySite'({ dispatch, getters }, site: string) {
      await dispatch('fetch');

      return getters['get:bySite'](site);
    },
  },
};

export default wrapModule(mod);
