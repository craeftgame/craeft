import Delay from "../delay";
import {
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
        this.isMultiSlot = isMultiSlot;
        this.name = name;
        this.level = level;

        this.id = getRandomId();
        this.craefterId = craefterId;
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
