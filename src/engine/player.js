import Math from "mathjs";
import peopleNames from "./data/people_names"
import {ItemCategories, WeaponSlots} from "./data/types";
import {getRandomArrayItem} from "../tools/rand";
import Organism from "./organism";

export default class Player extends Organism {

    constructor({
                    name = getRandomArrayItem({
                        array: peopleNames
                    }),
                    // stats
                    hp = 50,
                    sta = 25,
                    // attributes
                    str = 10,
                    int = 7,
                    dex = 2,
                    luk = 1,
                    vit = 2
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

        this.equipment = {
            "left-hand": null,
            "right-hand": null,
            head: null,
            body: null,
            legs: null,
            feet: null,
            jewlery1: null,
            jewlery2: null,

        }
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

        for (const equipment of Object.values(this.equipment)) {
            if (equipment && equipment.atk) {
                atk += equipment.atk * this.str;
            }
        }

        return atk;
    }

    matk() {
        let matk = 0;

        for (const equipment of Object.values(this.equipment)) {
            if (equipment && equipment.matk) {
                matk += equipment.matk * this.int;
            }
        }

        return matk;
    }

    def() {
        let def = 0;

        for (const equipment of Object.values(this.equipment)) {
            if (equipment && equipment.def) {
                def += equipment.def * this.vit;
            }
        }

        return def;
    }

    mdef() {
        let mdef = 0;

        for (const equipment of Object.values(this.equipment)) {
            if (equipment && equipment.mdef) {
                mdef += equipment.mdef * this.int;
            }
        }

        return mdef;
    }

    findSlotByItem(item) {
        const slots = Object.keys(this.equipment);

        for (const slot of slots) {
            if (this.equipment[slot] === item) {
                return slot;
            }
        }
    }

    equip(
        item
    ) {
        let equiped = false;

        if (item.category === ItemCategories.Weapon) {
            // we have a weapon, try to assign to hand

            if (item.slot === WeaponSlots.OneHanded) {
                if (this.equipment["right-hand"] === null) {
                    this.equipment["right-hand"] = item;
                    equiped = true;
                } else if (this.equipment["left-hand"] === null) {
                    this.equipment["left-hand"] = item;
                    equiped = true;
                }
            } else {
                if (this.equipment["right-hand"] === null &&
                    this.equipment["left-hand"] === null) {
                    this.equipment["right-hand"] = item;
                    this.equipment["left-hand"] = item;
                    equiped = true;
                }
            }
        } else if (item.category === ItemCategories.Armor) {
            // we have an armor, try to assign to feet
            if (this.equipment.feet === null) {
                this.equipment.feet = item;
                equiped = true;
            } else if (this.equipment.legs === null) {
                this.equipment.legs = item;
                equiped = true;
            } else if (this.equipment.body === null) {
                this.equipment.body = item;
                equiped = true;
            } else if (this.equipment.head === null) {
                this.equipment.head = item;
                equiped = true;
            }
        } else if (item.category === ItemCategories.Jewelery) {
            // we have a jewelery, try to assign to hand
            if (this.equipment.jewlery2 === null) {
                this.equipment.jewlery2 = item;
                equiped = true;
            } else if (this.equipment.jewlery1 === null) {
                this.equipment.jewlery1 = item;
                equiped = true;
            }
        }

        return equiped;
    }

    unequip(
        item
    ) {
        this.equipment[this.findSlotByItem(item)] = null;
        this.equipment[this.findSlotByItem(item)] = null;

        return true
    }

    levelUp() {
        super.levelUp();

        this.hpMax = this.hpMax + (50 * Math.log(this.level, 10));
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
        }
    }

}