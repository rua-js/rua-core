"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RuaPackager_1 = require("./RuaPackager");
var packager = (function () {
    var global = (new Function('return this'))();
    if (global.__rua_packager) {
        return global.__rua_packager;
    }
    global.__rua_packager = new RuaPackager_1.default();
    return global.__rua_packager;
})();
exports.packager = packager;
