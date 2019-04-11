import {
    Unknown,
    CraefterTypes,
    WeaponTypes,
    WeaponSlots, ArmorTypes
} from "./types";

const CraefterTypeNames = {
    [Unknown]: "???",
    [CraefterTypes.Weaponsmith]: "Weaponsmith",
    [CraefterTypes.Armorsmith]: "Armorsmith",
    [CraefterTypes.Jewelcraefter]: "Jewelcräfter",
    [CraefterTypes.Alchemist]: "Alchemist"
};

const ItemNames = {
    [Unknown]: "???",
    [WeaponTypes.Sword]: "Sword",
    [WeaponTypes.JewelSword]: "Jewel Sword",
    [WeaponTypes.Knife]: "Knife",
    [WeaponTypes.JewelKnife]: "Jewel Knife",
    [WeaponTypes.Staff]: "Staff",
    [WeaponTypes.Wand]: "Wand",
    [WeaponTypes.JewelWand]: "Jewel Wand",
    [ArmorTypes.Plate]: "Plate",
    [ArmorTypes.Mail]: "Mail"
};

const SlotNames = {
    [WeaponSlots.OneHanded]: "One-Handed",
    [WeaponSlots.TwoHanded]: "Two-Handed",
};

export {
    ItemNames,
    CraefterTypeNames,
    SlotNames
};
