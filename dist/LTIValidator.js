"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var LTIValidatorError_1 = require("./LTIValidatorError");
var LTIValidator = /** @class */ (function () {
    /**
     * @param requester A class instance will be handling the networking of the
     *                  LTI validation request
     * @param endpointUrl The URL of the server this class will be sending the
     *                    data to
     * @param appKey A unique identifier this application uses to identify
     *               itself with the server
     */
    function LTIValidator(requester, endpointUrl, appKey) {
        this.requester = requester;
        this.endpointUrl = endpointUrl;
        this.appKey = appKey;
    }
    /**
     * Posts a validation request to the server, and returns the response.
     *
     * We recommend developers to read [RFC5849](https://tools.ietf.org/html/rfc5849)
     * to familiarise themselves with OAuth1 if you are interested in how LTI
     * messages are handled and validated.
     *
     * @param launchUri The URI this application was launched with
     * @param httpMethod The HTTP method received on the LTI request
     * @param payload A dictionary of LTI launch data parameters.
     *                https://www.imsglobal.org/specs/ltiv1p1/implementation-guide#toc-3
     *                details which parameters are required under the "Basic
     *                Launch Data" section.
     *
     * @returns An object with {status, result} where:
     *          `status` = HTTP status code of the request
     *          `result` = Server JSON response
     */
    LTIValidator.prototype.validateRequest = function (launchUri, httpMethod, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, status, result, errorMsg;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.requester.post(this.endpointUrl, {
                            appKey: this.appKey,
                            uri: launchUri,
                            method: httpMethod,
                            payload: payload,
                        })];
                    case 1:
                        _a = _b.sent(), status = _a.status, result = _a.responseBody;
                        if (status >= 400 || result.valid !== true) {
                            errorMsg = result.error || "Server has not provided an error message";
                            throw new LTIValidatorError_1.LTIValidatorError(errorMsg, status);
                        }
                        return [2 /*return*/, { status: status, result: result }];
                }
            });
        });
    };
    return LTIValidator;
}());
exports.LTIValidator = LTIValidator;
