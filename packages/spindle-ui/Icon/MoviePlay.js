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
function SvgMoviePlay(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 4H5C3.34 4 2 5.34 2 7v10c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3V7c0-1.66-1.34-3-3-3zm1 13c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10zm-5.22-5.42c.31.2.31.65 0 .85l-3.93 2.45a.495.495 0 01-.76-.42V9.55c0-.39.43-.63.76-.42l3.93 2.45zm3.82-3.73v1.1c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.1a.749.749 0 111.5 0zm0 3.6v1.1c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.1a.749.749 0 111.5 0zm0 3.6v1.1c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.1c0-.41.34-.75.75-.75s.75.34.75.75zM7.1 7.85v1.1c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.1a.749.749 0 111.5 0zm0 3.6v1.1c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.1a.749.749 0 111.5 0zm0 3.6v1.1a.749.749 0 11-1.5 0v-1.1c0-.41.34-.75.75-.75s.75.34.75.75z" })));
}
exports.default = SvgMoviePlay;
//# sourceMappingURL=MoviePlay.js.map