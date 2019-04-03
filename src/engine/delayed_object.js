import Timer from "../tools/timer";
import Tickable from "./tickable";

export default class DelayedObject extends Tickable {
    isCreating = true;
    onDoneCreating = null;

    constructor(
        delayInSeconds
    ) {
        super();

        this.creationTimer = new Timer(
            {
                callback: () => {
                    this.isCreating = false;
                    if (this.onDoneCreating) {
                        this.onDoneCreating()
                    }
                },
                delay: delayInSeconds,
                autoStart: true
            }
        )
    }

    getCreationTimeout() {
        return this.creationTimer.gettimeLeftInSeconds()
    }
}