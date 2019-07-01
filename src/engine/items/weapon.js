import Item from "./item";
import {getRandomArrayItem} from "../../tools/rand";
import {
    Unknown,
    ItemCategories
} from "../data/types";

import names from "../data/weapon_names";

export default class Weapon extends Item {

    constructor({
                    type = Unknown,
                    slot = Unknown,
                    isMultiSlot = false,
                    craefterId,
                    name = getRandomArrayItem({
                        array: names
                    }),
                    level,
                    atk = 0,
                    matk = 0,
                    material,
                    delay
                } = {}) {

        super({
            category: ItemCategories.Weapon,
            type,
            slot,
            isMultiSlot,
            craefterId,
            name,
            level,
            material,
            delay
        });

        this.atk = atk;
        this.matk = matk;
    }

    static hydrate(obj) {
        const weapon = Object.assign(new Weapon(), obj);

        Item.hydrate(
            weapon,
            obj
        );

        return weapon;
    }
}
