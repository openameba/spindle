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
function SvgSprout(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.98 11.53c-1.88 1.7-4.45 2.75-5.99 2.03V20c0 .55-.45 1-1 1s-1-.45-1-1v-6.45c-1.54.74-4.12-.32-6-2.02-2.15-1.93-2.52-4.31-1.3-5.66 1.22-1.35 3.56-1.16 5.7.77 1.26 1.13 2.25 2.68 2.59 4.06.34-1.38 1.34-2.93 2.59-4.06 2.14-1.93 4.49-2.12 5.7-.77 1.23 1.35.85 3.73-1.29 5.66z" })));
}
exports.default = SvgSprout;
//# sourceMappingURL=Sprout.js.map