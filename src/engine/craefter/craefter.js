import {getRandomArrayItem} from "../../tools/rand";
import peopleNames from "../data/people_names"
import {CraefterTypes} from "../data/types";
import Organism from "../organism";
import Delay from "../delay";
import math from "mathjs";

export default class Craefter extends Organism {
    isCraefting = false;

    constructor({
                    type = CraefterTypes.Unknown,
                    name = getRandomArrayItem({
                        array: peopleNames
                    }),
                    str = 0,
                    dex = 0,
                    int = 0,
                    luk = 0,
                    sta = 5
                } = {}) {
        super({
            name,
            sta
        });

        this.delay = new Delay(global.delay || 5);

        this.type = type;
        this.name = name;

        this.luk = luk;
        this.dex = dex;
        this.str = str;
        this.int = int;
    }

    tick() {
        if (this.staCurrent < this.staMax) {
            this.staCurrent += 0.01;
        }
    }

    evaluateResouces(
        resources
    ) {
        resources = {
            wood: resources.wood || 0,
            metal: resources.metal || 0,
            cloth: resources.cloth || 0,
            diamond: resources.diamond || 0,
        };

        const gcd = math.gcd(
            resources.wood,
            resources.metal,
            resources.cloth,
            resources.diamond
        );

        const ratios = {
            wood: resources.wood / gcd,
            metal: resources.metal / gcd,
            cloth: resources.cloth / gcd,
            diamond: resources.diamond / gcd,
        };

        // evaluate power
        const resourcesSum = (
            resources.wood +
            resources.metal +
            resources.cloth +
            resources.diamond
        );

        return {
            res: resources,
            ratios,
            resourcesSum
        }
    }

    evaluateItemType(
        /* eslint-disable-next-line no-unused-vars */
        ratios
    ) {
        // stub please override
    }

    evaluateItem(
        /* eslint-disable-next-line no-unused-vars */
        resources
    ) {

        // stub please override
    }

    craeft(
        /* eslint-disable-next-line no-unused-vars */
        resources
    ) {
        // stub please override
    }

    evaluateSlot(
        /* eslint-disable-next-line no-unused-vars */
        type
    ) {

    }

    evaluateItemName(
        /* eslint-disable-next-line no-unused-vars */
        type,
        /* eslint-disable-next-line no-unused-vars */
        slot
    ) {
    }

    exhaust(
        sta
    ) {
        super.exhaust(sta);

        if (Math.floor(this.staCurrent <= 0)) {
            this.dead = true;
        }
    }

    static highestMaterial(
        ratios
    ) {
        const sortable = [];

        for (var resouce in ratios) {
            sortable.push([
                resouce,
                ratios[resouce]
            ]);
        }

        sortable.sort(function (a, b) {
            return a[1] - b[1];
        });

        return sortable[sortable.length - 1][0]
    }
}
