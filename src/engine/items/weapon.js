import Item from "./item";
import {getRandomArrayItem} from "../../tools/rand";
import {
    ItemCategories,
    WeaponSlots,
    WeaponTypes
} from "../data/types";

import names from "../data/weapon_namrs";

export default class Weapon extends Item {

    constructor({
                    type = WeaponTypes.Unknown,
                    slot = WeaponSlots.OneHanded,
                    name = getRandomArrayItem({
                        array: names
                    }),
                    level,
                    atk = 0,
                    matk = 0,
                    delay
                } = {}) {

        super({
            category: ItemCategories.Weapon,
            type,
            slot,
            name,
            level,
            delay
        });

        this.atk = atk;
        this.matk = matk;
    }
}
