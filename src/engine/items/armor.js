import Item from './item';
import { getRandomArrayItem } from '../../tools/rand';

const names = [
    'Shellmail',
    'Platemail'
];

export default class Armor extends Item {

    constructor({
        def = 0,
        mdef = 0
    } = {}) {
        const name = getRandomArrayItem(names);

        super({name});

        this.def = def;
        this.mdef = mdef;
    }
}
