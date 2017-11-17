export class LTIValidatorError extends Error {
    constructor(msg: string, status: number) {
        super(msg);
        this.message = `${msg} (HTTP ${status})`
        this.name = "LTIValidatorError";

        // Set the prototype explicitly
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, LTIValidatorError.prototype);
    }
}
