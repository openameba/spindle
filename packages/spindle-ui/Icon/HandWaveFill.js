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
function SvgHandWaveFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M20.99 9.5v6.99c0 1.07-.31 2.08-.84 2.92A5.499 5.499 0 0115.48 22h-.22c-.12 0-.25 0-.37-.02-.03 0-.07 0-.1-.01v.01c-.1.02-.2.02-.3.02-2.07 0-3.94-.84-5.3-2.2L5.8 16.41c-.49-.49-.49-1.28 0-1.76a1.25 1.25 0 011.2-.33c.21.05.41.16.57.33l1.53 1.53.07.07c.09.07.2.11.32.11.28 0 .5-.22.5-.5V9c0-.27.11-.52.28-.7.01-.01.02-.02.03-.02.11-.1.23-.18.37-.22.1-.04.21-.06.32-.06.55 0 1 .45 1 1v4.5c0 .28.22.5.5.5s.5-.22.5-.5v-6c0-.46.31-.84.73-.96h.01c.08-.03.17-.04.26-.04.06 0 .12.01.17.02h.03c.46.09.8.5.8.98v6.05c.03.24.21.42.45.45h.05c.27 0 .48-.2.5-.47V7.5c0-.3.14-.57.35-.76a1 1 0 011.64.63c.01.04.01.09.01.13v6c0 .28.22.5.5.5h.05a.5.5 0 00.45-.5v-4c0-.29.12-.55.32-.73.18-.17.42-.27.68-.27.55 0 1 .45 1 1zM7.88 9.22c.36-.69.97-1.2 1.71-1.43.4-.12.62-.55.49-.94a.741.741 0 00-.94-.49 4.385 4.385 0 00-2.59 2.17.75.75 0 00.32 1.01c.11.05.23.08.35.08.27 0 .53-.14.66-.4zm-2.65-.98c.82-1.56 2.19-2.7 3.87-3.23.4-.12.61-.55.49-.94a.745.745 0 00-.94-.49A8.032 8.032 0 003.9 7.55c-.19.37-.04.82.32 1.01.11.06.23.08.35.08.27.01.53-.14.66-.4z" })));
}
exports.default = SvgHandWaveFill;
//# sourceMappingURL=HandWaveFill.js.map