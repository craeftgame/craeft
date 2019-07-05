import Timer from "../tools/timer";
import Resources from "./resources";
import {
    ResourceTypes
} from "./data/types";
import {getRandomArrayItem} from "../tools/rand";

export default class Farm {

    constructor({
                    delay = global.delay || 2
                } = {}) {
        this.delay = delay;
        this.timer = new Timer({
            delay,
            autoStart: false
        });
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

        this.timer.callback = () => {

            this.timer.pause();
            this.timer = new Timer({
                delay: this.delay,
                autoStart: false
            });

            // calculate amount of all resources first

            var amount = player.level;

            // now distribute

            const resources = {};
            const resTypes = [
                ResourceTypes.Wood,
                ResourceTypes.Metal,
                ResourceTypes.Cloth,
                ResourceTypes.Diamond
            ];

            while (amount > 0) {

                const resType = getRandomArrayItem({
                    array: resTypes
                });

                resources[resType] = resources[resType] ? resources[resType]++ : 1;

                amount--;
            }

            callback({
                // todo calculate result based on level
                result: new Resources({
                    resources
                }),
                // todo calculate exp based on farm level
                exp: 10,
                // todo calculate dmg based on defense and dmg dealt
                dmg: 1,
                // todo calculate stamina used
                usedStamina: 10
            });

        };

        this.timer.start();
    }
}