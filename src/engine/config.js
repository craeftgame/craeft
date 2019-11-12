// create debug flag to fall back to debug values
const debug = process.env.NODE_ENV === "development" && false;

module.exports = {
    // detect debug
    debug,

    subLogo: "Alpha",

    // general config
    useLocalStorage: false,
    compressLocalStorage: true,

    // game parameters
    startResources: debug ? 1000 : 0,
    startDelay: 1,

    // disentchant
    disentchantRecyclingPercentFrom: 30,
    disentchantRecyclingPercentTo: 75,

    // item rarity
    // 0-79
    rarityChancePercentCommon: 80.0,
    // 80-84
    rarityChancePercentRare: 85.0,
    // 85-98
    rarityChancePercentEpic: 98.0,
    // 98-99 - legendary

    // start delays
    initialItemDelay: debug ? 1 : 10,
    initialCraefterDelay: debug ? 1 : 5,
    initialFarmDelay: debug ? 1 : 2,

    // play initial stats
    playerInitialHp: 50,
    playerInitialSta: 25,

    playerInitialStrFrom: 0,
    playerInitialStrTo: 10,

    playerInitialVitFrom: 1,
    playerInitialVitTo: 2,

    playerInitialIntFrom: 0,
    playerInitialIntTo: 7,

    playerInitialDexFrom: 0,
    playerInitialDexTo: 2,

    // craefter initial stats
    craefterInitialSta: 5,

    weaponCraefterInitialStr: 9,
    weaponCraefterInitialInt: 3,
    weaponCraefterInitialDex: 5,
    weaponCraefterInitialLuk: 6,

    armorCraefterInitialStr: 4,
    armorCraefterInitialInt: 2,
    armorCraefterInitialDex: 3,
    armorCraefterInitialLuk: 9,

    organismInitialRequiredExp: 20
};
