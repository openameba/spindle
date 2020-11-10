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
function SvgBookFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M19.04 3.66l2.36 1.05c.37.16.6.52.6.92v13.15c0 1.14-1.23 1.87-2.23 1.31l-.48-.26a5.512 5.512 0 00-5.5.09l-.04.02c-.33.2-.75-.04-.75-.43V4.84c0-.18.09-.34.24-.43l.74-.44a5.494 5.494 0 015.06-.31zM2 5.63v13.15c0 1.14 1.23 1.87 2.23 1.31l.47-.26c1.72-.95 3.81-.92 5.5.09l.04.02c.33.2.76-.04.76-.43V4.84c0-.18-.09-.34-.24-.43l-.74-.44a5.494 5.494 0 00-5.06-.31L2.59 4.71c-.36.16-.59.52-.59.92z" })));
}
exports.default = SvgBookFill;
//# sourceMappingURL=BookFill.js.map