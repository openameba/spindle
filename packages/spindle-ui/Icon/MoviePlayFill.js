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
function SvgMoviePlayFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 4H5C3.34 4 2 5.34 2 7v10c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3V7c0-1.66-1.34-3-3-3zM5.5 17.24a.749.749 0 11-1.5 0v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5zm0-4.49c0 .41-.34.75-.75.75S4 13.16 4 12.75v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5zm0-4.49c0 .41-.34.75-.75.75S4 8.67 4 8.26v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5zm9.27 4.16l-3.93 2.45a.495.495 0 01-.76-.42v-4.9c0-.39.43-.63.76-.42l3.93 2.45c.31.19.31.64 0 .84zM20 17.24c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5zm0-4.49c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5zm0-4.49c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5z" })));
}
exports.default = SvgMoviePlayFill;
//# sourceMappingURL=MoviePlayFill.js.map