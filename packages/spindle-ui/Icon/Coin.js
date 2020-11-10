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
function SvgCoin(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M20.96 12.735v-.5 2.26c0 3.22-3.95 5.75-9 5.75s-9-2.53-9-5.75v-1.76c.2 3.1 4.09 5 9 5s8.8-1.9 9-5zm0-3.74v1.5c0 3.22-3.95 5.75-9 5.75s-9-2.53-9-5.75v-1.5c0-3.08 3.95-5.5 9-5.5s9 2.41 9 5.5zm-1.5 0c0-2.17-3.43-4-7.5-4s-7.5 1.83-7.5 4 3.43 4 7.5 4 7.5-1.84 7.5-4zm-2 0c0-1.6-2.36-2.81-5.5-2.81s-5.5 1.21-5.5 2.81 2.36 2.81 5.5 2.81 5.5-1.21 5.5-2.81zm-1 0c0 .85-1.92 1.81-4.5 1.81s-4.5-.96-4.5-1.81c0-.86 1.92-1.81 4.5-1.81s4.5.95 4.5 1.81z" })));
}
exports.default = SvgCoin;
//# sourceMappingURL=Coin.js.map