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
    playerHp: 50
};
