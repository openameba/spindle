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
function SvgLineSquare(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M17.1 21H6.9C4.75 21 3 19.25 3 17.1V6.9C3 4.75 4.75 3 6.9 3h10.2C19.25 3 21 4.75 21 6.9v10.2c0 2.15-1.75 3.9-3.9 3.9zm1.42-9.79c0-2.93-2.94-5.32-6.55-5.32s-6.55 2.39-6.55 5.32c0 2.63 2.33 4.83 5.48 5.25.21.05.5.14.58.32.07.17.04.43.02.59 0 0-.08.46-.09.56-.03.17-.13.65.57.35.7-.29 3.77-2.22 5.15-3.8.94-1.04 1.39-2.1 1.39-3.27zm-7.88-1.42h-.46c-.07 0-.13.06-.13.13v2.86c0 .07.06.13.13.13h.46c.07 0 .13-.06.13-.13V9.92c0-.07-.06-.13-.13-.13zm3.16 0h-.46c-.07 0-.13.06-.13.13v1.7L11.9 9.85l-.01-.01-.01-.01-.01-.01h-.54c-.07 0-.13.06-.13.13v2.86c0 .07.06.13.13.13h.46c.07 0 .13-.06.13-.13v-1.7l1.31 1.77.03.03h.53c.07 0 .13-.06.13-.13V9.92c.01-.07-.05-.13-.12-.13zm-4.27 2.4H8.28V9.92c0-.07-.06-.13-.13-.13h-.46c-.07 0-.13.06-.13.13v2.86c0 .03.01.07.04.09.02.02.05.04.09.04h1.84c.07 0 .13-.06.13-.13v-.46c0-.08-.06-.13-.13-.13zm6.81-1.68c.07 0 .13-.06.13-.13v-.46c0-.07-.06-.13-.13-.13H14.5c-.03 0-.07.01-.09.04-.02.02-.04.05-.04.09v2.86c0 .03.01.07.04.09.02.02.05.04.09.04h1.84c.07 0 .13-.06.13-.13v-.46c0-.07-.06-.13-.13-.13h-1.25v-.49h1.25c.07 0 .13-.06.13-.13v-.46c0-.07-.06-.13-.13-.13h-1.25v-.48h1.25v.01z" })));
}
exports.default = SvgLineSquare;
//# sourceMappingURL=LineSquare.js.map