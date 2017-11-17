import { LTIValidator } from "./LTIValidator";
import { DataRequester } from "./DataRequester";

/**
 * Convenience method to inject the default DataRequester into the LTIValidator
 * 
 * @param endpointUrl The URL of the server this class will be sending the data 
 *                    to
 * @param appKey A unique identifier this application uses to identify itself 
 *               with the server
 */
export function getLTIValidator(endpointUrl: string, appKey: string) {
    return new LTIValidator(new DataRequester(), endpointUrl, appKey);
}
