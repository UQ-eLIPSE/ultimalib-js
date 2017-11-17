import { DataRequester } from "./DataRequester";
import { LTIValidatorError } from "./LTIValidatorError";

interface ILTIValidationRequest {
    appKey: string,
    uri: string,
    method: string,
    payload: any,
}

export interface ILTIValidationResponse {
    error?: string,
    valid: boolean,
}

export class LTIValidator {
    private requester: DataRequester;
    private endpointUrl: string;
    private appKey: string;

    /**
     * @param requester A class instance will be handling the networking of the 
     *                  LTI validation request
     * @param endpointUrl The URL of the server this class will be sending the
     *                    data to
     * @param appKey A unique identifier this application uses to identify
     *               itself with the server
     */
    constructor(requester: DataRequester, endpointUrl: string, appKey: string) {
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
    public async validateRequest(launchUri: string, httpMethod: string, payload: any) {
        const { status, responseBody: result } =
            await this.requester.post<ILTIValidationRequest, ILTIValidationResponse>(this.endpointUrl, {
                appKey: this.appKey,
                uri: launchUri,
                method: httpMethod,
                payload,
            });

        if (status >= 400 || result.valid !== true) {
            const errorMsg = result.error || "Server has not provided an error message";
            throw new LTIValidatorError(errorMsg, status);
        }

        return { status, result };
    }
}
