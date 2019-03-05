function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomArrayItem(array) {
    return array[getRandomInt(0, array.length - 1)]
}

export {
    getRandomInt,
    getRandomArrayItem
};