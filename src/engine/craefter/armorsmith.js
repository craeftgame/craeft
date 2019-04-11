import Armor from "../items/armor";
import Craefter from "./craefter";
import {
    CraefterTypes,
    ItemCategories,
    ArmorTypes
} from "../data/types";
import {getRandomInt} from "../../tools/rand";

export default class Armorsmith extends Craefter {

    constructor({
                    name,
                    luk,
                    dex,
                    str
                } = {}) {
        super({
            type: CraefterTypes.Armorsmith,
            name,
            luk,
            dex,
            str
        });
    }

    evaluateItemType(
        ratios
    ) {
        let type = ArmorTypes.Unknown;

        const highestResource = Craefter.highestMaterial(ratios);

        switch (highestResource) {
            case "metal":
                type = ArmorTypes.Plate;
                break;
            case "wood":
                type = ArmorTypes.Plate;
                break;
            case "cloth":
                break;
            default:
                break
        }

        return type;
    }

    evaluateItem(
        resources
    ) {
        const {
            res,
            ratios,
            resourcesSum
        } = this.evaluateResouces(resources);

        // 2 percent of all resources is the base
        const baseline = (resourcesSum / 100) * 2;

        // add atk mainly based on metal
        const def = Math.floor(
            baseline + ((res.metal ? res.metal : 1) / 100) * 80
        );

        // add matk mainly based on wood
        const mdef = Math.floor(
            baseline + ((res.wood ? res.wood : 1) / 100) * 80
        );

        // todo: add level influence

        return {
            category: ItemCategories.Weapon,
            type: this.evaluateItemType(ratios),
            def,
            defMax: Math.round(def + ((def / 100) * 10)) || 1,
            mdef,
            mdefMax: Math.round(mdef + ((mdef / 100) * 10)) || 1
        }
    }

    evaluateItemName(
        type,
        slot
    ) {
        super.evaluateItemName(type, slot);
    }

    craeft(
        resources
    ) {
        const {
            type,
            def,
            defMax,
            mdef,
            mdefMax
        } = this.evaluateItem(resources);

        const slot = this.evaluateSlot(type);

        return new Armor({
            name: this.evaluateItemName(
                type,
                slot
            ),
            def: getRandomInt(def, defMax),
            mdef: getRandomInt(mdef, mdefMax)
        });
    }
}
