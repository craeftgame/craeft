import Tickable from "./tickable";

import {
    log
} from "mathjs";

import {
    getRandomId
} from "../tools/rand";

import config from "./config"

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
        this.expMax = config.organismInitialRequiredExp;
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

        global.craeft.logs.push(`"${this.name}" has reached Level ${this.level}`);
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