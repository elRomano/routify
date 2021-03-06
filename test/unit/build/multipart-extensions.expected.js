
/**
 * @sveltech/routify 1.0.6
 * File generated Sat Mar 14 2020 00:22:14 GMT+0100 (Central European Standard Time)
 */

//buildRoutes
import { buildRoutes } from "/home/eric/projects/routify/routify/runtime/buildRoutes"

//dynamic imports
import __layout from '/pages/_layout.svelte'
import _docs from '/pages/docs.page.svx'
import _foo__layout from '/pages/foo/_layout.page.svx'
import _foo_docs from '/pages/foo/docs.page.svx'
import _index from '/pages/index.svelte'

//keys
const keys = ["isFallback","isIndex","hasParam","path","component","layouts","meta","shortPath"]

//layouts
const layouts = {
  "/_layout": {
    "component": () => __layout,
    "meta": {},
    "relativeDir": "",
    "path": ""
  },
  "/foo/_layout": {
    "component": () => _foo__layout,
    "meta": {},
    "relativeDir": "/foo",
    "path": "/foo"
  }
}


//raw routes
const _routes = [
  {
    "component": () => _docs,
    "meta": {},
    "isIndex": false,
    "isFallback": false,
    "hasParam": false,
    "path": "/docs",
    "shortPath": "/docs",
    "layouts": [
      layouts['/_layout']
    ]
  },
  {
    "component": () => _foo_docs,
    "meta": {},
    "isIndex": false,
    "isFallback": false,
    "hasParam": false,
    "path": "/foo/docs",
    "shortPath": "/foo/docs",
    "layouts": [
      layouts['/_layout'],
      layouts['/foo/_layout']
    ]
  },
  {
    "component": () => _index,
    "meta": {},
    "isIndex": true,
    "isFallback": false,
    "hasParam": false,
    "path": "/index",
    "shortPath": "",
    "layouts": [
      layouts['/_layout']
    ]
  }
]

//options
export const options = {}

//routes
export const routes = buildRoutes(_routes, keys)
