import { getRandomArrayItem } from '../../tools/rand';

const names = [
    'Selar',
    'Khemeir',
    'Meo',
    'Tackath',
    'Lirhuk',
    'Chioh',
    'Umeadrus'
];

export default class Crafter {
    constructor({
        type = 'unknown',
        name = getRandomArrayItem(names),
        luk = 0,
        dex = 0,
        str = 0
    } = {}) {
        this.type = type;
        this.name = name;

        this.luk = luk;
        this.dex = dex;
        this.str = str;
    }

    craft(
        resources
    ) {
        // stub please override
    }

    generateDescription() {
        return `Luk: ${this.luk} Dex: ${this.dex} Str: ${this.str}`
    }

    print() {
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
        console.log(`Crafter: ${this.name}`);
        console.log(this.generateDescription());
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n');
    }
}
