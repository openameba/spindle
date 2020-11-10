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
function SvgFlagRankingTrim(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 18 13", fill: "currentColor", role: "img" }, props),
        React.createElement("g", { clipPath: "url(#flag_ranking_trim_svg__clip0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 0v13h14l4-13H0zm10.2 9.69H4.89a.3.3 0 01-.3-.3c0-.17.13-.3.3-.3h5.31c.16 0 .3.13.3.3a.3.3 0 01-.3.3zm.3-4.43v2.85c0 .22-.18.39-.39.39H4.98a.39.39 0 01-.39-.39V5.26C4.26 5.26 4 5 4 4.67c0-.33.26-.59.59-.59.33 0 .59.26.59.59 0 .18-.08.34-.2.44l1.07.96c.2.18.52.11.63-.14l.65-1.59a.697.697 0 01-.48-.65c0-.38.31-.69.69-.69.38 0 .69.31.69.69 0 .3-.2.56-.46.65l.65 1.59c.1.25.42.33.63.14l1.07-.96a.606.606 0 01-.2-.44c0-.33.26-.59.59-.59.33 0 .59.26.59.59-.01.33-.28.59-.6.59z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "flag_ranking_trim_svg__clip0" },
                React.createElement("path", { d: "M0 0h18v13H0z" })))));
}
exports.default = SvgFlagRankingTrim;
//# sourceMappingURL=FlagRankingTrim.js.map