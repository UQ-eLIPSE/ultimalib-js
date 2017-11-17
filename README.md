# ultimalib-js

ULTIMA service bindings for JavaScript (Node.js)

## Installation

```bash
npm install UQ-eLIPSE/ultimalib-js
```

## Usage

```javascript
/// Importing

// ES Modules style
import * as ultima from "ultima";

// CommonJS style
const ultima = require("ultima");


/// In your code...

// Get the instance of the LTI validator
const ultimaValidator =
    ultima.getLTIValidator(
        "https://ultima.endpoint.url/validate", // ULTIMA validation endpoint
        "YOUR_APPLICATION_KEY"                  // Your application key registered in ULTIMA
    );

// With an LTI request...
ultimaValidator.validateRequest(
    request.launchUrl,      // The LTI launch URL (string)
    request.httpMethod,     // The HTTP method by which the request was made (generally "POST")
    request.payload         // The full payload (key-value pairs as object) of the LTI request
)
    .then(function(validation) {
        if (validation.result.valid) {  // `true` if LTI message was validated; `false` otherwise
            // Everything is good
            //
            // At this point, it is up to you to use information from the LTI message
        }
    })
    .catch(function(e) {
        // Note that the validator will throw in cases where the validation
        // process failed or the LTI message failed the validation check
    });
```

## Notes

### Very much beta code

The project code is very rough and was made simply to get communication working
with the internal ULTIMA service. It is structured around an old design and
hasn't been updated yet.

<span style="color: red;">Do not use this if you don't know what it is.</span>

### Use of ES2015/ES6 features

The following features from ES2015/ES6 will need to be polyfilled in your
environment if they are not present:

* Promise
