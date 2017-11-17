"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LTIValidator_1 = require("./LTIValidator");
var DataRequester_1 = require("./DataRequester");
/**
 * Convenience method to inject the default DataRequester into the LTIValidator
 *
 * @param endpointUrl The URL of the server this class will be sending the data
 *                    to
 * @param appKey A unique identifier this application uses to identify itself
 *               with the server
 */
function getLTIValidator(endpointUrl, appKey) {
    return new LTIValidator_1.LTIValidator(new DataRequester_1.DataRequester(), endpointUrl, appKey);
}
exports.getLTIValidator = getLTIValidator;
