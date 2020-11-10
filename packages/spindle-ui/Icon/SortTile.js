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
function SvgSortTile(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M7.5 8h-4c-.28 0-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v4c0 .28-.22.5-.5.5zM8 20.5v-4c0-.28-.22-.5-.5-.5h-4c-.28 0-.5.22-.5.5v4c0 .28.22.5.5.5h4c.28 0 .5-.22.5-.5zM8 14v-4c0-.28-.22-.5-.5-.5h-4c-.28 0-.5.22-.5.5v4c0 .28.22.5.5.5h4c.28 0 .5-.22.5-.5zm6.5-6.5v-4c0-.28-.22-.5-.5-.5h-4c-.28 0-.5.22-.5.5v4c0 .28.22.5.5.5h4c.28 0 .5-.22.5-.5zm0 13v-4c0-.28-.22-.5-.5-.5h-4c-.28 0-.5.22-.5.5v4c0 .28.22.5.5.5h4c.28 0 .5-.22.5-.5zm0-6.5v-4c0-.28-.22-.5-.5-.5h-4c-.28 0-.5.22-.5.5v4c0 .28.22.5.5.5h4c.28 0 .5-.22.5-.5zM21 7.5v-4c0-.28-.22-.5-.5-.5h-4c-.28 0-.5.22-.5.5v4c0 .28.22.5.5.5h4c.28 0 .5-.22.5-.5zm0 13v-4c0-.28-.22-.5-.5-.5h-4c-.28 0-.5.22-.5.5v4c0 .28.22.5.5.5h4c.28 0 .5-.22.5-.5zm0-6.5v-4c0-.28-.22-.5-.5-.5h-4c-.28 0-.5.22-.5.5v4c0 .28.22.5.5.5h4c.28 0 .5-.22.5-.5z" })));
}
exports.default = SvgSortTile;
//# sourceMappingURL=SortTile.js.map