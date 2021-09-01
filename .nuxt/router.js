import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5f138154 = () => interopDefault(import('..\\pages\\bus.vue' /* webpackChunkName: "pages/bus" */))
const _0875077e = () => interopDefault(import('..\\pages\\dest.vue' /* webpackChunkName: "pages/dest" */))
const _2cf036bd = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _6b3ca9d6 = () => interopDefault(import('..\\pages\\main.vue' /* webpackChunkName: "pages/main" */))
const _3e1d7fe2 = () => interopDefault(import('..\\pages\\mytickets.vue' /* webpackChunkName: "pages/mytickets" */))
const _44430cff = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _9cee8af8 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _8e281f8a = () => interopDefault(import('..\\pages\\tickets.vue' /* webpackChunkName: "pages/tickets" */))
const _ae9b2448 = () => interopDefault(import('..\\pages\\users.vue' /* webpackChunkName: "pages/users" */))
const _634893a6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/bus",
    component: _5f138154,
    name: "bus"
  }, {
    path: "/dest",
    component: _0875077e,
    name: "dest"
  }, {
    path: "/login",
    component: _2cf036bd,
    name: "login"
  }, {
    path: "/main",
    component: _6b3ca9d6,
    name: "main"
  }, {
    path: "/mytickets",
    component: _3e1d7fe2,
    name: "mytickets"
  }, {
    path: "/register",
    component: _44430cff,
    name: "register"
  }, {
    path: "/search",
    component: _9cee8af8,
    name: "search"
  }, {
    path: "/tickets",
    component: _8e281f8a,
    name: "tickets"
  }, {
    path: "/users",
    component: _ae9b2448,
    name: "users"
  }, {
    path: "/",
    component: _634893a6,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
