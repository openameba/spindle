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
function SvgKoeblog(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M20 13.71c-.55 0-1-.45-1-1v-1.43c0-.55.45-1 1-1s1 .45 1 1v1.43c0 .56-.45 1-1 1zm-15-1v-1.43c0-.55-.45-1-1-1s-1 .45-1 1v1.43c0 .55.45 1 1 1s1-.44 1-1zm7.01 2.03c.46 0 .84.1.96.23.01.01.04 0 .04-.02V6.28c0-.54-.41-1-.95-1.03-.57-.03-1.05.43-1.05 1v8.7c0 .02.02.03.04.02.11-.13.5-.23.96-.23zm0 .97c-.55 0-1 .14-1 .31v1.17c0 .03.01.06.02.09l.77 1.33c.09.16.32.16.41 0l.77-1.33c.02-.03.02-.06.02-.09v-1.17c.01-.17-.44-.31-.99-.31zm4.99-.47V8.76c0-.55-.45-1-1-1s-1 .45-1 1v6.48c0 .55.45 1 1 1s1-.45 1-1zm-8 0V8.76c0-.55-.45-1-1-1s-1 .45-1 1v6.48c0 .55.45 1 1 1s1-.45 1-1z" })));
}
exports.default = SvgKoeblog;
//# sourceMappingURL=Koeblog.js.map