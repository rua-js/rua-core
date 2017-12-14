"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractRuaPackage = (function () {
    function AbstractRuaPackage() {
        this.isRuaPackage = true;
        this.booted = false;
        this.store = {};
    }
    AbstractRuaPackage.prototype.saveStore = function (store) {
        this.store = store;
        return this.store;
    };
    AbstractRuaPackage.prototype.resetStore = function () {
        var _this = this;
        var store = (function () {
            return _this.store;
        })();
        this.store = {};
        return store;
    };
    return AbstractRuaPackage;
}());
exports.default = AbstractRuaPackage;
