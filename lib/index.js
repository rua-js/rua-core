"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RuaPackager_1 = require("./RuaPackager");
var packager = (function () {
    var workspace = Function('return this')();
    var path = '__rua_js_packager';
    if (workspace[path]) {
        return workspace[path];
    }
    return workspace[path] = new RuaPackager_1.default();
})();
exports.packager = packager;
