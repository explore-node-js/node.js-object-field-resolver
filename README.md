[circle.ci-master-badge]: https://circleci.com/gh/explore-node-js/node.js-object-field-resolver/tree/master.svg?style=svg
[circle.ci-master-link]: https://circleci.com/gh/explore-node-js/node.js-object-field-resolver/tree/master
[codecov.io-master-badge]: https://codecov.io/gh/explore-node-js/node.js-object-field-resolver/branch/master/graph/badge.svg
[codecov.io-master-link]: https://codecov.io/gh/explore-node-js/node.js-object-field-resolver

|                  | master
|---               |---
| __tests__        |
| _< Circle CI >_  | [![build][circle.ci-master-badge]][circle.ci-master-link]
| __coverage__     |
| _< codecov.io >_ | [![coverage][codecov.io-master-badge]][codecov.io-master-link]


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
