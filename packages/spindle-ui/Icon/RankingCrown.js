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
function SvgRankingCrown(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.49 19.22c0 .41-.34.75-.75.75H5.24c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h13.5c.42 0 .75.34.75.75zm1-12.75c0 .7-.48 1.28-1.12 1.45v7.18c0 1.03-.84 1.88-1.88 1.88h-11c-1.03 0-1.88-.84-1.88-1.88V7.92a1.498 1.498 0 01.38-2.95A1.498 1.498 0 016.2 7.35l2.89 2.97c.03.03.07.04.11.04.04-.01.07-.03.09-.07l1.8-4.07a1.743 1.743 0 01.9-3.24c.97 0 1.75.78 1.75 1.75 0 .64-.34 1.19-.85 1.49l1.8 4.07c.02.04.05.06.09.07a.1.1 0 00.11-.04l2.89-2.97a1.496 1.496 0 011.21-2.38c.83 0 1.5.67 1.5 1.5zm-2.87 3.57l-1.47 1.5a1.875 1.875 0 01-3.06-.55l-1.1-2.49-1.1 2.49c-.25.57-.77.98-1.38 1.09-.62.11-1.24-.09-1.67-.54l-1.47-1.5v5.06c0 .07.06.12.12.12h11c.07 0 .12-.06.12-.12v-5.06h.01z" })));
}
exports.default = SvgRankingCrown;
//# sourceMappingURL=RankingCrown.js.map