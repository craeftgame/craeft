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
import config from "../engine/config"

const version = "v0.1.0-alpha";
const versionMsg = `Welcome to Cräft! version: ${version}`;

/* eslint-disable-next-line no-console */
console.log(versionMsg);

global.delay = config.startDelay;

export default class Craeft {

    gameTick = null;

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

        knife.equiped = true;

        this.items = [
            knife
        ];
    }

    start({
              onTick
          } = {}) {
        // re-render every second
        const timeoutInSeconds = 1;
        this.gameTick = setInterval(() => {
            // tick the player
            this.player.tick();

            // tick all craefters
            for (const craefter of this.craefters) {
                craefter.tick();
            }

            // todo: tick the items

            if (onTick) {
                onTick();
            }

        }, timeoutInSeconds * 1000);
    }

    stop() {
        clearInterval(this.gameTick)
    }

    startFarming({
                     callback
                 } = {}) {
        this.farm.start({
            player: this.player,
            callback: (result) => {

                this.resources = new Resources()
                    .add(this.resources)
                    .add(result);

                this.player.damage(10);
                this.player.addExp(10);

                callback();
            }
        });
    }

}