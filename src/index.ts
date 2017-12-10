import RuaPackager from './RuaPackager'

const packager = (() => {
  // required variables
  const workspace = Function('return this')()
  const path = '__rua_js_packager'

  // if packager is initialized then return it
  if (workspace[path]) {
    return workspace[path]
  }

  // return new instance of packager
  return workspace[path] = new RuaPackager()
})

export {
  packager,
}