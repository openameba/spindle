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
function SvgSad(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", role: "img" }, props),
        React.createElement("path", { d: "M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.4-4.1a.9.9 0 01-.04 1.27c-.17.16-.39.24-.61.24-.24 0-.48-.1-.66-.29 0-.01-.92-.94-2.08-.94-1.16 0-2.08.94-2.09.95-.35.36-.92.38-1.28.04a.9.9 0 01-.04-1.27c.06-.06 1.44-1.52 3.4-1.52s3.34 1.46 3.4 1.52zm-4.94-3.71L8.1 13.55a.902.902 0 01-.9-1.56l1.01-.59-1.01-.58a.9.9 0 11.9-1.56l2.36 1.36c.28.16.45.46.45.78s-.17.62-.45.79zm6.67 1.03a.902.902 0 01-1.23.33l-2.36-1.37a.899.899 0 010-1.56l2.36-1.36a.9.9 0 11.9 1.56l-1.01.58 1.01.59c.43.25.58.8.33 1.23z" })));
}
exports.default = SvgSad;
//# sourceMappingURL=Sad.js.map