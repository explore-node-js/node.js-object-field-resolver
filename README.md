[circle.ci-master-badge]: https://circleci.com/gh/explore-node-js/node.js-object-field-resolver/tree/master.svg?style=svg
[circle.ci-master-link]: https://circleci.com/gh/explore-node-js/node.js-object-field-resolver/tree/master
[codecov.io-master-badge]: https://codecov.io/gh/explore-node-js/node.js-object-field-resolver/branch/master/graph/badge.svg
[codecov.io-master-link]: https://codecov.io/gh/explore-node-js/node.js-object-field-resolver

|                       | master
|---                    |---
| __tests__             |
| _< Circle CI >_ build | [![build][circle.ci-master-badge]][circle.ci-master-link]
| __coverage__          |
| codecov.io            | [![coverage][codecov.io-master-badge]][codecov.io-master-link]


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
let object = {xxx: 'value'} # given object

object = overwriteObjectField('xxx.yyy', object, 'new value', '.'); # result: object ~ {xxx: { yyy: 'new value'} }

can be used as well as:
overwriteObjectField('xxx.yyy', object, 'new value') # as objects are passed as via reference and get modified in proccess

```
