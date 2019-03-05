import Armor from '../items/armor';
import Crafter from './crafter';

export default class Armorsmith extends Crafter {
    constructor({
        name,
        luk,
        dex,
        str
    } = {}) {
        super({
            type: 'Armorsmith',
            name,
            luk,
            dex,
            str
        });
    }

    craft(resources) {
        return new Armor({
            name: 'test',
            def: 100,
            mdef: 100
        });
    }
}
