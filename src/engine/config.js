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
    disentchantRecyclingPercentFrom: 30,
    disentchantRecyclingPercentTo: 75
};
