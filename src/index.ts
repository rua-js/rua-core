import RuaPackager from './RuaPackager'
// @ts-ignore
import * as global from 'global'

export const packager = ((): RuaPackager => {
  // required variables
  const path = '__rua_js_packager'

  // if packager is initialized then return it
  if (global[path]) {
    return global[path]
  }

  // return new instance of packager
  return global[path] = new RuaPackager()
})()
