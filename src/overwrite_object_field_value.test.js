const overwriteObjectFieldValue = require("./overwrite_object_field_value");

describe(`::overwriteObjectFieldValue`, () => {
    const dataProvider = [
        /** simple assigments */
        {
            path: 'f',
            v: {},
            obj: {},
            expected: { f: {} },
        },
        {
            path: 'f',
            v: 'v',
            obj: {},
            expected: { f: 'v' },
        },
        {
            path: 'f',
            v: 1,
            obj: {},
            expected: { f: 1 },
        },
        {
            path: 'f',
            v: true,
            obj: {},
            expected: { f: true },
        },
        {
            path: 'f',
            v: {},
            obj: { f: ['test'] },
            expected: { f: {} },
        },
        /** 2-level assignments */
        {
            path: 'f0.f1',
            v: 'v',
            obj: {},
            expected: { f0: { f1: 'v' } },
        },
        /** 3-level assignments */
        {
            path: 'f0.f1.f2',
            v: 'v',
            obj: {},
            expected: { f0: { f1: { f2: 'v' } } },
        },
        /** replacements */
        {
            path: 'f',
            v: 1,
            obj: { f: true },
            expected: { f: 1 },
        },
        {
            path: 'f',
            v: 'v',
            obj: { f: true },
            expected: { f: 'v' },
        },
        {
            path: 'f',
            v: [],
            obj: { f: true },
            expected: { f: [] },
        },
        {
            path: 'f',
            v: {},
            obj: { f: true },
            expected: { f: {} },
        },
        /** 2-level replacements */
        {
            path: 'f0.f1',
            v: 1,
            obj: { f0: { f1: {} } },
            expected: { f0: { f1: 1 } },
        },
        /** 3-level replacements */
        {
            path: 'f0.f1.f2',
            v: 1,
            obj: { f0: { f1: {} } },
            expected: { f0: { f1: { f2: 1 } } },
        },
        {
            path: 'f0.f1.f20',
            v: 1,
            obj: { f0: { f1: { f2: {} } } },
            expected: { f0: { f1: { f2: {}, f20: 1 } } },
        },
        /** should be not overwritten */
        {
            path: 'f0.f1.f2',
            v: 1,
            obj: { f0: [] },
            expected: { f0: [] },
        },
    ];

    const execute = ({ path, v, obj, delimiter, expected }) => {
        it(`injecting "${typeof v === 'object' ? JSON.stringify(v) : v}" by "${path}" path, into "${JSON.stringify(obj)}" expected: "${JSON.stringify(expected)}"`, () => {
            const object = overwriteObjectFieldValue(path, v, obj, delimiter);

            expect(JSON.stringify(object)).toEqual(JSON.stringify(expected));
        });
    };

    describe('with undefined delimeter', () => {
        dataProvider
            .forEach(execute);
    });

    describe('with defined [as "/"] delimeter', () => {
        const delimiter = '/';
        dataProvider
            .map((v) => ({
                ...v,
                delimiter,
                path: v.path.replace(/\./g, delimiter),
            }))
            .forEach(execute);
    });
});
