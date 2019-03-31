import DelayedObject from "../delayed_object";

export default class Item extends DelayedObject {
    constructor({
                    name
                } = {}) {
        super(50);

        this.name = name;
    }

    generateDescription() {
        // stub please override
    }

    print() {
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
        console.log(`Item: ${this.name}`);
        console.log(this.generateDescription());
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n');
    }
}
