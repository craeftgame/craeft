/* globals describe, it */
const Weapon = require('../src/items/weapon');
const assert = require('assert');

describe('Weapon', () => {
    describe('constructor', () => {
        it('should set atk correct', () => {
            const atk = 10;
            const item = new Weapon({atk});
            assert(item.atk, atk)
        });
    });
});
