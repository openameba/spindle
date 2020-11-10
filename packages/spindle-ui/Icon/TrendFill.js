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
function SvgTrendFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M12.03 2C6.49 2 2 6.49 2 12.03c0 1.51.34 2.93.94 4.21l2.53-4.45c.36-.63 1.01-1.01 1.74-1.01s1.38.38 1.74 1.01l2.28 4.02 2.3-4.05-1.66-.79a.998.998 0 01-.08-1.76l4.38-2.6a1 1 0 011.5.72l.74 5.04c.12.79-.7 1.39-1.42 1.05l-1.64-.78-2.37 4.18c-.36.63-1.01 1.01-1.74 1.01s-1.38-.38-1.74-1.01L7.22 12.8l-3.1 5.39c1.84 2.35 4.69 3.87 7.91 3.87 5.54 0 10.03-4.49 10.03-10.03C22.06 6.49 17.57 2 12.03 2z" })));
}
exports.default = SvgTrendFill;
//# sourceMappingURL=TrendFill.js.map