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
function SvgBell(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M20 15l-.6-.8c-.26-.34-.4-.77-.4-1.2v-2.75c0-3.38-2.31-6.28-5.37-7.05C13.27 2.46 12.7 2 12 2c-.69 0-1.27.46-1.62 1.19-1.22.29-2.33.89-3.25 1.79A6.903 6.903 0 005 10v3c0 .43-.14.86-.4 1.2L4 15c-.57.76-.66 1.77-.24 2.62C4.19 18.47 5.05 19 6 19h12c.95 0 1.81-.53 2.24-1.38.42-.85.33-1.86-.24-2.62zm-1.55 1.72A.48.48 0 0118 17H6a.48.48 0 01-.45-.28c-.04-.08-.12-.3.05-.52l.6-.8c.52-.69.8-1.54.8-2.4v-3c0-1.36.54-2.64 1.52-3.59C9.46 5.5 10.69 5 12 5h.16c2.67.08 4.84 2.44 4.84 5.25V13c0 .86.28 1.71.8 2.4l.6.8c.17.22.09.44.05.52zM13.73 20c.39 0 .63.43.43.76C13.72 21.5 12.92 22 12 22c-.92 0-1.72-.5-2.16-1.24-.2-.33.04-.76.43-.76h3.46z" })));
}
exports.default = SvgBell;
//# sourceMappingURL=Bell.js.map