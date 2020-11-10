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
function SvgFlagFill(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M7.63 4v16c0 .55-.45 1-1 1s-1-.45-1-1V4c0-.55.45-1 1-1s1 .45 1 1zm12 3.93l-8.54-3.97c-.13-.06-.26-.08-.38-.09-.01 0-.03-.01-.04-.01-.01 0-.02.01-.03.01-.11 0-.22.03-.33.07l-.06.03c-.09.03-.18.08-.25.15-.01.01-.03.02-.04.03-.08.08-.14.18-.19.28-.01.02-.02.05-.03.07-.04.11-.08.23-.08.36v7.95c0 .13.03.25.07.36.01.02.02.05.03.07.05.1.11.2.19.27.01.01.03.02.04.03.08.07.16.12.25.16l.06.03c.1.04.21.06.33.06.01 0 .02.01.03.01.01 0 .03-.01.04-.01.13-.01.26-.03.38-.09l8.54-3.97c.78-.35.78-1.44.01-1.8z" })));
}
exports.default = SvgFlagFill;
//# sourceMappingURL=FlagFill.js.map