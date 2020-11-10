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
function SvgEmbed(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M4.44 11.7c-.12.17-.12.41 0 .58l3.38 4.75c.32.45.21 1.07-.24 1.39-.17.14-.38.2-.58.2-.31 0-.62-.15-.82-.42L2.8 13.45c-.62-.87-.62-2.03 0-2.9L6.19 5.8c.32-.45.94-.55 1.4-.23.45.32.55.95.23 1.39L4.44 11.7zm16.75-1.14L17.81 5.8a.996.996 0 00-1.39-.24c-.45.32-.56.94-.24 1.39l3.38 4.75c.12.17.12.41 0 .58l-3.38 4.74a.994.994 0 00.23 1.39c.18.12.38.19.58.19.31 0 .62-.15.82-.42l3.38-4.74c.62-.85.62-2.02 0-2.88zm-6.16.44h-2V9c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1v-2h2c.55 0 1-.45 1-1s-.45-1-1-1z" })));
}
exports.default = SvgEmbed;
//# sourceMappingURL=Embed.js.map