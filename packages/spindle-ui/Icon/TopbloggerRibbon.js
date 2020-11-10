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
function SvgTopbloggerRibbon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M20.95 19.44c.18.31-.1.67-.45.58l-1.83-.48a.5.5 0 00-.61.35l-.49 1.81c-.09.34-.56.4-.73.1l-3.11-5.36a8.449 8.449 0 004.18-2.24l3.04 5.24zm-17.44.58l1.83-.49a.5.5 0 01.61.35l.49 1.82c.09.34.56.4.73.1l3.11-5.35a8.449 8.449 0 01-4.18-2.24l-3.04 5.24c-.18.3.1.66.45.57zm14.8-11.74c0 3.47-2.83 6.28-6.31 6.28-3.48 0-6.31-2.81-6.31-6.28S8.51 2 12 2c3.49 0 6.31 2.81 6.31 6.28zm-2.75-1.73l-2.1-.24-.88-1.91c-.23-.5-.94-.5-1.17 0l-.87 1.91-2.1.24c-.55.06-.77.73-.36 1.1l1.56 1.42-.42 2.06c-.11.54.47.95.95.68L12 10.78l1.84 1.04c.48.27 1.06-.15.95-.68l-.42-2.06 1.56-1.42c.4-.38.18-1.05-.37-1.11z" })));
}
exports.default = SvgTopbloggerRibbon;
//# sourceMappingURL=TopbloggerRibbon.js.map