import Item from "./item";
import {getRandomInt} from "../../tools/rand";
import {
    ItemCategories,
    WeaponSlots,
    WeaponTypes
} from "../data/types";

import names from "../data/armor_names"

export default class Armor extends Item {

    constructor({
                    type = WeaponTypes.Unknown,
                    slot = WeaponSlots.OneHanded,
                    name = names[getRandomInt(0, names.length)],
                    level,
                    def = 0,
                    mdef = 0,
                    delay
                } = {}) {
        super({
            category: ItemCategories.Armor,
            type,
            slot,
            level,
            name,
            delay
        });

        this.def = def;
        this.mdef = mdef;
    }
}
