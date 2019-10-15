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

    getEquipped() {
        const equipped = [];

        for (const equipmentSymbol of Object.getOwnPropertySymbols(this)) {
            const equipment = this[equipmentSymbol];
            if (equipment && equipped.indexOf(equipment) < 0) {
                equipped.push(equipment);
            }
        }

        return equipped;
    }

    equip(
        item
    ) {
        let equipped = false;

        if (item.category === ItemCategories.Weapon) {
            // we have a weapon, assign to hand
            // if it's a multi slit
            if (item.isMultiSlot) {

                // unequip right
                if (this[WeaponSlots.RightHand]) {
                    this[WeaponSlots.RightHand].equipped = false;
                }

                // unequip left
                if (this[WeaponSlots.LeftHand]) {
                    this[WeaponSlots.LeftHand].equipped = false;
                }

                // equip both
                this[WeaponSlots.RightHand] = item;
                this[WeaponSlots.LeftHand] = item;

                equipped = true;

            } else {
                // we have a one handed weapon

                // is right hand free?
                if (!this[WeaponSlots.RightHand]) {
                    // yes, equip
                    this[WeaponSlots.RightHand] = item;
                    equipped = true;
                } else {
                    // no, right hand is not free
                    // is left hand free?
                    if (!this[WeaponSlots.LeftHand]) {
                        this[WeaponSlots.LeftHand] = item;
                        equipped = true;
                    } else {
                        // no, both hands taken

                        // if we unquipped a multi slot weapon, unequip the other hand as well
                        if (this[WeaponSlots.RightHand].isMultiSlot) {
                            this[WeaponSlots.LeftHand] = null;
                        }
                        
                        // unequip what ever is in right hand
                        this[WeaponSlots.RightHand].equipped = false;

                        // equip ro right hand
                        this[WeaponSlots.RightHand] = item;

                        equipped = true;
                    }
                }
            }
        } else if (item.category === ItemCategories.Armor) {
            const {slot} = item;

            if (this[slot]) {
                this[slot].equipped = false;
            }

            this[slot] = item;
            equipped = true;
        } else if (item.category === ItemCategories.Jewelery) {
            // we have a jewelery, assign to hand
            if (!this[JewelerySlots.Left]) {
                this[JewelerySlots.Left] = item;
                equipped = true;
            } else {

                if (this[JewelerySlots.Right]) {
                    this[JewelerySlots.Right].equipped = false
                }
                this[JewelerySlots.Right] = item;
                equipped = true;
            }
        }

        return equipped;
    }

    unequip(
        itemId
    ) {
        this[this.findSlotByItemId(itemId)] = null;
        this[this.findSlotByItemId(itemId)] = null;

        return true
    }

    static hydrate(
        obj
    ) {
        const equipment = Object.assign(new Equipment(), obj);

        return equipment;
    }
}