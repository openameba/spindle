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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
function SvgMenuHamburgerFourline(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M19.99 6.04h-16c-.55 0-1-.45-1-1s.45-1 1-1h16c.55 0 1 .45 1 1s-.44 1-1 1zm1 3.64c0-.55-.45-1-1-1h-16c-.55 0-1 .45-1 1s.45 1 1 1h16c.56 0 1-.45 1-1zm0 4.64c0-.55-.45-1-1-1h-16c-.55 0-1 .45-1 1s.45 1 1 1h16c.56 0 1-.45 1-1zm0 4.64c0-.55-.45-1-1-1h-16c-.55 0-1 .45-1 1s.45 1 1 1h16c.56 0 1-.45 1-1z" })));
}
exports.default = SvgMenuHamburgerFourline;
//# sourceMappingURL=MenuHamburgerFourline.js.map