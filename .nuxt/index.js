import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_workbox_a8e631da from 'nuxt_plugin_workbox_a8e631da' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_nuxticons_584d5ff1 from 'nuxt_plugin_nuxticons_584d5ff1' // Source: ./nuxt-icons.js (mode: 'all')
import nuxt_plugin_plugin_0c7e106d from 'nuxt_plugin_plugin_0c7e106d' // Source: ./vuetify/plugin.js (mode: 'all')
import nuxt_plugin_nuxtvuexroutersync_5bcf7e9f from 'nuxt_plugin_nuxtvuexroutersync_5bcf7e9f' // Source: ./nuxt-vuex-router-sync.js (mode: 'all')
import nuxt_plugin_axios_7962f892 from 'nuxt_plugin_axios_7962f892' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_lineclamp_04f83a91 from 'nuxt_plugin_lineclamp_04f83a91' // Source: ../plugins/lineclamp (mode: 'client')
import nuxt_plugin_moment_4f74a614 from 'nuxt_plugin_moment_4f74a614' // Source: ../plugins/moment (mode: 'all')
import nuxt_plugin_youtube_a89b4226 from 'nuxt_plugin_youtube_a89b4226' // Source: ../plugins/youtube (mode: 'client')
import nuxt_plugin_vuemasonry_087bf870 from 'nuxt_plugin_vuemasonry_087bf870' // Source: ../plugins/vue-masonry (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp (ssrContext) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  const registerModule = store.registerModule
  store.registerModule = (path, rawModule, options) => registerModule.call(store, path, rawModule, Object.assign({ preserveState: process.client }, options))

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"titleTemplate":"%s - hackathon-starter","title":"hackathon-starter","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"A boilerplate for Node.js web applications"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"hackathon-starter"},{"hid":"author","name":"author","content":"Sahat Yalkabov"},{"hid":"theme-color","name":"theme-color","content":"#fff"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"hackathon-starter"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"hackathon-starter"},{"hid":"og:description","name":"og:description","property":"og:description","content":"A boilerplate for Node.js web applications"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.385e59e3.json"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64.5f6a36.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512.5f6a36.png","sizes":"512x512"}],"style":[],"script":[],"htmlAttrs":{"lang":"en"}},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  const inject = function (key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Plugin execution

  if (process.client && typeof nuxt_plugin_workbox_a8e631da === 'function') {
    await nuxt_plugin_workbox_a8e631da(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxticons_584d5ff1 === 'function') {
    await nuxt_plugin_nuxticons_584d5ff1(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_0c7e106d === 'function') {
    await nuxt_plugin_plugin_0c7e106d(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtvuexroutersync_5bcf7e9f === 'function') {
    await nuxt_plugin_nuxtvuexroutersync_5bcf7e9f(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_7962f892 === 'function') {
    await nuxt_plugin_axios_7962f892(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_lineclamp_04f83a91 === 'function') {
    await nuxt_plugin_lineclamp_04f83a91(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_4f74a614 === 'function') {
    await nuxt_plugin_moment_4f74a614(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_youtube_a89b4226 === 'function') {
    await nuxt_plugin_youtube_a89b4226(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuemasonry_087bf870 === 'function') {
    await nuxt_plugin_vuemasonry_087bf870(app.context, inject)
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
