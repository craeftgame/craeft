import Item from './item';
import { getRandomInt } from '../../tools/rand';

const names = [
    'Knife',
    'Dagger'
];

export default class Weapon extends Item {

    constructor({
        atk = 0,
        matk = 0
    } = {}) {
        const name = names[getRandomInt(0, names.length)];

        super({name});

        this.atk = atk;
        this.matk = matk;
    }
}
