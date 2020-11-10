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
function SvgBottomnavSearchActive(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M19.8 17.7l-3.5-3.5c.7-1.1 1.2-2.5 1.2-4 0-4-3.3-7.2-7.2-7.2C6.4 3 3 6.3 3 10.2c0 3.9 3.3 7.2 7.2 7.2 1.5 0 2.8-.4 4-1.2l3.5 3.5c.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4.5-.5.5-1.4-.1-2zM5.5 10.2c0-2.6 2.1-4.8 4.8-4.8 2.7 0 4.7 2.2 4.7 4.8 0 2.6-2.1 4.8-4.8 4.8-2.7 0-4.7-2.1-4.7-4.8z" })));
}
exports.default = SvgBottomnavSearchActive;
//# sourceMappingURL=BottomnavSearchActive.js.map