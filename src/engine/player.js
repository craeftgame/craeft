import {
    log
} from "mathjs";
import peopleNames from "./data/people_names"
import {
    getRandomArrayItem,
    getRandomInt
} from "../tools/rand";
import Organism from "./organism";
import Equipment from "./equipment";

export default class Player extends Organism {

    equipment = new Equipment();

    constructor({
                    name = getRandomArrayItem({
                        array: peopleNames
                    }),
                    // stats
                    hp = 50,
                    sta = 25,
                    // attributes
                    str = getRandomInt(0, 10),
                    int = getRandomInt(0, 7),
                    dex = getRandomInt(0, 2),
                    luk = getRandomInt(0, 1),
                    vit = getRandomInt(0, 2)
                } = {}) {
        super({
            name,
            sta
        });

        this.luk = luk;
        this.dex = dex;
        this.str = str;
        this.int = int;
        this.vit = vit;

        this.hpCurrent = hp;
        this.hpMax = hp;

        this.class = "Novice"
    }

    static hydrate(obj) {
        const player = Object.assign(new Player(), obj);

        player.equipment = Equipment.hydrate(obj.equipment);

        return player;
    }

    tick() {
        // regenerate stamina
        if (this.staCurrent < this.staMax) {
            this.staCurrent += 0.1;
        }

        // regenerate hp
        if (this.hpCurrent < this.hpMax) {
            this.hpCurrent += (0.1 * this.vit);
        }
    }

    atk() {
        let atk = 0;

        for (const equipment of this.equipment.getEquipped()) {
            if (equipment.atk) {
                atk += equipment.atk * this.str;
            }
        }

        return atk;
    }

    matk() {
        let matk = 0;

        for (const equipment of this.equipment.getEquipped()) {
            if (equipment.matk) {
                matk += equipment.matk * this.int;
            }
        }

        return matk;
    }

    def() {
        let def = 0;

        for (const equipment of this.equipment.getEquipped()) {
            if (equipment.def) {
                def += equipment.def * this.vit;
            }
        }

        return def;
    }

    mdef() {
        let mdef = 0;

        for (const equipment of this.equipment.getEquipped()) {
            if (equipment.mdef) {
                mdef += equipment.mdef * this.int;
            }
        }

        return mdef;
    }

    levelUp() {
        super.levelUp();

        this.hpMax = this.hpMax + (50 * log(this.level, 10));
        this.hpCurrent = this.hpMax;
    }

    damage(
        dmg
    ) {
        this.hpCurrent -= dmg;

        if (Math.floor(this.hpCurrent) <= 0) {
            // killed
            this.hpCurrent = 0;
            this.dead = true;

            global.craeft.logs.push(`${this.class} ${this.name} died!`);
            global.craeft.stop(true);
        }
    }

}