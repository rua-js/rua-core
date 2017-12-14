"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RuaPackager_1 = require("../RuaPackager");
describe('RuaPackager', function () {
    test('can be initialized correctly', function () {
        var instance = new RuaPackager_1.default();
        expect(instance).toBeTruthy();
        expect(instance.booted).toBeTruthy();
        expect(instance).toHaveProperty('store', {});
    });
    test('[register] works correctly', function () {
        var instance = new RuaPackager_1.default();
        var fakePackage = { isFake: true, identity: 'register' };
        var registeredFakePackage = instance.register('fake', fakePackage);
        expect(registeredFakePackage).toBe(fakePackage);
        expect(instance.getPackage('fake')).toBe(fakePackage);
    });
    test('[unregister] works correctly', function () {
        var instance = new RuaPackager_1.default();
        instance.register('fake', {});
        expect(instance.hasPackage('fake')).toBeTruthy();
        expect(instance.getPackage('fake')).toEqual({});
        instance.unregister('fake');
        expect(instance.getPackage('fake')).toBeFalsy();
    });
    test('[registerIfNotRegistered] works correctly', function () {
        var result;
        var instance = new RuaPackager_1.default();
        var fakePackage = { isFake: true, identity: 'registerIfNotRegistered' };
        var fakePackage2 = { isFake: true, identity: 'other' };
        result = instance.registerIfNotRegistered('fake', fakePackage);
        expect(result).toBe(fakePackage);
        result = instance.getPackage('fake');
        expect(result).toBe(fakePackage);
        result = instance.registerIfNotRegistered('fake', fakePackage2);
        expect(result).toBe(fakePackage);
        result = instance.getPackage('fake');
        expect(result).toBe(fakePackage);
    });
});
