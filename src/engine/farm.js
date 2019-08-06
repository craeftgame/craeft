import Timer from "../tools/timer";
import Resources from "./resources";
import {
    ResourceTypes
} from "./data/types";
import {
    getRandomArrayItem
} from "../tools/rand";
import {
    pow,
    log
} from "mathjs";

export default class Farm {

    constructor({
                    delay = global.delay || 2
                } = {}) {
        this.delay = delay;
        this.timer = new Timer({
            delay,
            autoStart: false
        });

        this.counter = 0;
    }

    static hydrate(obj) {
        const farm = Object.assign(new Farm(), obj);

        farm.timer = Timer.hydrate(obj.timer);

        return farm;
    }

    start({
              player,
              callback
          } = {}) {

        let delay = this.delay * pow(log(this.counter + 2), 5);

        if (player.vit > 0) {
            delay /= player.vit;
        }

        delay = delay < 1 ? this.delay : delay;

        const cb = () => {

            this.timer.pause();

            // calculate amount of all resources first
            let amount = player.level;

            amount = amount * player.atk();

            const resources = {};
            const resTypes = [
                ResourceTypes.Wood,
                ResourceTypes.Metal,
                ResourceTypes.Cloth,
                ResourceTypes.Diamond
            ];

            // now distribute
            while (amount > 0) {

                const resType = getRandomArrayItem({
                    array: resTypes
                });

                resources[resType] = resources[resType] ? resources[resType]++ : 1;

                amount--;
            }

            this.counter++;

            callback({
                result: new Resources({
                    resources
                }),
                // todo calculate exp based on farm level
                exp: 10 * this.counter,
                // todo calculate dmg based on defense and dmg dealt
                dmg: 5.1 * this.counter,
                // todo calculate stamina used
                usedStamina: 2
            });

        };

        this.timer = new Timer({
            delay,
            callback: cb
        });
    }
}