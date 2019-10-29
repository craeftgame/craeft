// create debug flag to fall back to debug values
const debug = process.env.NODE_ENV === "development";

module.exports = {
    // detect debug
    debug,

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
    rarityChancePercentEpic: 98.0
    // 98-99 - legendary
};
