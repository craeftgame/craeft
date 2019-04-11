function getRandomInt(
    min,
    max
) {
    min = Math.ceil(min);
    max = Math.floor(max);

    //The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArrayItem({
                                array,
                                start = 0
                            }) {
    const randomIndex = getRandomInt(start, array.length);
    return array[randomIndex]
}

function getRandomObjectEntry({
                                  object,
                                  start
                              }) {
    const array = Object.keys(object);

    const randomIndex = getRandomArrayItem({
        array,
        start
    });

    return object[randomIndex];
}

export {
    getRandomInt,
    getRandomArrayItem,
    getRandomObjectEntry
};