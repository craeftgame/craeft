import Timer from "../tools/timer";

export default class DelayedObject {
    constructor(delayInSeconds) {
        this.isCreating = true;

        this.creationTimer = new Timer(
            {
                callback: () => {
                    this.isCreating = false;
                },
                delay: delayInSeconds,
                autoStart: true
            }
        )
    }

    getIsCreating() {
        return this.isCreating
    }

    getCreationTimeout() {
        return this.creationTimer.gettimeLeftInSeconds()
    }
}