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
function SvgWebview(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.31 7.88h3.39c.19.68.3 1.39.3 2.12 0 .72-.1 1.42-.28 2.08h-3.4c.19-1.4.19-2.8-.01-4.2zm2.54-2h-2.96c-.32-1.16-.78-2.32-1.37-3.47 1.82.6 3.35 1.85 4.33 3.47zm-8.68 8.2h3.65c-.41 1.3-1.02 2.61-1.83 3.91-.8-1.3-1.41-2.61-1.82-3.91zm4.13-2H9.7c-.22-1.4-.22-2.8.02-4.2h4.58c.22 1.41.23 2.8 0 4.2zM12 4c.79 1.3 1.39 2.59 1.8 3.88h-3.6C10.61 6.6 11.21 5.3 12 4zm-2.51.41C8.9 5.57 8.44 6.72 8.12 7.88H5.15a8.002 8.002 0 014.34-3.47zm-1.81 9.67h-3.4A7.91 7.91 0 014 12c0-.73.11-1.44.29-2.12h3.39c-.19 1.4-.19 2.8 0 4.2zm-2.55 2H8.1c.32 1.17.79 2.34 1.39 3.51a8.036 8.036 0 01-4.36-3.51zm9.38 3.51c.6-1.17 1.07-2.34 1.39-3.51h2.97a8.036 8.036 0 01-4.36 3.51z" })));
}
exports.default = SvgWebview;
//# sourceMappingURL=Webview.js.map