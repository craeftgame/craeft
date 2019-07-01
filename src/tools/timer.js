export default class Timer {

    timeout = null;
    startDate = null;
    running = false;

    constructor(
        {
            callback,
            delay,
            autoStart = true
        } = {}
    ) {
        this.callback = callback;

        this.delay = delay * 1000;
        this.remaining = this.delay;

        if (autoStart) {
            this.start();
        }
    }

    static hydrate(
        obj
    ) {
        const timer = Object.assign(new Timer(), obj);

        if (timer.remaining > 0) {
            timer.delay = timer.remaining;
            timer.start();
        }

        return timer;
    }

    start() {
        this.running = true;
        this.startDate = new Date();

        this.timeout = setTimeout(
            this.callback,
            this.remaining
        );

        this.ticker = setInterval(
            () => this.tick(),
            400
        )
    }

    tick() {
        this.remaining = this.delay - (new Date() - this.startDate)
    }

    pause() {
        this.running = false;

        clearTimeout(this.timeout);
        clearInterval(this.ticker);
    }

    getTimeLeft() {
        return this.remaining
    }

    getTimeLeftInSeconds() {
        return Math.round(this.getTimeLeft() / 1000)
    }

    getTimeoutString() {
        const timeoutInSeconds = this.getTimeLeftInSeconds();

        const mins = Math.floor(timeoutInSeconds / 60);

        if (mins > 0) {
            return `~${mins} Min`
        }

        return `${timeoutInSeconds} Sec`
    }
}