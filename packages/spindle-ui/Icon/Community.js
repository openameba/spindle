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
function SvgCommunity(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M11 6.75C11 8.27 9.77 9.5 8.25 9.5H7.6l-.41 1.04c-.07.17-.3.17-.37 0L6.4 9.5h-.65C4.23 9.5 3 8.27 3 6.75S4.23 4 5.75 4h2.5C9.77 4 11 5.23 11 6.75zm10-1.33v3.47c0 .64-.52 1.16-1.16 1.16h-5.4c-.64 0-1.16-.52-1.16-1.16V5.42c0-.64.52-1.16 1.16-1.16h.83l.32-.45c.15-.2.38-.32.62-.32h1.84c.25 0 .48.12.62.31l.33.45h.83c.65.01 1.17.53 1.17 1.17zm-1.93 1.74c0-1.06-.87-1.93-1.93-1.93s-1.93.87-1.93 1.93.87 1.93 1.93 1.93 1.93-.87 1.93-1.93zM17.14 6a1.16 1.16 0 10.002 2.322A1.16 1.16 0 0017.14 6zm-6.64 8v6c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1h5.5c.55 0 1 .45 1 1zm-1 1.5H4v4c0 .28.22.5.5.5H9c.28 0 .5-.22.5-.5v-4zm-4.5 2h3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H5c-.28 0-.5.22-.5.5s.22.5.5.5zM5 19h3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H5c-.28 0-.5.22-.5.5s.22.5.5.5zm13.04-4.4c-.08-.08-.21-.06-.3.03l-4.25 4.25-.47 1.65c-.09.3.15.54.45.45l1.65-.47 4.25-4.25c.09-.09.1-.22.03-.3l-1.36-1.36zm1.8-1.47a.435.435 0 00-.6 0l-.53.53c-.08.08-.08.22 0 .3l1.34 1.34c.08.08.22.08.3 0l.53-.53c.16-.16.16-.43 0-.6l-1.04-1.04z" })));
}
exports.default = SvgCommunity;
//# sourceMappingURL=Community.js.map