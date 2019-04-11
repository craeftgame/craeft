import Math from "mathjs";
import Tickable from "./tickable";

export default class Organism extends Tickable {

    constructor({
                    name,
                    sta
                }) {
        super();

        this.dead = false;

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
        this.expMax = this.expMax + (50 * Math.log(this.level, 10));
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