const Unknown = Object.freeze(Symbol("unknown"));

const WeaponTypes = Object.freeze({
    Unknown,
    Knife: Symbol("knife"),
    JewelKnife: Symbol("jewel_sword"),
    Sword: Symbol("sword"),
    JewelSword: Symbol("jewel_sword"),
    Staff: Symbol("staff"),
    Wand: Symbol("wand"),
    JewelWand: Symbol("jewel_wand")
});

const ArmorTypes = Object.freeze({
    Unknown,
    Plate: Symbol("plate"),
    Mail: Symbol("mail")
});

const ItemCategories = Object.freeze({
    Unknown,
    Weapon: Symbol("weapon"),
    Armor: Symbol("armor"),
    Jewelery: Symbol("jewelery")
});

const CraefterTypes = Object.freeze({
    Unknown,
    Weaponsmith: Symbol("weaponsmith"),
    Armorsmith: Symbol("armorsmith"),
    Jewelcraefter: Symbol("jewelcraefter"),
    Alchemist: Symbol("alchemist")
});

const WeaponSlots = Object.freeze({
    Unknown,
    OneHanded: Symbol("onehanded"),
    TwoHanded: Symbol("twohanded")
});

const ArmorSlots = Object.freeze({
    Unknown,
    Head: Symbol("head"),
    Body: Symbol("body"),
    Legs: Symbol("legs"),
    Feet: Symbol("feet")
});

export {
    Unknown,
    CraefterTypes,
    ItemCategories,
    WeaponTypes,
    WeaponSlots,
    ArmorSlots,
    ArmorTypes
}
