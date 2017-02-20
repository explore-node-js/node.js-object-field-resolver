# node.js-object-field-resolver
allows overwrite object fields with value


how to use:

```
import overwriteObjectField from "node-object-field-resolver"

...
let object = {xxx: 'value'}

object = overwriteObjectField('xxx.yyy', object, 'new value', '.');

object // {xxx: { yyy: 'new value'} }

```


## software requirements
 * node.js 6.9+ [with v8 enabled]
 * npm 3+

## used technologies
 * jest
 
## how to execute tests
 * npm test
