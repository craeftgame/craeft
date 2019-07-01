export default class ArrayHelper {
    static findById(
        array,
        id
    ) {
        return array.find((obj) => obj.id === id);
    }
}