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
function SvgLineCircle(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-3.35-.6C18.65 8.42 15.67 6 12 6c-3.67 0-6.65 2.42-6.65 5.4 0 2.67 2.37 4.9 5.56 5.33.22.05.51.14.59.33.07.17.04.43.02.6 0 0-.08.47-.09.57-.03.17-.13.66.58.36.71-.3 3.83-2.26 5.23-3.86.95-1.07 1.41-2.14 1.41-3.33zm-8-1.44h-.47c-.07 0-.13.06-.13.13v2.9c0 .07.06.13.13.13h.47c.07 0 .13-.06.13-.13v-2.9c0-.07-.06-.13-.13-.13zm3.21 0h-.47c-.07 0-.13.06-.13.13v1.72l-1.33-1.79-.01-.01-.01-.01-.01-.01h-.55c-.07 0-.13.06-.13.13v2.9c0 .07.06.13.13.13h.47c.07 0 .13-.06.13-.13V11.3l1.33 1.8.03.03h.54c.07 0 .13-.06.13-.13v-2.9a.122.122 0 00-.12-.14zm-4.34 2.43H8.26v-2.3c0-.07-.06-.13-.13-.13h-.47c-.07 0-.13.06-.13.13v2.9c0 .03.01.07.04.09.02.02.05.04.09.04h1.86c.07 0 .13-.06.13-.13v-.47c0-.07-.05-.13-.13-.13zm6.92-1.7c.07 0 .13-.06.13-.13v-.47c0-.07-.06-.13-.13-.13h-1.86c-.03 0-.07.01-.09.04-.02.02-.04.05-.04.09v2.9c0 .03.01.07.04.09.02.02.05.04.09.04h1.86c.07 0 .13-.06.13-.13v-.47c0-.07-.06-.13-.13-.13h-1.27v-.49h1.27c.07 0 .13-.06.13-.13v-.47c0-.07-.06-.13-.13-.13h-1.27v-.49h1.27v.01z" })));
}
exports.default = SvgLineCircle;
//# sourceMappingURL=LineCircle.js.map