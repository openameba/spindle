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
function SvgSpeakerOnFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M21 12.13c0 3.69-2.21 6.96-5.63 8.34-.12.05-.25.07-.38.07-.4 0-.77-.24-.93-.62-.21-.51.04-1.1.55-1.3C17.28 17.54 19 15 19 12.13s-1.72-5.41-4.38-6.49a.998.998 0 11.75-1.85A8.962 8.962 0 0121 12.13zm-6.67 3.38c.19.17.42.25.66.25.28 0 .55-.12.75-.34A4.99 4.99 0 0017 12.13c0-1.2-.45-2.37-1.26-3.29-.37-.42-1-.45-1.41-.09a.99.99 0 00-.09 1.41c.35.39.76 1.05.76 1.97 0 .92-.41 1.58-.76 1.97-.36.42-.32 1.05.09 1.41zm-4.04-9.57L7.11 9.11H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3.03l3.26 3.25c.63.63 1.71.18 1.71-.71v-11c0-.89-1.08-1.34-1.71-.71z" })));
}
exports.default = SvgSpeakerOnFill;
//# sourceMappingURL=SpeakerOnFill.js.map