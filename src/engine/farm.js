import DelayedObject from "./delayed_object";
import Timer from "../tools/timer";

export default class Farm extends DelayedObject {

    constructor(delay) {
        super(0);

        this.timer = undefined;
        this.delay = delay;
    }

    farm(cb) {

        this.timer = new Timer({
            callback: () => {
                cb({
                    wood: 1,
                    metal: 1,
                    cloth: 1,
                    diamond: 1
                });
            },
            delay: this.delay,
            autoStart: false
        });

        this.timer.start()
    }

    gettimeLeftInSeconds() {
        return this.timer ? this.timer.gettimeLeftInSeconds() : this.delay;
    }
}