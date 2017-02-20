# node.js-object-field-resolver
allows overwrite object field value using abstract path

## software requirements
 * node.js 6.9+ [with v8 enabled]
 * npm 3+

## used technologies
 * jest
 
## how to execute tests
```
npm test
```
to execute tests with coverage
```
npm test -- --coverage
```

## how to use

```
import overwriteObjectField from "node-object-field-resolver"
# or, if you use pure node.js:
const overwriteObjectField = require("node-object-field-resolver");

...
let object = {xxx: 'value'} -- given object

object = overwriteObjectField('xxx.yyy', object, 'new value', '.');

object -- {xxx: { yyy: 'new value'} }

can be used as well as:
overwriteObjectField('xxx.yyy', object, 'new value') # as objects are passed as via reference and get modified in proccess

```
