import Vue from 'vue';
import { AsyncModule, wrapModule, module } from 'vuex-async-mutations';
import { PortalSettings } from '@/types';

type PortalSettingsState = {
  settings: { [name: string]: PortalSettings };
  pending: number;
};

const stateFactory = (): PortalSettingsState => ({
  settings: {},
  pending: 0,
});

const settingsFactory = (): PortalSettings => ({
  header: {
    type: 'text-only',
  },
});

const mod: AsyncModule<PortalSettingsState, any> = {
  namespaced: true,

  state: stateFactory,

  async: true,

  mutations: {
    ...module.mutations,

    ['update'](state, { name, settings }: { name: string; settings: PortalSettings }) {
      state.settings[name] = settings;
    },
  },

  getters: {
    ...module.getters,

    ['get:settings'](state) {
      return (name: string): PortalSettings => state.settings[name];
    },

    ['get:current'](_state, getters, rootState) {
      return getters['get:settings'](rootState.route.params.id);
    },
  },

  actions: {
    ['fetch:current']({ dispatch, rootState }) {
      if (rootState.route.params.id) {
        return dispatch('fetch:settings', rootState.route.params.id);
      }
    },
  },

  actionsAsync: {
    ['update:settings']: {
      handler({ commitAsync }, { name, settings }: { name: string; settings: PortalSettings }) {
        return commitAsync(Promise.resolve(settings), name);
      },

      resolved(state, settings: PortalSettings, name: string) {
        Vue.set(state.settings, name, settings);
      },
    },

    ['fetch:settings']: {
      handler({ state, commitAsync }, name: string) {
        if (state.settings[name]) {
          return Promise.resolve(state.settings[name]);
        }

        return commitAsync(Promise.resolve(settingsFactory()), name);
      },

      resolved(state, settings: PortalSettings, name: string) {
        Vue.set(state.settings, name, settings);
      },
    },
  },
};

export default wrapModule(mod);
