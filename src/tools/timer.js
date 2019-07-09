export default class Timer {

	timeout = null;
	startDate = null;
	running = false;

	constructor({
					callback,
					delay,
					autoStart = true
				} = {}) {
		this.callback = callback;

		// make it milliseconds
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

	trigger() {
		if (this.callback) {
			this.callback()
		}

		this.pause();
	}

	start() {
		this.running = true;
		this.startDate = new Date();

		this.ticker = setInterval(
			() => this.tick(),
			400
		);

		this.tick();
	}

	tick() {
		this.remaining = this.delay - (new Date() - this.startDate);

		if (this.remaining <= 0) {
			this.trigger()
		}
	}

	pause() {
		this.running = false;

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

		if (mins > 60) {
			const hours = Math.floor(mins / 60);

			if (hours > 24) {
				const days = Math.floor(hours / 24);
				return `~${days} Day`
			}

			return `~${hours} Hrs`
		}

		if (mins > 0) {
			return `~${mins} Min`
		}

		return `${timeoutInSeconds} Sec`
	}
}