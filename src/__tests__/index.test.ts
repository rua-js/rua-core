import { packager } from '../index'
import RuaPackager from '../RuaPackager'

describe('Packager Tests', () => {
  const global = Function('return this')()
  test('packager equals itself', () => {
    expect(packager).toBe(packager)
  })
  test('packager is instance of RuaPackager', () => {
    const newPackager = new RuaPackager()
    expect(packager).toEqual(newPackager)
    expect(typeof packager).toBe(typeof newPackager)
    expect(packager instanceof RuaPackager).toBeTruthy()
  })
  test('packager has correct property', () => {
    expect(packager).toHaveProperty('store', {})
    expect(packager.booted).toBeTruthy()
    expect(packager.register).toBeTruthy()
    expect(packager.registerIfNotRegistered).toBeTruthy()
    expect(packager.unregister).toBeTruthy()
  })
  test('packager is exposed to global', () => {
    expect(global).toHaveProperty('__rua_js_packager', packager)
  })
})
