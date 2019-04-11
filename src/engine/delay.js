import Timer from "../tools/timer";

export default class Delay {
    isDelaying = true;
    onDelayExpired = null;

    finish() {
        this.isDelaying = false;
        if (this.onDelayExpired) {
            this.onDelayExpired()
        }
    }

    constructor(
        delayInSeconds
    ) {
        if (delayInSeconds > -1) {
            this.delay = new Timer(
                {
                    callback: () => {
                        this.finish();
                    },
                    delay: delayInSeconds,
                    autoStart: true
                }
            )
        } else {
            this.finish();
        }
    }

    getTimeout() {
        return this.delay.getTimeLeftInSeconds()
    }
}