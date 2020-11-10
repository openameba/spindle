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
function SvgPremiumFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 3H5.01c-1.1 0-2 .9-2 2v10.64c0 1.09.59 2.09 1.55 2.62l6 3.33c.91.5 2.01.5 2.91 0l5.99-3.33c.95-.53 1.54-1.53 1.54-2.62V5c0-1.1-.9-2-2-2zm-2.26 7.9l-2.12 2.04.57 2.93c.08.42-.38.75-.75.52L12 14.94 9.56 16.4c-.37.22-.83-.1-.75-.52l.57-2.93-2.12-2.05c-.3-.29-.13-.81.29-.86l2.83-.34 1.16-2.68c.17-.4.74-.4.92 0l1.16 2.68 2.83.34c.42.06.59.57.29.86z" })));
}
exports.default = SvgPremiumFill;
//# sourceMappingURL=PremiumFill.js.map