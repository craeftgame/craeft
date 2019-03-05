export default class Item {
    constructor({
        name
    } = {}) {
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
