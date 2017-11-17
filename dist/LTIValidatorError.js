"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LTIValidatorError = /** @class */ (function (_super) {
    __extends(LTIValidatorError, _super);
    function LTIValidatorError(msg, status) {
        var _this = _super.call(this, msg) || this;
        _this.message = msg + " (HTTP " + status + ")";
        _this.name = "LTIValidatorError";
        // Set the prototype explicitly
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, LTIValidatorError.prototype);
        return _this;
    }
    return LTIValidatorError;
}(Error));
exports.LTIValidatorError = LTIValidatorError;
