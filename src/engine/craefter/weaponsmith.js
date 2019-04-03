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

        // 1 percent of all resources is the base
        const baseline = (resourcesSum / 100) * 2;

        const atk = Math.floor(
            baseline + (resources.metal / 100) * 80
        );

        const matk = Math.floor(
            baseline + (resources.wood / 100) * 80
        );

        return {
            category: ItemCategories.Weapon,
            type: this.evaluateItemType(ratios),
            atkMin: atk,
            atkMax: Math.round(atk + ((100 / atk) * 10)),
            matkMin: matk,
            matkMax: matk
        }
    }

    craeft(
        resources
    ) {

        this.staCurrent -= 1;

        return new Weapon({
            name: 'test',
            atk: 100 * this.luk,
            matk: 100
        });
    }
}
