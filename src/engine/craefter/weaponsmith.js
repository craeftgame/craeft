import Weapon from '../items/weapon';
import Craefter from './craefter';
import math from "mathjs";
import {ItemCategories, WeaponTypes, CraefterTypes} from "./types";

export default class Weaponsmith extends Craefter {
    constructor({
                    name,
                    luk = 6,
                    dex = 3,
                    str = 9
                } = {}) {
        super({
            type: CraefterTypes.Weaponsmith,
            name,
            luk,
            dex,
            str
        });
    }

    evaluateItemType(
        ratios
    ) {
        let type = WeaponTypes.Unknown;

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

    evaluateAtk(
        resources
    ) {

    }

    evaluateItem(
        resources
    ) {
        resources = {
            wood: resources.wood || 0,
            metal: resources.metal || 0,
            cloth: resources.cloth || 0,
            diamond: resources.diamond || 0,
        };

        const gcd = math.gcd(
            resources.wood,
            resources.metal,
            resources.cloth,
            resources.diamond
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

        const atk = Math.round(
            (resourcesSum / 4) + ((resources.metal / 100) * resources.metal)
        );

        const matk = Math.round(
            (resourcesSum / 4) + ((resources.wood / 100) * resources.wood)
        );

        return {
            category: ItemCategories.Weapon,
            type: this.evaluateItemType(ratios),
            atkMin: atk,
            atkMax: atk,
            matkMin: matk,
            matkMax: matk
        }
    }

    craeft(
        resources
    ) {

        this.sta -= 1;
        this.staPercent = 100 / this.staMax * this.sta;

        return new Weapon({
            name: 'test',
            atk: 100 * this.luk,
            matk: 100
        });
    }
}
