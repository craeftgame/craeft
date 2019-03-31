import {getRandomArrayItem} from '../../tools/rand';
import peopleNames from '../data/people_names'
import DelayedObject from "../delayed_object";

export default class Craefter extends DelayedObject {
    constructor({
                    type = 'unknown',
                    name = getRandomArrayItem(peopleNames),
                    luk = 0,
                    dex = 0,
                    str = 0
                } = {}) {
        super(5);

        this.isCraefting = false;
        this.type = type;
        this.name = name;

        this.luk = luk;
        this.dex = dex;
        this.str = str;

    }

    evaluateItemType(
        ratios
    ) {

        // stub please override
    }

    evaluateItem(
        resources
    ) {

        // stub please override
    }

    craeft(
        resources
    ) {
        // stub please override
    }

    getIsCraefting() {
        return this.isCraefting
    }

    generateDescription() {
        return `Luk: ${this.luk} Dex: ${this.dex} Str: ${this.str}`
    }

    static highestMaterial(
        ratios
    ) {
        var sortable = [];
        for (var resouce in ratios) {
            sortable.push([resouce, ratios[resouce]]);
        }

        sortable.sort(function (a, b) {
            return a[1] - b[1];
        });

        return sortable[sortable.length - 1][0]
    }

    print() {
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
        console.log(`Cräfter: ${this.name}`);
        console.log(this.generateDescription());
        console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n');
    }
}
