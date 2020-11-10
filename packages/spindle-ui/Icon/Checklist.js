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
function SvgChecklist(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M20.81 4.26l-1.47-.66c-1.81-.8-3.88-.8-5.69 0L12 4.34l-1.66-.74c-1.81-.8-3.88-.8-5.69 0l-1.46.66C2.47 4.58 2 5.29 2 6.08v11.81c0 .68.34 1.31.91 1.68.57.37 1.28.43 1.9.15l.66-.29c1.29-.57 2.77-.57 4.06 0l1.66.74c.26.12.54.17.81.17.28 0 .55-.06.81-.17l1.66-.74c1.29-.57 2.77-.57 4.06 0l.66.29A1.997 1.997 0 0022 17.89V6.08c0-.79-.47-1.5-1.19-1.82zM7.5 17c-.97 0-1.94.2-2.84.6l-.66.29V6.08l1.47-.65c1.29-.57 2.77-.57 4.06 0l1.47.65v11.81l-.66-.29c-.9-.4-1.87-.6-2.84-.6zm11.84.6c-1.81-.8-3.88-.8-5.69 0l-.65.29V6.08l1.47-.65c1.29-.57 2.77-.57 4.06 0l1.47.65v11.81l-.66-.29zM9.75 8.5c0 .41-.34.75-.75.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75zm0 3c0 .41-.34.75-.75.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75zm0 3c0 .41-.34.75-.75.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75zm9-6c0 .41-.34.75-.75.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75zm0 3c0 .41-.34.75-.75.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75zm0 3c0 .41-.34.75-.75.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75z" })));
}
exports.default = SvgChecklist;
//# sourceMappingURL=Checklist.js.map