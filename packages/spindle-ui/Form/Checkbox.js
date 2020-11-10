"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
var react_1 = __importDefault(require("react"));
var BLOCK_NAME = 'spui-Checkbox';
exports.Checkbox = function (_a) {
    var children = _a.children, _b = _a.id, id = _b === void 0 ? '' : _b, rest = __rest(_a, ["children", "id"]);
    return (react_1.default.createElement("label", { className: BLOCK_NAME + "-label", htmlFor: id },
        react_1.default.createElement("input", __assign({ className: BLOCK_NAME + "-input", id: id, type: "checkbox" }, rest)),
        react_1.default.createElement("span", { className: BLOCK_NAME + "-icon" }),
        react_1.default.createElement("span", { className: BLOCK_NAME + "-outline" }),
        children));
};
//# sourceMappingURL=Checkbox.js.map