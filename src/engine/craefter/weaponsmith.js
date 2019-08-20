import Weapon from "../items/weapon";
import Craefter from "./craefter";
import armorsmith from "./armorsmith";

import {
    Unknown,
    ItemCategories,
    WeaponTypes,
    CraefterTypes,
    ResourceTypes
} from "../data/types";

import {
    getRandomInt
} from "../../tools/rand";

import {
    ItemNames
} from "../data/names";

import {
    log,
    round
} from "mathjs";

export default class Weaponsmith extends Craefter {
    constructor({
                    name,
                    delay,
                    str = 9,
                    int = 3,
                    dex = 5,
                    luk = 6
                } = {}) {
        super({
            type: CraefterTypes.Weaponsmith,
            name,
            delay,
            str,
            int,
            dex,
            luk
        });
    }

    static hydrate(obj) {
        const weaponsmith = Object.assign(new Weaponsmith(), obj);

        Craefter.hydrate(armorsmith, obj);

        return weaponsmith;
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
        ratios,
        highestResource
    ) {
        let type = Unknown;

        switch (highestResource) {
            case ResourceTypes.Metal:
                type = WeaponTypes.Sword;

                if (ratios[ResourceTypes.Wood] > 0) {
                    type = WeaponTypes.Knife;

                    if (ratios[ResourceTypes.Metal] > ratios[ResourceTypes.Wood] * 2) {
                        type = WeaponTypes.Sword;
                    }
                }
                break;
            case ResourceTypes.Wood:
                type = WeaponTypes.Staff;

                if (ratios[ResourceTypes.Diamond] > 0) {
                    type = WeaponTypes.Wand;
                }
                break;
            case ResourceTypes.Diamond:
                if (ratios[ResourceTypes.Wood] > 0 &&
                    ratios[ResourceTypes.Wood] > ratios[ResourceTypes.Metal] * 2 &&
                    ratios[ResourceTypes.Diamond] > ratios[ResourceTypes.Wood] * 2) {
                    type = WeaponTypes.JewelWand
                }

                if (ratios[ResourceTypes.Metal] > 0 &&
                    ratios[ResourceTypes.Wood] > 0 &&
                    ratios[ResourceTypes.Diamond] > ratios[ResourceTypes.Metal] + ratios[ResourceTypes.Wood]) {
                    type = WeaponTypes.JewelKnife
                }

                if (ratios[ResourceTypes.Metal] > 0 &&
                    ratios[ResourceTypes.Diamond] > ratios[ResourceTypes.Metal] * 2) {
                    if (ratios[ResourceTypes.Metal] > ratios[ResourceTypes.Wood] * 2) {
                        type = WeaponTypes.JewelSword;
                    }
                }

                break;
            default:
                break
        }

        return type;
    }

    evaluateItem({
                     resources
                 }) {

        // 2 percent of all resources is the base
        const baseline = (resources.sum() / 100);

        // add atk mainly based on metal
        // todo add str influence
        const atk = round(
            baseline + Craefter.calculateMaterialImpact(resources[ResourceTypes.Metal])
        );

        // add matk mainly based on wood
        // todo add int influence
        const matk = round(
            baseline + Craefter.calculateMaterialImpact(resources[ResourceTypes.Wood])
        );

        // todo: add level influence

        const ratios = resources.ratios();
        const highestResource = ratios.getHighest();

        return {
            category: ItemCategories.Weapon,
            type: this.evaluateItemType(
                ratios,
                highestResource
            ),
            rarity: Unknown,
            material: highestResource,
            atk,
            // todo: let this be influenced by luk
            atkMax: round(atk + (atk * log(2))) || 1,
            matk,
            // todo: let this be influenced by luk
            matkMax: round(matk + (matk * log(2))) || 1
        }
    }

    evaluateItemName(
        type,
        /* eslint-disable-next-line no-unused-vars */
        slot,
        isMultiSlot
    ) {
        const prefixes = [];

        if (this.itemCanBeTwoHanded(type)) {
            prefixes.push(isMultiSlot ? "Two-Handed" : "One-Handed");
        }

        const parts = [];

        parts.push(...prefixes);
        parts.push(ItemNames[type]);

        return parts.join(" ")
    }

    craeft(
        resources
    ) {
        super.craeft();

        // todo include resource heaviness / complexity
        this.exhaust(1);

        const {
            type,
            material,
            atk,
            atkMax,
            matk,
            matkMax
        } = this.evaluateItem(resources);

        // is this item two handed?
        const isMultiSlot = this.itemCanBeTwoHanded(type) && getRandomInt(0, 1) > 0;

        const item = new Weapon({
            type,
            isMultiSlot,
            material,
            level: this.level,
            craefterId: this.id,
            name: this.evaluateItemName(type, null, isMultiSlot),
            // todo include luk
            atk: getRandomInt(atk, atkMax),
            matk: getRandomInt(matk, matkMax)
        });

        this.itemId = item.id;

        return item;
    }
}
