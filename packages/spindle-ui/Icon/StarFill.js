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
function SvgStarFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("g", { clipPath: "url(#star_fill_svg__clip0)" },
            React.createElement("path", { d: "M18.1 14l4-3.7c1-1 .5-2.7-.9-2.9l-5.4-.6-2.2-4.9c-.6-1.3-2.4-1.3-3 0L8.3 6.8l-5.4.6c-1.4.2-2 1.9-.9 2.9L6 14l-1.1 5.3c-.3 1.4 1.2 2.5 2.4 1.8l4.7-2.7 4.7 2.7c1.2.7 2.7-.4 2.4-1.8l-1-5.3z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "star_fill_svg__clip0" },
                React.createElement("path", { d: "M0 0h24v24H0z" })))));
}
exports.default = SvgStarFill;
//# sourceMappingURL=StarFill.js.map