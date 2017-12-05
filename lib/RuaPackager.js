"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var invariant_1 = require("invariant");
var AbstractPackager_1 = require("./abstractions/AbstractPackager");
var RuaPackager = (function (_super) {
    __extends(RuaPackager, _super);
    function RuaPackager() {
        var _this = _super.call(this) || this;
        _this.global = undefined;
        _this.workspace = undefined;
        _this.booted = false;
        _this.mountingPath = '__rua_js_workspace';
        _this.bootIfNotBooted();
        return _this;
    }
    RuaPackager.prototype.bootIfNotBooted = function () {
        if (this.booted) {
            return true;
        }
        this.global = RuaPackager.getGlobal();
        this.initWorkspace();
        this.booted = true;
        return this.booted;
    };
    RuaPackager.prototype.initWorkspace = function () {
        invariant_1.default(this.global, '[Rua.js][Core]Global Is Not Found');
        this.workspace[this.mountingPath] = {};
        return true;
    };
    RuaPackager.prototype.isRegistered = function (name) {
        return !!this.workspace[name];
    };
    RuaPackager.prototype.register = function (name, module) {
        this.workspace[name] = module;
        return true;
    };
    RuaPackager.prototype.registerIfNotRegistered = function (name, module) {
        if (this.isRegistered(name)) {
            return true;
        }
        return this.register(name, module);
    };
    RuaPackager.prototype.getWorkspace = function () {
        return this.workspace;
    };
    RuaPackager.prototype.getPackage = function (name) {
        return this.workspace[name];
    };
    RuaPackager.getGlobal = function () {
        return (new Function('return this'))();
    };
    return RuaPackager;
}(AbstractPackager_1.default));
exports.default = RuaPackager;
