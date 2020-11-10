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
function SvgGame(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M16.2 12.1c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.7 1.4 1.4zM17.6 8c-.8 0-1.4.6-1.4 1.4 0 .8.6 1.4 1.4 1.4.8 0 1.4-.7 1.4-1.4S18.4 8 17.6 8zm-7 1.6H8.9V7.9c0-.2-.2-.4-.4-.4h-.9c-.2 0-.4.2-.4.4v1.7H5.4c-.2 0-.4.2-.4.5v.9c0 .2.2.4.4.4h1.7v1.7c0 .2.2.4.4.4h.9c.2 0 .4-.2.4-.4v-1.7h1.7c.2 0 .4-.2.4-.4v-.9c.1-.3-.1-.5-.3-.5zm12.1 5.7c.1 1.5-.6 2.9-1.9 3.7-.6.4-1.4.6-2.1.6-.7 0-1.4-.2-2.1-.6L13 16.8c-.6-.4-1.4-.4-2.1 0L7.3 19c-1.3.8-2.9.8-4.1 0-1.3-.8-2-2.2-1.9-3.7l.5-7.8c.1-1.2.6-2.2 1.6-3 .9-.7 2.1-1 3.3-.7 3.5.8 7.2.8 10.7 0 1.1-.3 2.3 0 3.3.7.9.7 1.5 1.8 1.6 3l.4 7.8zm-2 .1l-.5-7.8c0-.6-.3-1.1-.8-1.5-.5-.4-1.1-.5-1.6-.4-3.8.9-7.8.9-11.6 0-.6-.1-1.2 0-1.6.4-.5.4-.8.9-.8 1.5l-.5 7.8c0 .8.3 1.4 1 1.8.6.4 1.4.4 2.1 0L10 15c.6-.4 1.3-.6 2.1-.6s1.4.2 2.1.6l3.6 2.2c.6.4 1.4.4 2.1 0 .5-.4.8-1.1.8-1.8z" })));
}
exports.default = SvgGame;
//# sourceMappingURL=Game.js.map