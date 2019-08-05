import {
    CraefterTypes,
    ItemCategories,
    ResourceTypes
} from "./data/types";

import Resources from "./resources";
import Player from "../engine/player";
import Farm from "../engine/farm";
import Weapon from "./items/weapon";
import Armor from "./items/armor";
import Weaponsmith from "./craefter/weaponsmith";
import Armorsmith from "./craefter/armorsmith";

import Serializer from "@craeft/serializer";
import {
    log,
    pow
} from "mathjs";

import config from "./config"

// storage
import ls from "local-storage";
import zip from "lz-string/libs/lz-string";

const version = `v${process.env.REACT_APP_VERSION}`;
const versionMsg = `Welcome to Cräft! version: ${version}`;

/* eslint-disable-next-line no-console */
console.log(versionMsg);

global.delay = config.startDelay;

export default class Craeft {

    gameTick = null;
    onTick = null;

    logs = [
        versionMsg
    ];

    // the player
    player = new Player();

    // the farm
    farm = new Farm();

    // craefters
    craefters = [];

    // items
    items = [];

    // resources
    resources = new Resources({
        initialResources: config.startResources
    });

    serialize() {

        return Serializer.serialize({
            obj: this,
            compress: true
        });
    }

    static deserialize(
        json
    ) {

        const obj = Serializer.deserialize(json);

        const craeft = Object.assign(new Craeft(), obj);

        craeft.resources = Resources.hydrate(obj.resources);
        craeft.farm = Farm.hydrate(obj.farm);

        for (const itemIndex in craeft.items) {

            const item = craeft.items[itemIndex];
            let ti;

            switch (item.category) {
                case ItemCategories.Weapon:
                    ti = Weapon.hydrate(item);
                    break;
                case ItemCategories.Armor:
                    ti = Armor.hydrate(item);
                    break;
                default:
                    break;
            }

            craeft.items[itemIndex] = ti;
        }

        for (const craefterIndex in craeft.craefters) {

            const craefter = craeft.craefters[craefterIndex];
            let tc;

            switch (craefter.type) {
                case CraefterTypes.Weaponsmith:
                    tc = Weaponsmith.hydrate(craefter);
                    break;
                case CraefterTypes.Armorsmith:
                    tc = Armorsmith.hydrate(craefter);
                    break;
                default:
                    break;
            }

            craeft.craefters[craefterIndex] = tc;
        }

        craeft.player = Player.hydrate(obj.player);

        return craeft;
    }

    constructor() {

        const knife = new Weapon({
            name: "Newbie Knife",
            material: ResourceTypes.Metal,
            atk: 1,
            matk: 1,
            delay: -1
        });

        this.player.equipment.equip(knife);

        knife.equipped = true;

        this.items = [
            knife
        ];
    }

    tick() {
        // tick the player
        this.player.tick();

        // tick all craefters
        for (const craefter of this.craefters) {
            craefter.tick();
        }

        // tick all the items
        for (const item of this.items) {
            item.tick();
        }

        if (this.onTick) {
            this.onTick();
        }
    }

    start({
              onTick
          } = {}) {
        // re-render every second
        const timeoutInSeconds = 1;
        this.onTick = onTick;
        this.gameTick = setInterval(() => {
            this.tick();
        }, timeoutInSeconds * 1000);
    }

    stop() {
        clearInterval(this.gameTick);
        // final tick
        this.tick();
    }

    startFarming({
                     callback
                 } = {}) {
        this.farm.start({
            player: this.player,
            callback: ({
                           result,
                           dmg,
                           exp,
                           usedStamina
                       } = {}) => {

                this.resources = new Resources()
                    .add(this.resources)
                    .add(result);

                this.player.damage(dmg);
                this.player.addExp(exp);
                this.player.exhaust(usedStamina);

                callback();
            }
        });
    }

    addCraefter(
        which
    ) {
        let craefter;

        const delay = config.startDelay * pow(log(this.craefters.length + 2), 20);

        switch (which) {
            case CraefterTypes.Weaponsmith:
                craefter = new Weaponsmith({
                    delay
                });
                break;

            case CraefterTypes.Armorsmith:
                craefter = new Armorsmith({
                    delay
                });
                break;

            default:
                throw new Error("Unknown craefter type")
        }

        this.craefters.push(craefter);

        craefter.onDoneCreating = (exp) => {
            this.player.addExp(exp);
        };
    }

    static saveState() {
        if (config.useLocalStorage) {
            const state = global.craeft.serialize();

            ls.set(
                "state",
                config.compressLocalStorage ?
                    zip.compress(state) : state
            );
        }
    }

    static loadState() {

        let state = null;

        if (config.useLocalStorage) {

            const localState = ls.get("state");

            if (localState) {
                // if the state starts with { it is uncompressed
                state = localState.startsWith("{") ?
                    localState : zip.decompress(localState)
            }

            if (state) {
                global.craeft = Craeft.deserialize(state)
            }
        }
    }
}

global.craeft = new Craeft();
