import DelayedObject from "../delayed_object";

export default class Item extends DelayedObject {
    constructor({
                    name
                } = {}) {
        super(global.delay || 50);

        this.name = name;
    }
}
