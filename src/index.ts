import RuaPackager from './RuaPackager'
// @ts-ignore
import * as root from 'global'

export const packager = ((): RuaPackager => {

  // required variables
  const path = '__rua_js_packager'

  // if packager is initialized then return it
  if (root[path]) {
    return root[path]
  }

  // return new instance of packager
  return root[path] = new RuaPackager()
})()
