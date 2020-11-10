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
function SvgLink(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M21.27 7.68c0 1.07-.42 2.07-1.17 2.83l-4.16 4.16c-.84.84-1.96 1.27-3.05 1.27-.89 0-1.77-.29-2.48-.88-.51-.41-.9-.96-1.15-1.56a.998.998 0 01.55-1.3c.51-.21 1.1.04 1.3.55.12.31.32.57.58.79.78.65 2.03.53 2.83-.28l4.16-4.16a1.983 1.983 0 000-2.82c-.76-.76-2.07-.76-2.83 0L14.6 7.53a.996.996 0 11-1.41-1.41l1.26-1.26c1.51-1.51 4.15-1.51 5.66 0 .75.75 1.16 1.76 1.16 2.82zM9.4 16.47l-1.26 1.26c-.76.76-2.07.76-2.83 0a1.983 1.983 0 010-2.82l4.17-4.17c.77-.77 1.98-.91 2.75-.32.3.23.52.51.65.85a.998.998 0 101.85-.75c-.27-.66-.71-1.24-1.29-1.68-1.58-1.21-3.89-.99-5.39.51L3.9 13.49c-.76.75-1.17 1.76-1.17 2.83s.42 2.07 1.17 2.83c.76.76 1.76 1.17 2.83 1.17s2.07-.42 2.83-1.17l1.26-1.26a.996.996 0 000-1.41c-.39-.39-1.03-.4-1.42-.01z" })));
}
exports.default = SvgLink;
//# sourceMappingURL=Link.js.map