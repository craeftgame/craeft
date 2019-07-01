import {
    ArmorSlots,
    WeaponSlots,
    JewelerySlots, ItemCategories
} from "./data/types";

export default class Equipment {

    [ArmorSlots.Head] = null;
    [ArmorSlots.Body] = null;
    [ArmorSlots.Legs] = null;
    [ArmorSlots.Feet] = null;
    [WeaponSlots.LeftHand] = null;
    [WeaponSlots.RightHand] = null;
    [JewelerySlots.Left] = null;
    [JewelerySlots.Right] = null;

    static hydrate(
        obj
    ) {
        const equipment = Object.assign(new Equipment(), obj);

        return equipment;
    }

    findSlotByItemId(
        itemId
    ) {

        const symbolSlots = Object.getOwnPropertySymbols(this);

        for (const slot of symbolSlots) {
            if (this[slot] &&
                this[slot].id === itemId) {
                return slot;
            }
        }
    }

    getEquiped() {
        const equiped = [];

        for (const equipmentSymbol of Object.getOwnPropertySymbols(this)) {
            const equipment = this[equipmentSymbol];
            if (equipment && equiped.indexOf(equipment) < 0) {
                equiped.push(equipment);
            }
        }

        return equiped;
    }

    equip(
        item
    ) {
        let equiped = false;

        if (item.category === ItemCategories.Weapon) {
            // we have a weapon, try to assign to hand
            if (item.isMultiSlot) {
                if (this[WeaponSlots.RightHand] === null &&
                    this[WeaponSlots.LeftHand] === null) {
                    this[WeaponSlots.RightHand] = item;
                    this[WeaponSlots.LeftHand] = item;
                    equiped = true;
                }
            } else {
                if (this[WeaponSlots.RightHand] === null) {
                    this[WeaponSlots.RightHand] = item;
                    equiped = true;
                } else if (this[WeaponSlots.LeftHand] === null) {
                    this[WeaponSlots.LeftHand] = item;
                    equiped = true;
                }
            }
        } else if (item.category === ItemCategories.Armor) {
            const {slot} = item;
            if (this[slot] === null) {
                this[slot] = item;
                equiped = true;
            }
        } else if (item.category === ItemCategories.Jewelery) {
            // we have a jewelery, try to assign to hand
            if (this[JewelerySlots.Right] === null) {
                this[JewelerySlots.Right] = item;
                equiped = true;
            } else if (this[JewelerySlots.Left] === null) {
                this[JewelerySlots.Left] = item;
                equiped = true;
            }
        }

        return equiped;
    }

    unequip(
        itemId
    ) {
        this[this.findSlotByItemId(itemId)] = null;
        this[this.findSlotByItemId(itemId)] = null;

        return true
    }

}