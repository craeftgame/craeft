import Delay from "../delay";
import {
    Rarities,
    Unknown
} from "../data/types";
import {
    getRandomId
} from "../../tools/rand";

export default class Item {

    equipped = false;
    delay = null;
    onDoneCreating = null;
    id = null;

    constructor({
                    category = Unknown,
                    name,
                    craefterId,
                    slot,
                    isMultiSlot = false,
                    level = 1,
                    rarity = this.evaluateRarity(),
                    material,
                    delay = global.delay || 10
                } = {}) {

        this.delay = new Delay({
            delayInSeconds: delay,
            onDelayExpired: () => {
                this.meterialize();
            }
        });

        this.material = material;
        this.category = category;
        this.slot = slot;
        this.rarity = rarity;
        this.isMultiSlot = isMultiSlot;
        this.name = name;
        this.level = level;

        this.id = getRandomId();
        this.craefterId = craefterId;
    }

    evaluateRarity() {

        const chance = Math.random() * 100;

        // 0-79
        if (chance < 80) {
            return Rarities.Common;
        }
        // 80-84
        else if (chance < 85) {
            return Rarities.Rare;
        }
        // 85-98
        else if (chance < 98) {
            return Rarities.Epic;
        }
        // 98-99
        else {
            return Rarities.Legendary;
        }
    }

    tick() {
        // todo: tick, tock
    }

    meterialize() {
        if (this.onDoneCreating) {
            this.onDoneCreating(
                this.craefterId,
                // todo evaluate exp properly
                5
            );
        }
    }

    static hydrate(
        item,
        obj
    ) {
        item.delay = Delay.hydrate(obj.delay)
    }
}
