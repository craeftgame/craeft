import Tickable from "./tickable";

import {
    log
} from "mathjs";

import {
    getRandomId
} from "../tools/rand";

export default class Organism extends Tickable {

    constructor({
                    name,
                    sta
                }) {
        super();

        this.dead = false;

        this.id = getRandomId();

        this.level = 1;
        this.name = name;

        this.staCurrent = sta;
        this.staMax = sta;

        this.expCurrent = 0;
        this.expMax = 20;
    }

    addExp(
        exp
    ) {
        if (!this.dead) {
            this.expCurrent += exp;
            if (this.expCurrent >= this.expMax) {
                // level up
                this.expCurrent = 0;
                this.levelUp();
            }
        }
    }

    levelUp() {
        this.level++;
        this.expMax = Math.floor(this.expMax + (50 * log(this.level, 10)));
    }

    exhaust(
        sta
    ) {
        this.staCurrent -= sta;

        if (this.staCurrent < 0) {
            this.staCurrent = 0
        }
    }
}