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
function SvgMessageboard(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M17.28 7.01c0 .55-.45 1-1 1h-5.47c-.55 0-1-.45-1-1s.45-1 1-1h5.47c.55 0 1 .45 1 1zm-9.56-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm8.56 3.5h-5.47c-.55 0-1 .45-1 1s.45 1 1 1h5.47c.55 0 1-.45 1-1s-.45-1-1-1zm-8.56 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm8.56 3.43h-5.47c-.55 0-1 .45-1 1s.45 1 1 1h5.47c.55 0 1-.45 1-1s-.45-1-1-1zm-8.56 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM21 4.98v11c0 1.66-1.34 3-3 3h-3.5l-1.66 2.57a1.002 1.002 0 01-1.68-.01L9.5 18.98H6c-1.66 0-3-1.34-3-3v-11c0-1.66 1.34-3 3-3h12c1.66 0 3 1.34 3 3zm-2 0c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h4.59l.59.91.82 1.27.82-1.27.59-.91H18c.55 0 1-.45 1-1v-11z" })));
}
exports.default = SvgMessageboard;
//# sourceMappingURL=Messageboard.js.map