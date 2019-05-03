[ci.tests-master-badge]: https://circleci.com/gh/explore-node-js/node.js-object-field-resolver/tree/master.svg?style=svg
[ci.tests-master]: https://circleci.com/gh/explore-node-js/node.js-object-field-resolver/tree/master
[ci.coverage-master-badge]: https://codecov.io/gh/explore-node-js/node.js-object-field-resolver/branch/master/graph/badge.svg
[ci.coverage-master]: https://codecov.io/gh/explore-node-js/node.js-object-field-resolver/branch/master
[npm.package-badge]: https://badge.fury.io/js/node-object-field-resolver.svg
[npm.package]: https://www.npmjs.com/package/node-object-field-resolver

# node.js-object-field-resolver

allows overwrite object field value using abstract path, works like [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) or [object spread into object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax), but with more complex logic, when the 'path' can be more than one level deep, it do not overwrite NON 

[![build][ci.tests-master-badge]][ci.tests-master]
[![coverage][ci.coverage-master-badge]][ci.coverage-master]
[![coverage][npm.package-badge]][npm.package]

### how to install

`$ npm i node-object-field-resolver` or `$ yarn add node-object-field-resolver`

### software requirements

* [node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)+ or [yarn](https://yarnpkg.com/)

### used technologies

* [jest](https://facebook.github.io/jest/) - only for tests

### used services

* [circle ci](https://circleci.com/dashboard)
* [codecov](https://codecov.io/)
* [code climate](https://codeclimate.com/)
* [snyk](https://snyk.io/)

### how to execute tests

* `$ npm test`
* to execute tests with coverage `npm test -- --coverage`

### how to use
`import resolve from "node-object-field-resolver";`
or `const resolve = require("node-object-field-resolver");`

```
const obj = resolve('x.y' /** absolute path */, {} /** object */, 1 /** value */, '.' /** delimeter for path */);
   -> result: obj ~ {x: { y: 1} }

const obj = resolve('x.y' /** absolute path */, {x: {z: 2}} /** object */, 1 /** value */, '.' /** delimeter for path */);
   -> result: obj ~ {x: { y: 1, z: 2 } }


```
can be used as well as:
```
const obj { x: { z: 2 } }
resolve('x.y', obj, 1)
   -> as objects are passed as references
   -> result: 'obj' will look like {z: { y: 1, z: 2 } }
```

