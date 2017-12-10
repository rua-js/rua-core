import RuaPackager from '../RuaPackager'

describe('RuaPackager', () => {
  test('can be initialized correctly', () => {
    const instance = new RuaPackager()
    expect(instance).toBeTruthy()
    expect(instance.booted).toBeTruthy()
    expect(instance).toHaveProperty('store', {})
  })
  test('[register] works correctly', () => {
    const instance = new RuaPackager()
    const fakePackage = { isFake: true, identity: 'register' }
    const registeredFakePackage = instance.register('fake', fakePackage)
    expect(registeredFakePackage).toBe(fakePackage)
    expect(instance.getPackage('fake')).toBe(fakePackage)
  })
  test('[unregister] works correctly', () => {
    const instance = new RuaPackager()
    instance.register('fake', {})
    expect(instance.hasPackage('fake')).toBeTruthy()
    expect(instance.getPackage('fake')).toEqual({})
    instance.unregister('fake')
    expect(instance.getPackage('fake')).toBeFalsy()
  })
  test('[registerIfNotRegistered] works correctly', () => {
    let result;
    const instance = new RuaPackager()
    const fakePackage = { isFake: true, identity: 'registerIfNotRegistered' }
    const fakePackage2 = { isFake: true, identity: 'other' }
    result = instance.registerIfNotRegistered('fake', fakePackage)
    expect(result).toBe(fakePackage)
    result = instance.getPackage('fake')
    expect(result).toBe(fakePackage)
    result = instance.registerIfNotRegistered('fake', fakePackage2)
    expect(result).toBe(fakePackage)
    result = instance.getPackage('fake')
    expect(result).toBe(fakePackage)
  })
})