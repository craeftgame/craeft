const Unknown = Object.freeze(Symbol.for("unknown"));

const WeaponTypes = Object.freeze({
    Knife: Symbol.for("knife"),
    JewelKnife: Symbol.for("jewel_knife"),
    Sword: Symbol.for("sword"),
    JewelSword: Symbol.for("jewel_sword"),
    Staff: Symbol.for("staff"),
    Wand: Symbol.for("wand"),
    JewelWand: Symbol.for("jewel_wand")
});

const ArmorTypes = Object.freeze({
    WoodenPlate: Symbol.for("wooden_plate"),
    MetalPlate: Symbol.for("metal_plate"),
    WoodenChainmail: Symbol.for("wooden_chainmail"),
    MetalChainmail: Symbol.for("metal_chainmail"),
    Woven: Symbol.for("woven"),
    JewelWoven: Symbol.for("jewel_woven")
});

const ItemCategories = Object.freeze({
    Weapon: Symbol.for("weapon"),
    Armor: Symbol.for("armor"),
    Jewelery: Symbol.for("jewelery")
});

const CraefterTypes = Object.freeze({
    Weaponsmith: Symbol.for("weaponsmith"),
    Armorsmith: Symbol.for("armorsmith"),
    Jewelcraefter: Symbol.for("jewelcraefter"),
    Alchemist: Symbol.for("alchemist")
});

const WeaponSlots = Object.freeze({
    LeftHand: Symbol.for("left_hand"),
    RightHand: Symbol.for("right_hand")
});

const ArmorSlots = Object.freeze({
    Head: Symbol.for("head"),
    Body: Symbol.for("body"),
    Legs: Symbol.for("legs"),
    Feet: Symbol.for("feet")
});

const JewelerySlots = Object.freeze({
    Left: Symbol.for("left"),
    Right: Symbol.for("right")
});

const ResourceTypes = Object.freeze({
    Wood: Symbol.for("wood"),
    Metal: Symbol.for("metal"),
    Cloth: Symbol.for("cloth"),
    Diamond: Symbol.for("diamond")
});

export {
    Unknown,
    ResourceTypes,
    CraefterTypes,
    ItemCategories,
    WeaponTypes,
    WeaponSlots,
    ArmorSlots,
    ArmorTypes,
    JewelerySlots
}
