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
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var BLOCK_NAME = 'spui-Button';
exports.Button = function (_a) {
    var children = _a.children, _b = _a.layout, layout = _b === void 0 ? 'intrinsic' : _b, _c = _a.size, size = _c === void 0 ? 'large' : _c, _d = _a.variant, variant = _d === void 0 ? 'contained' : _d, icon = _a.icon, rest = __rest(_a, ["children", "layout", "size", "variant", "icon"]);
    return (react_1.default.createElement("button", __assign({ className: BLOCK_NAME + " " + BLOCK_NAME + "--" + layout + " " + BLOCK_NAME + "--" + size + " " + BLOCK_NAME + "--" + variant }, rest), icon ? (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", { className: BLOCK_NAME + "-icon " + BLOCK_NAME + "-icon--" + size }, icon),
        children)) : (children)));
};
//# sourceMappingURL=Button.js.map