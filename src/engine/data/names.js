import {
    Unknown,
    CraefterTypes,
    WeaponTypes,
    ArmorTypes,
    ArmorSlots
} from "./types";

const CraefterTypeNames = Object.freeze({
    [Unknown]: "???",
    [CraefterTypes.Weaponsmith]: "Weaponcräfter",
    [CraefterTypes.Armorsmith]: "Armorscräfter",
    [CraefterTypes.Jewelcraefter]: "Jewelcräfter",
    [CraefterTypes.Alchemist]: "Alchemist"
});

const ItemNames = Object.freeze({
    [Unknown]: "???",
    [WeaponTypes.Sword]: "Sword",
    [WeaponTypes.JewelSword]: "Jewel Sword",
    [WeaponTypes.Knife]: "Knife",
    [WeaponTypes.JewelKnife]: "Jewel Knife",
    [WeaponTypes.Staff]: "Staff",
    [WeaponTypes.Wand]: "Wand",
    [WeaponTypes.JewelWand]: "Jewel Wand",
    [ArmorTypes.WoodenPlate]: "Wooden Plate",
    [ArmorTypes.WoodenChainmail]: "Wooden Chainmail",
    [ArmorTypes.MetalPlate]: "Metal Plate",
    [ArmorTypes.MetalChainmail]: "Metal Chainmail",
    [ArmorTypes.Woven]: "Woven",
    [ArmorTypes.JewelWoven]: "Jewel Woven"
});

const SlotNames = Object.freeze({
    [ArmorSlots.Head]: "Head",
    [ArmorSlots.Body]: "Body",
    [ArmorSlots.Legs]: "Legs",
    [ArmorSlots.Feet]: "Feet",
});

export {
    CraefterTypeNames,
    ItemNames,
    SlotNames
};
