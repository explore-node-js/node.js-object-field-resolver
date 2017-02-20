"use strict";

module.exports = function overwriteObjectFieldValue(abstractPath, value, object, delimiter) {
    delimiter = undefined !== delimiter ? delimiter : '.';

    const indexes = abstractPath.split(delimiter);
    const lastPathIndex = indexes.length - 1;
    let obj = object;

    for (let i = 0; i <= lastPathIndex; i++) {
        const index = indexes[i];

        if (undefined === obj[index]) {
            obj[index] = {};
        }

        if (i === lastPathIndex) {
            obj[index] = value;

            break;
        }

        obj = obj[index];
    }

    return object;
};