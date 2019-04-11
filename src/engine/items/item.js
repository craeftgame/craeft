import Delay from "../delay";
import {ItemCategories} from "../data/types";

export default class Item {

    equiped = false;

    constructor({
                    category = ItemCategories.Unknown,
                    name,
                    slot,
                    level = 1,
                    delay = global.delay || 50
                } = {}) {

        this.delay = new Delay(delay);

        this.category = category;
        this.slot = slot;
        this.name = name;
        this.level = level;
    }
}
