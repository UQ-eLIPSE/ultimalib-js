import { LTIValidator } from "./LTIValidator";
/**
 * Convenience method to inject the default DataRequester into the LTIValidator
 *
 * @param endpointUrl The URL of the server this class will be sending the data
 *                    to
 * @param appKey A unique identifier this application uses to identify itself
 *               with the server
 */
export declare function getLTIValidator(endpointUrl: string, appKey: string): LTIValidator;
