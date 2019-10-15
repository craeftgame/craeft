import Item from "./item";
import {
    Unknown,
    ItemCategories
} from "../data/types";

export default class Armor extends Item {

    constructor({
                    type = Unknown,
                    slot = Unknown,
                    craefterId,
                    name,
                    level,
                    rarity,
                    def = 0,
                    mdef = 0,
                    material,
                    delay
                } = {}) {
        super({
            category: ItemCategories.Armor,
            name,
            craefterId,
            slot,
            level,
            type,
            rarity,
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
