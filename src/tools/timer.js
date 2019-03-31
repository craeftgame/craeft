export default class Timer {

    constructor(
        {
            callback,
            delay,
            autoStart = true
        } = {}
    ) {

        this.callback = callback;

        this.id = undefined;
        this.startDate = undefined;

        this.remaining = delay * 1000;

        this.running = false;

        if (autoStart) {
            this.start();
        }
    }

    start() {
        this.running = true;
        this.startDate = new Date();
        this.id = setTimeout(this.callback, this.remaining)
    };

    pause() {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date() - this.startDate
    };

    getTimeLeft() {
        if (this.running) {
            this.pause();
            this.start()
        }

        return this.remaining
    };

    gettimeLeftInSeconds() {
        return Math.round(this.getTimeLeft() / 1000)
    }

    getStateRunning() {
        return this.running
    };
}