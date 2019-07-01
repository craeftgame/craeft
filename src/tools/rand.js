function getRandomInt(
    min,
    max
) {
    min = Math.ceil(min);
    max = Math.floor(max);

    //The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArrayItem({
                                array,
                                start = 0
                            }) {
    const randomIndex = getRandomInt(start, array.length - 1);
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

function getRandomId() {
    let num = "";

    const array = new Uint8Array(30);
    window.crypto.getRandomValues(array);

    for (const n of array) {
        num += n.toString(16);
    }

    return num;
}

export {
    getRandomInt,
    getRandomId,
    getRandomArrayItem,
    getRandomObjectEntry
};