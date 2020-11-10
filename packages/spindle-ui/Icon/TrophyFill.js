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
function SvgTrophyFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M19 5h-1.5v-.5c0-.55-.45-1-1-1h-9c-.55 0-1 .45-1 1V5H5c-1.1 0-2 .9-2 2v.96c0 1.55.91 2.98 2.32 3.63l1.33.62c1.12 1.61 2.45 2.63 3.85 3.06v1.7l-2.64 1.69c-.84.54-.45 1.84.54 1.84h7.19c1 0 1.38-1.3.54-1.84l-2.64-1.69v-1.7c1.39-.42 2.72-1.45 3.85-3.06l1.33-.62A3.993 3.993 0 0021 7.96V7c0-1.1-.9-2-2-2zM5 7.96V7h1.5v2.94l-.34-.16C5.46 9.45 5 8.74 5 7.96zm14 0c0 .78-.46 1.49-1.16 1.82l-.34.16V7H19v.96z" })));
}
exports.default = SvgTrophyFill;
//# sourceMappingURL=TrophyFill.js.map