import Weapon from '../items/weapon';
import Craefter from './craefter';
import math from "mathjs";
import {ItemCategories, WeaponTypes, CraefterTypes} from "./types";

export default class Weaponsmith extends Craefter {
    constructor({
                    name,
                    luk,
                    dex,
                    str
                } = {}) {
        super({
            type: CraefterTypes.Weaponsmith,
            name,
            luk,
            dex,
            str
        });
    }

    evaluateItemType(ratios) {
        let type = '???';

        const highestResource = Craefter.highestMaterial(ratios);

        switch (highestResource) {
            case 'metal':
                type = WeaponTypes.Sword;

                if (ratios.wood > 0) {
                    type = WeaponTypes.Knife;

                    if (ratios.metal > ratios.wood * 2) {
                        type = WeaponTypes.Sword;
                    } else if (ratios.diamond > ratios.metal * 2) {
                        type = WeaponTypes.JewelKnife
                    }
                } else if (ratios.diamond > ratios.metal * 2) {
                    type = WeaponTypes.JewelSword
                }
                break;
            case 'wood':
                type = WeaponTypes.Staff;

                if (ratios.diamond > 0) {
                    type = WeaponTypes.Wand;

                    if (ratios.diamond > ratios.wood * 2) {
                        type = WeaponTypes.JewelWand
                    }
                }
                break;
            default:
                break
        }

        return type;
    }

    evaluateAtk(ressources) {

    }

    evaluateItem(
        resources
    ) {

        const gcd = math.gcd(
            resources.wood || 0,
            resources.metal || 0,
            resources.cloth || 0,
            resources.diamond || 0
        );

        const ratios = {
            wood: resources.wood / gcd,
            metal: resources.metal / gcd,
            cloth: resources.cloth / gcd,
            diamond: resources.diamond / gcd,
        };

        // evaluate power
        const resourcesSum = (
            resources.wood +
            resources.metal +
            resources.cloth +
            resources.diamond
        );

        return {
            category: ItemCategories.Weapon,
            type: this.evaluateItemType(ratios),
            atk: resourcesSum * Math.random(),
            matk: 0
        }
    }

    craeft(
        resources
    ) {
        return new Weapon({
            name: 'test',
            atk: 100 * this.luk,
            matk: 100
        });
    }
}
