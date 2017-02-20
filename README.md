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
