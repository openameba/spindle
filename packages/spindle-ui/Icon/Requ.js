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
function SvgRequ(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M10.57 16.52c-.2.15-.46.17-.68.06 0 0-5.87-3.2-5.99-3.27-.14-.08-.15-.32.05-.38.22-.06 11.45-3.08 14.66-3.93.21-.06.36.21.21.35-.11.11-8.25 7.17-8.25 7.17zm-.71-9.16c.11.02 5.88.84 5.88.84L9.28 9.93s.32-2.29.33-2.4c.02-.11.14-.19.25-.17zm10.93.63c-.24-.4-.57-.6-1-.66L9.8 5.87c-.03 0-.05-.01-.08-.01-.78-.02-1.39.49-1.52 1.25v.03l-.47 3.21s-4.65 1.28-4.66 1.28c-.58.17-.98.64-1.05 1.23-.07.6.21 1.08.72 1.39.01.01 6.39 3.63 6.4 3.63.49.25 1.1.31 1.61.17.27-.07.52-.2.75-.37l.03-.03 9-7.85c.51-.48.62-1.2.26-1.81z" })));
}
exports.default = SvgRequ;
//# sourceMappingURL=Requ.js.map