import Timer from "../tools/timer";
import Resources from "./resources";

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

        // todo calculate stamina used
        player.exhaust(1);

        this.timer.callback = () => {

            this.timer.pause();
            this.timer = new Timer({
                delay: this.delay,
                autoStart: false
            });

            callback(
                new Resources({
                    initialResources: 1
                })
            );

        };

        this.timer.start();
    }
}