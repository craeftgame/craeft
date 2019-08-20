import Armor from "../items/armor";
import Craefter from "./craefter";
import {
    Unknown,
    CraefterTypes,
    ItemCategories,
    ArmorTypes,
    ArmorSlots,
    ResourceTypes
} from "../data/types";
import {
    getRandomInt,
    getRandomObjectEntry
} from "../../tools/rand";
import {
    ItemNames,
    SlotNames
} from "../data/names";

export default class Armorsmith extends Craefter {

    constructor({
                    name,
                    delay,
                    str = 4,
                    dex = 3,
                    luk = 9
                } = {}) {
        super({
            type: CraefterTypes.Armorsmith,
            name,
            delay,
            luk,
            dex,
            str
        });
    }

    static hydrate(obj) {
        const armorsmith = Object.assign(new Armorsmith(), obj);

        Craefter.hydrate(armorsmith, obj);

        return armorsmith;
    }

    evaluateItemType(
        ratios,
        highestResource
    ) {
        let type = Unknown;

        switch (highestResource) {
            case ResourceTypes.Metal:
                type = ArmorTypes.MetalPlate;

                if (ratios[ResourceTypes.Cloth] > 0) {
                    type = ArmorTypes.MetalChainmail;
                }
                break;
            case ResourceTypes.Wood:
                type = ArmorTypes.WoodenPlate;

                if (ratios[ResourceTypes.Cloth] > 0) {
                    type = ArmorTypes.WoodenChainmail;
                }
                break;
            case ResourceTypes.Cloth:
                type = ArmorTypes.Woven;

                if (ratios[ResourceTypes.Diamond] > 0) {
                    type = ArmorTypes.JewelWoven;
                }
                break;
            default:
                break
        }

        return type;
    }

    evaluateItem({
                     resources
                 }) {

        // 2 percent of all resources is the base
        const baseline = (resources.sum() / 100);

        // add atk mainly based on metal
        // todo add str influence
        const def = Math.round(
            baseline + Craefter.calculateMaterialImpact(resources[ResourceTypes.Metal])
        );

        // add matk mainly based on wood
        // todo add int influence
        const mdef = Math.round(
            baseline + Craefter.calculateMaterialImpact(resources[ResourceTypes.Wood])
        );

        const ratios = resources.ratios();
        const highestResource = ratios.getHighest();

        // todo: add level influence
        return {
            category: ItemCategories.Armor,
            type: this.evaluateItemType(
                ratios,
                highestResource
            ),
            rarity: Unknown,
            material: highestResource,
            def,
            defMax: Math.round(def + (def * Math.log(2))) || 1,
            mdef,
            mdefMax: Math.round(mdef + (mdef * Math.log(2))) || 1
        }
    }

    evaluateItemName(
        type,
        slot,
        /* eslint-disable-next-line no-unused-vars */
        isMultiSlot
    ) {
        return `${SlotNames[slot]} ${ItemNames[type]}`
    }

    evaluateSlot(
        /* eslint-disable-next-line no-unused-vars */
        type
    ) {
        return getRandomObjectEntry({
            object: ArmorSlots,
            start: 0
        });
    }

    craeft(
        resources
    ) {
        super.craeft();

        const {
            type,
            material,
            def,
            defMax,
            mdef,
            mdefMax
        } = this.evaluateItem(resources);

        const slot = this.evaluateSlot(type);

        const item = new Armor({
            name: this.evaluateItemName(
                type,
                slot
            ),
            craefterId: this.id,
            material,
            level: this.level,
            slot,
            def: getRandomInt(def, defMax),
            mdef: getRandomInt(mdef, mdefMax)
        });

        this.itemId = item.id;

        return item;
    }
}
