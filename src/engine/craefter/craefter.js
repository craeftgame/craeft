import {getRandomArrayItem} from '../../tools/rand';
import peopleNames from '../data/people_names'
import DelayedObject from "../delayed_object";
import {CraefterTypes} from "./types";

export default class Craefter extends DelayedObject {
    isCraefting = false;

    constructor({
                    type = CraefterTypes.Unknown,
                    name = getRandomArrayItem(peopleNames),
                    luk = 0,
                    dex = 0,
                    str = 0,
                    int = 0,
                    sta = 5
                } = {}) {
        super(global.delay || 5);


        this.type = type;
        this.name = name;

        this.luk = luk;
        this.dex = dex;
        this.str = str;
        this.int = int;

        this.staCurrent = sta;
        this.staMax = sta;
    }

    tick() {
        if (this.staCurrent < this.staMax) {
            this.staCurrent += 0.01;
        }
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
}
