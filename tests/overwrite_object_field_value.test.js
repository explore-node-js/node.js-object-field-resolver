const overwriteObjectFieldValue = require("./object_field_resolver");

describe(`resolver: object field`, () => {
    const dataProvider = [
        {
            absolutePath: 'node1',
            value: {},
            object: {},
            expected: { node1: {} }
        },
        {
            absolutePath: 'node1',
            value: {},
            object: { node1: ['test'] },
            expected: { node1: {} }
        },
        {
            absolutePath: 'node1',
            value: {},
            object: { node2: ['test'] },
            expected: { node2: ['test'], node1: {} }
        },
        {
            absolutePath: 'node1.node2',
            value: { value: 'test' },
            object: {},
            expected: { node1: { node2: { value: 'test' } } }
        },
        {
            absolutePath: 'node1.node2.node3',
            value: ['test'],
            object: {},
            expected: { node1: { node2: { node3: ['test'] } } }
        },
        {
            absolutePath: 'node1.node2.node3',
            value: ['test'],
            object: { node1: { node2: { node3: { node4: {} } } } },
            expected: { node1: { node2: { node3: ['test'] } } }
        },
        {
            absolutePath: 'node1.node2.node3.node4',
            value: 'string',
            object: { node4: { node2: { node3: { node4: '' } } } },
            expected: { node4: { node2: { node3: { node4: '' } } }, node1: { node2: { node3: { node4: 'string' } } } }
        }
    ];
    const execute = (el) => {
        it(`::overwriteObjectFieldValue using: object - "${JSON.stringify(el.object)}" path - "${el.absolutePath}" delimiter - "${el.delimiter}"`, () => {
            const object = overwriteObjectFieldValue(el.absolutePath, el.value, el.object, el.delimiter);

            expect(JSON.stringify(object)).toMatch(JSON.stringify(el.expected));
        });
    };

    dataProvider
    /** tests where delimiter is undefined */
        .forEach(el => execute(el));

    dataProvider
    /** tests where delimiter is defined */
        .map(el => {
            const delimiter = '/';
            el.absolutePath = el.absolutePath.replace(/\./g, delimiter);
            el.delimiter = delimiter;

            return el;
        }).forEach(el => execute(el));
});