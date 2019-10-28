import Delay from "../delay";

import {
    Rarities,
    ResourceTypes,
    Unknown
} from "../data/types";

import {
    getRandomId,
    getRandomInt
} from "../../tools/rand";

import {
    ItemNames,
    RarityNames,
    SlotNames
} from "../data/names";
import Resources from "../resources";
import config from "../config"

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
                    resources,
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
        this.resources = resources;
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

    disentchant() {
        // this item did not have any resources
        if (!this.resources) {
            // return a dummy set
            return new Resources({
                resources: {
                    [ResourceTypes.Wood]: 1
                }
            });
        }

        return new Resources({
            resources: {
                [ResourceTypes.Wood]:
                    getRandomInt(
                        Math.floor(this.resources[ResourceTypes.Wood] / 100 * config.fuLow),
                        Math.floor(this.resources[ResourceTypes.Wood] / 100 * config.fuHigh)
                    ),
                [ResourceTypes.Metal]:
                    getRandomInt(
                        Math.floor(this.resources[ResourceTypes.Metal] / 100 * config.fuLow),
                        Math.floor(this.resources[ResourceTypes.Metal] / 100 * config.fuHigh)
                    ),
                [ResourceTypes.Diamond]:
                    getRandomInt(
                        Math.floor(this.resources[ResourceTypes.Diamond] / 100 * config.fuLow),
                        Math.floor(this.resources[ResourceTypes.Diamond] / 100 * config.fuHigh)
                    ),
                [ResourceTypes.Cloth]:
                    getRandomInt(
                        Math.floor(this.resources[ResourceTypes.Cloth] / 100 * config.fuLow),
                        Math.floor(this.resources[ResourceTypes.Cloth] / 100 * config.fuHigh)
                    )
            }

        })
    }

    static hydrate(
        item,
        obj
    ) {
        item.delay = Delay.hydrate(obj.delay)
    }
}
