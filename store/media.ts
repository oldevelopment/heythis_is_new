import Vue from 'vue';
import { AsyncModule, wrapModule, module } from 'vuex-async-mutations';
import { ContentItem, Nullable } from '@/types';

type MediaState = {
  items: { [name: string]: ContentItem[] };
  selected: Nullable<ContentItem>;
  pending: number;
  isVisible: boolean;
};

const stateFactory = (): MediaState => ({
  items: {},
  selected: null,
  pending: 0,
  isVisible: false,
});

const mod: AsyncModule<MediaState, any> = {
  namespaced: true,

  state: stateFactory,

  async: true,

  mutations: {
    ...module.mutations,

    ['set:selected'](state, item: Nullable<ContentItem>) {
      state.selected = item;
      state.isVisible = !!item;
    },

    ['set:visibility'](state, visible: boolean) {
      state.isVisible = visible;

      if (!visible) {
        state.selected = null;
      }
    },
  },

  getters: {
    ...module.getters,

    ['get:items'](state) {
      return (name: string): ContentItem[] => state.items[name];
    },

    ['get:current'](_state, getters, rootState) {
      return getters['get:items'](rootState.route.params.id);
    },

    ['get:selected'](state) {
      return state.selected;
    },

    ['get:visibility'](state) {
      return state.isVisible;
    },
  },

  actions: {},

  actionsAsync: {},
};

export default wrapModule(mod);
