import RuaPackager from './RuaPackager'

// Note: IIFE used here
const packager = (() => {
  // global
  const global = (new Function('return this'))()
  // singleton
  if (global.__rua_packager) {
    return global.__rua_packager
  }

  global.__rua_packager = new RuaPackager()

  return global.__rua_packager
})()

export {
  packager
}