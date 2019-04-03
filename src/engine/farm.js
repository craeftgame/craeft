import Timer from "../tools/timer";

export default class Farm {

    constructor(delay) {

        this.timer = null;
        this.delay = global.delay || delay;
    }

    farm(cb) {

        this.timer = new Timer({
            callback: () => {
                this.timer = null;
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