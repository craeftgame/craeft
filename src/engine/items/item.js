import Delay from "../delay";

import {
    Rarities,
    Unknown
} from "../data/types";

import {
    getRandomId
} from "../../tools/rand";

import {
    ItemNames,
    RarityNames,
    SlotNames
} from "../data/names";

export default class Item {

    equipped = false;
    delay = null;
    onDoneCreating = null;
    id = null;
    isMultiSlot = false;

    constructor({
                    category = Unknown,
                    name,
                    craefterId,
                    slot,
                    level = 1,
                    type,
                    rarity,
                    material,
                    delay = global.delay || 10
                } = {}) {

        this.delay = new Delay({
            delayInSeconds: delay,
            onDelayExpired: () => {
                this.meterialize();
            }
        });
        this.id = getRandomId();

        this.category = category;
        this.craefterId = craefterId;
        this.slot = slot;
        this.level = level;
        this.type = type;
        this.rarity = rarity;
        this.material = material;
        this.name = name;

        this.rarity = rarity || this.evaluateRarity();
    }

    getName() {
        return this.name || this.evaluateItemName()
    }

    evaluateItemName() {
        return `${RarityNames[this.rarity]} ${SlotNames[this.slot]} ${ItemNames[this.type]}`
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
