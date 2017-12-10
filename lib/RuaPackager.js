"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RuaPackager = (function () {
    function RuaPackager() {
        this.store = {};
        this.booted = false;
        this.booted = true;
    }
    RuaPackager.prototype.getStore = function () {
        return this.store;
    };
    RuaPackager.prototype.getPackage = function (name) {
        return this.store[name];
    };
    RuaPackager.prototype.hasPackage = function (name) {
        return !!this.store[name];
    };
    RuaPackager.prototype.register = function (name, module) {
        this.store[name] = module;
        return this.store[name];
    };
    RuaPackager.prototype.unregister = function (name) {
        delete this.store[name];
        return !this.store[name];
    };
    RuaPackager.prototype.registerIfNotRegistered = function (name, module) {
        if (this.hasPackage(name)) {
            return this.getPackage(name);
        }
        return this.register(name, module);
    };
    return RuaPackager;
}());
exports.default = RuaPackager;
