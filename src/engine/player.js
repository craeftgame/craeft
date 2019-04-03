import peopleNames from './data/people_names'
import {getRandomArrayItem} from '../tools/rand';
import Tickable from "./tickable";

export default class Player extends Tickable {

    luk;
    dex;
    int;
    str;


    constructor({
                    name = getRandomArrayItem(peopleNames),
                    // level ralated
                    exp = 0,
                    level = 1,
                    // stats
                    hp = 50,
                    sta = 25,
                    // attributes
                    str = 10,
                    int = 7,
                    dex = 2,
                    luk = 1
                } = {}) {
        super();

        this.luk = luk;
        this.dex = dex;
        this.str = str;
        this.int = int;

        this.level = level;
        this.name = name;

        this.expCurrent = exp;
        this.expMax = 32;

        this.hpCurrent = hp;
        this.hpMax = hp;

        this.staCurrent = sta;
        this.staMax = sta;
    }

    tick() {
        if (this.staCurrent < this.staMax) {
            this.staCurrent += 0.1;
        }
    }

    addExp(exp) {
        this.expCurrent += exp;
        if (this.expCurrent > this.expMax) {
            this.level++;
            this.expCurrent = 0;
            this.expMax = this.expMax + (100 / this.expMax * 5)
        }
    }
}