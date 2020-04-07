import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9a61a05a = () => interopDefault(import('../pages/p/_id/index.vue' /* webpackChunkName: "pages/p/_id/index" */))
const _0761fa03 = () => interopDefault(import('../pages/p/_id/ambassadors.vue' /* webpackChunkName: "pages/p/_id/ambassadors" */))
const _26127825 = () => interopDefault(import('../pages/p/_id/creatives.vue' /* webpackChunkName: "pages/p/_id/creatives" */))
const _8e340230 = () => interopDefault(import('../pages/p/_id/events.vue' /* webpackChunkName: "pages/p/_id/events" */))
const _6e5f949b = () => interopDefault(import('../pages/p/_id/places.vue' /* webpackChunkName: "pages/p/_id/places" */))
const _0980758b = () => interopDefault(import('../pages/p/_id/updates.vue' /* webpackChunkName: "pages/p/_id/updates" */))
const _1dcb61a7 = () => interopDefault(import('../pages/p/_id/videos.vue' /* webpackChunkName: "pages/p/_id/videos" */))
const _bebef9f2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _043a7b1c = () => interopDefault(import('../pages/_id/index.vue' /* webpackChunkName: "pages/_id/index" */))
const _0beb05a8 = () => interopDefault(import('../pages/_id/cms/index.vue' /* webpackChunkName: "pages/_id/cms/index" */))
const _52be56e6 = () => interopDefault(import('../pages/_id/cms/pagebuilder/header.vue' /* webpackChunkName: "pages/_id/cms/pagebuilder/header" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/p/:id?",
    component: _9a61a05a,
    name: "p-id"
  }, {
    path: "/p/:id?/ambassadors",
    component: _0761fa03,
    name: "p-id-ambassadors"
  }, {
    path: "/p/:id?/creatives",
    component: _26127825,
    name: "p-id-creatives"
  }, {
    path: "/p/:id?/events",
    component: _8e340230,
    name: "p-id-events"
  }, {
    path: "/p/:id?/places",
    component: _6e5f949b,
    name: "p-id-places"
  }, {
    path: "/p/:id?/updates",
    component: _0980758b,
    name: "p-id-updates"
  }, {
    path: "/p/:id?/videos",
    component: _1dcb61a7,
    name: "p-id-videos"
  }, {
    path: "/",
    component: _bebef9f2,
    name: "index"
  }, {
    path: "/:id",
    component: _043a7b1c,
    name: "id"
  }, {
    path: "/:id/cms",
    component: _0beb05a8,
    name: "id-cms"
  }, {
    path: "/:id/cms/pagebuilder/header",
    component: _52be56e6,
    name: "id-cms-pagebuilder-header"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
