import Weapon from '../items/weapon';
import Crafter from './crafter';

export default class Weaponsmith extends Crafter {
    constructor({
        name,
        luk,
        dex,
        str
    } = {}) {
        super({
            type: 'Weaponsmith',
            name,
            luk,
            dex,
            str
        });
    }

    craft(resources) {
        return new Weapon({
            name: 'test',
            atk: 100 * this.luk,
            matk: 100
        });
    }
}
