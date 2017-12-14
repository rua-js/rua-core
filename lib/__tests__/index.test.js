"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var RuaPackager_1 = require("../RuaPackager");
describe('Packager Tests', function () {
    var global = Function('return this')();
    test('packager equals itself', function () {
        expect(index_1.packager).toBe(index_1.packager);
    });
    test('packager is instance of RuaPackager', function () {
        var newPackager = new RuaPackager_1.default();
        expect(index_1.packager).toEqual(newPackager);
        expect(typeof index_1.packager).toBe(typeof newPackager);
        expect(index_1.packager instanceof RuaPackager_1.default).toBeTruthy();
    });
    test('packager has correct property', function () {
        expect(index_1.packager).toHaveProperty('store', {});
        expect(index_1.packager.booted).toBeTruthy();
        expect(index_1.packager.register).toBeTruthy();
        expect(index_1.packager.registerIfNotRegistered).toBeTruthy();
        expect(index_1.packager.unregister).toBeTruthy();
    });
    test('packager is exposed to global', function () {
        expect(global).toHaveProperty('__rua_js_packager', index_1.packager);
    });
});
