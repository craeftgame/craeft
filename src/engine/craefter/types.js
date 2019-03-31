const WeaponTypes = Object.freeze({
    Unknown: Symbol('unknown'),
    Knife: Symbol('knife'),
    JewelKnife: Symbol('jewel_sword'),
    Sword: Symbol('sword'),
    JewelSword: Symbol('jewel_sword'),
    Staff: Symbol('staff'),
    Wand: Symbol('wand'),
    JewelWand: Symbol('jewel_wand')
});

const ItemCategories = Object.freeze({
    Weapon: Symbol('weapon'),
    Armor: Symbol('armor'),
    Jewelery: Symbol('jewelery')
});

const CraefterTypes = Object.freeze({
    Weaponsmith: Symbol('weaponsmith'),
    Armorsmith: Symbol('armorsmith'),
    Jewelcraefter: Symbol('jewelcraefter')
});

export {
    ItemCategories,
    WeaponTypes,
    CraefterTypes
}