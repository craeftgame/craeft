import Timer from "../tools/timer";

export default class Farm {

    constructor(delay) {
        this.timer = null;
        this.delay = global.delay || delay;
    }

    farm(callback) {
        this.timer = new Timer({
            callback: () => {
                this.timer = null;
                callback({
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

    getTimeLeftInSeconds() {
        return this.timer ? this.timer.getTimeLeftInSeconds() : this.delay;
    }
}