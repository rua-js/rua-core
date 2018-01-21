import RuaPackager from '../RuaPackager'

describe('RuaPackager', () => {
  const fakePackage = { isFake: true, isRuaPackage: true }
  const fakePackage2 = { isFake: true, isRuaPackage: true }
  test('can be initialized correctly', () => {
    const packager = new RuaPackager()
    expect(packager).toBeTruthy()
    expect(packager.booted).toBeTruthy()
    expect(packager).toHaveProperty('store', {})
  })
  test('[register] works correctly', () => {
    const packager = new RuaPackager()
    const registeredFakePackage = packager.register('fake', fakePackage)
    expect(registeredFakePackage).toBe(fakePackage)
    expect(packager.getPackage('fake')).toBe(fakePackage)
  })
  test('[unregister] works correctly', () => {
    const packager = new RuaPackager()
    packager.register('fake', fakePackage)
    expect(packager.hasPackage('fake')).toBeTruthy()
    expect(packager.getPackage('fake')).toEqual({ isFake: true, isRuaPackage: true })
    packager.unregister('fake')
    expect(packager.getPackage('fake')).toBeFalsy()
  })
  test('[registerIfNotRegistered] works correctly', () => {
    let result;
    const packager = new RuaPackager()
    result = packager.registerIfNotRegistered('fake', fakePackage)
    expect(result).toBe(fakePackage)
    result = packager.getPackage('fake')
    expect(result).toBe(fakePackage)
    result = packager.registerIfNotRegistered('fake', fakePackage2)
    expect(result).toBe(fakePackage)
    result = packager.getPackage('fake')
    expect(result).toBe(fakePackage)
  })
  test('only correct Rua-Package can be registered', () => {

  })
})