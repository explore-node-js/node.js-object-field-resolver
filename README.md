# node.js-object-field-resolver
allows overwrite object field value using abstract path

## software requirements
 * node.js v6.9+ [with v8 enabled]
 * npm v3+

## used technologies
 * jest _[for tests only]_
 
## how to execute tests
 `npm test` or, to execute tests with coverage `npm test -- --coverage`

## how to use
`import resolve from "node-object-field-resolver";` or `const resolve = require("node-object-field-resolver");`

```
let object = {xxx: 'value'} # given object

object = resolve('xxx.yyy', object, 'new value', '.'); -> result: object ~ {xxx: { yyy: 'new value'} }

can be used as well as:
         resolve('xxx.yyy', object, 'new value') -> as objects are passed as reference and get modified in proccess
```
