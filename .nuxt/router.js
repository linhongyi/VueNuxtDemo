import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f096455a = () => interopDefault(import('../pages/componentUsage.vue' /* webpackChunkName: "pages/componentUsage" */))
const _8b491ac8 = () => interopDefault(import('../pages/editor.vue' /* webpackChunkName: "pages/editor" */))
const _2636326d = () => interopDefault(import('../pages/eventTest.vue' /* webpackChunkName: "pages/eventTest" */))
const _602cae3b = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _1ff7ad0b = () => interopDefault(import('../pages/layoutTest.vue' /* webpackChunkName: "pages/layoutTest" */))
const _ec9facec = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _59a61bec = () => interopDefault(import('../pages/pageApi.vue' /* webpackChunkName: "pages/pageApi" */))
const _1e7365a3 = () => interopDefault(import('../pages/records.vue' /* webpackChunkName: "pages/records" */))
const _d0b70de4 = () => interopDefault(import('../pages/todos.vue' /* webpackChunkName: "pages/todos" */))
const _7feef31a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/componentUsage",
    component: _f096455a,
    name: "componentUsage"
  }, {
    path: "/editor",
    component: _8b491ac8,
    name: "editor"
  }, {
    path: "/eventTest",
    component: _2636326d,
    name: "eventTest"
  }, {
    path: "/inspire",
    component: _602cae3b,
    name: "inspire"
  }, {
    path: "/layoutTest",
    component: _1ff7ad0b,
    name: "layoutTest"
  }, {
    path: "/login",
    component: _ec9facec,
    name: "login"
  }, {
    path: "/pageApi",
    component: _59a61bec,
    name: "pageApi"
  }, {
    path: "/records",
    component: _1e7365a3,
    name: "records"
  }, {
    path: "/todos",
    component: _d0b70de4,
    name: "todos"
  }, {
    path: "/",
    component: _7feef31a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
