import Weapon from "../items/weapon";
import Craefter from "./craefter";

import {
    ItemCategories,
    WeaponTypes,
    CraefterTypes,
    WeaponSlots
} from "../data/types";

import {
    getRandomInt,
    getRandomObjectEntry
} from "../../tools/rand";
import {
    ItemNames,
    SlotNames,
} from "../data/names";

export default class Weaponsmith extends Craefter {
    constructor({
                    name,
                    str = 9,
                    dex = 3,
                    luk = 6
                } = {}) {
        super({
            type: CraefterTypes.Weaponsmith,
            name,
            luk,
            dex,
            str
        });
    }

    itemCanBeTwoHanded(
        type
    ) {
        return !(
            type === WeaponTypes.Knife ||
            type === WeaponTypes.JewelKnife ||
            type === WeaponTypes.Wand ||
            type === WeaponTypes.JewelWand
        );
    }

    evaluateItemType(
        ratios
    ) {
        let type = WeaponTypes.Unknown;

        const highestResource = Craefter.highestMaterial(ratios);

        switch (highestResource) {
            case "metal":
                type = WeaponTypes.Sword;

                if (ratios.wood > 0) {
                    type = WeaponTypes.Knife;

                    if (ratios.metal > ratios.wood * 2) {
                        type = WeaponTypes.Sword;
                    }
                }
                break;
            case "wood":
                type = WeaponTypes.Staff;

                if (ratios.diamond > 0) {
                    type = WeaponTypes.Wand;
                }
                break;
            case "diamond":
                if (ratios.wood &&
                    ratios.diamond > ratios.wood * 2) {
                    type = WeaponTypes.JewelWand
                }

                if (ratios.metal &&
                    ratios.metal > ratios.wood) {
                    type = WeaponTypes.JewelKnife
                }

                if (ratios.metal &&
                    ratios.metal > ratios.wood &&
                    ratios.diamond > ratios.metal * 2) {
                    type = WeaponTypes.JewelSword
                }
                break;
            default:
                break
        }

        return type;
    }

    evaluateSlot(
        type
    ) {
        // handle items that can never be two handed
        if (!this.itemCanBeTwoHanded(type)) {
            return WeaponSlots.OneHanded;
        }

        return getRandomObjectEntry({
            object: WeaponSlots,
            start: 1
        });
    }

    evaluateItem(
        resources
    ) {
        const {
            res,
            ratios,
            resourcesSum
        } = this.evaluateResouces(resources);

        // 2 percent of all resources is the base
        const baseline = (resourcesSum / 100) * 2;

        // add atk mainly based on metal
        const atk = Math.floor(
            baseline + ((res.metal ? res.metal : 1) / 100) * 80
        );

        // add matk mainly based on wood
        const matk = Math.floor(
            baseline + ((res.wood ? res.wood : 1) / 100) * 80
        );

        // todo: add level influence

        return {
            category: ItemCategories.Weapon,
            type: this.evaluateItemType(ratios),
            atk,
            atkMax: Math.round(atk + ((atk / 100) * 10)) || 1,
            matk,
            matkMax: Math.round(matk + ((matk / 100) * 10)) || 1
        }
    }

    evaluateItemName(
        type,
        slot
    ) {
        const prefixes = [];

        if (this.itemCanBeTwoHanded(type)) {
            prefixes.push(SlotNames[slot])
        }

        const parts = [];

        parts.push(...prefixes);
        parts.push(ItemNames[type]);

        return parts.join(" ")
    }

    craeft(
        resources
    ) {
        // todo include resource heaviness / complexity
        this.exhaust(1);

        const {
            type,
            atk,
            atkMax,
            matk,
            matkMax
        } = this.evaluateItem(resources);

        const slot = this.evaluateSlot(type);

        const item = new Weapon({
            type,
            slot,
            level: this.level,
            name: this.evaluateItemName(type, slot),
            // todo include luk
            atk: getRandomInt(atk, atkMax),
            matk: getRandomInt(matk, matkMax)
        });

        console.log(item);

        return item;
    }
}
