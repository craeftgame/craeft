import Item from "./item";
import {
    getRandomInt
} from "../../tools/rand";
import {
    Unknown,
    ItemCategories
} from "../data/types";

import names from "../data/armor_names"

export default class Armor extends Item {

    constructor({
                    type = Unknown,
                    slot = Unknown,
                    craefterId,
                    name = names[getRandomInt(0, names.length)],
                    level,
                    rarity,
                    def = 0,
                    mdef = 0,
                    material,
                    delay
                } = {}) {
        super({
            category: ItemCategories.Armor,
            type,
            slot,
            craefterId,
            level,
            rarity,
            name,
            material,
            delay
        });

        this.def = def;
        this.mdef = mdef;
    }

    static hydrate(obj) {
        const armor = Object.assign(new Armor(), obj);

        Item.hydrate(
            armor,
            obj
        );

        return armor;
    }
}
