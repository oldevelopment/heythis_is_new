import Vue from 'vue';
import { AsyncModule, wrapModule, module } from 'vuex-async-mutations';
import { Portal } from '@/types';

type PortalState = {
  portals: { [name: string]: Portal };
  pending: number;
};

const stateFactory = (): PortalState => ({
  portals: {},
  pending: 0,
});

const mod: AsyncModule<PortalState, any> = {
  namespaced: true,

  state: stateFactory,

  async: true,

  mutations: {
    ...module.mutations,
  },

  getters: {
    ...module.getters,

    ['get:portal'](state) {
      return (name: string): Portal => state.portals[name];
    },

    ['get:current'](_state, getters, rootState) {
      return getters['get:portal'](rootState.route.params.id);
    },
  },

  actions: {
    ['fetch:current']({ dispatch, rootState }) {
      if (rootState.route.params.id) {
        return dispatch('fetch:portal', rootState.route.params.id);
      }
    },
  },

  actionsAsync: {
    ['fetch:portal']: {
      handler({ state, commitAsync }, name: string) {
        if (state.portals[name]) {
          return Promise.resolve(state.portals[name]);
        }

        return commitAsync(
          this.$axios.$get(
            `https://europe-west1-heythisis-api.cloudfunctions.net/api/sites/${name}`,
          ),
          name,
        );
      },

      resolved(state, portal: Portal, name: string) {
        Vue.set(state.portals, name, { ...portal, site: name });
      },
    },
  },
};

export default wrapModule(mod);
