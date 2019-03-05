/* globals describe, it */
const Armor = require('../src/items/armor');
const assert = require('assert');

describe('Armor', () => {
    describe('constructor', () => {
        it('should set def correct', () => {
            const def = 10;
            const item = new Armor({def});
            assert(item.def, def)
        });
    });
});
