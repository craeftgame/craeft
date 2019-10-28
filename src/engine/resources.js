import {
    ResourceTypes
} from "./data/types";
import {
    gcd
} from "mathjs";
import Ratios from "./ratios";

export default class Resources {

    constructor({
                    initialResources = 0,
                    resources = {}
                } = {}) {
        this[ResourceTypes.Wood] = resources[ResourceTypes.Wood] ? resources[ResourceTypes.Wood] : initialResources;
        this[ResourceTypes.Metal] = resources[ResourceTypes.Metal] ? resources[ResourceTypes.Metal] : initialResources;
        this[ResourceTypes.Cloth] = resources[ResourceTypes.Cloth] ? resources[ResourceTypes.Cloth] : initialResources;
        this[ResourceTypes.Diamond] = resources[ResourceTypes.Diamond] ? resources[ResourceTypes.Diamond] : initialResources;
    }

    static hydrate(obj) {
        const resources = Object.assign(new Resources(), obj);
        return resources;
    }

    add(resources) {
        this[ResourceTypes.Wood] += resources[ResourceTypes.Wood];
        this[ResourceTypes.Metal] += resources[ResourceTypes.Metal];
        this[ResourceTypes.Cloth] += resources[ResourceTypes.Cloth];
        this[ResourceTypes.Diamond] += resources[ResourceTypes.Diamond];
        return this;
    }

    sub(resources) {
        this[ResourceTypes.Wood] -= resources[ResourceTypes.Wood];
        this[ResourceTypes.Metal] -= resources[ResourceTypes.Metal];
        this[ResourceTypes.Cloth] -= resources[ResourceTypes.Cloth];
        this[ResourceTypes.Diamond] -= resources[ResourceTypes.Diamond];
        return this;
    }

    sum() {
        return (
            this[ResourceTypes.Wood] +
            this[ResourceTypes.Metal] +
            this[ResourceTypes.Cloth] +
            this[ResourceTypes.Diamond]
        );
    }

    gcd() {
        return gcd(
            this[ResourceTypes.Wood],
            this[ResourceTypes.Metal],
            this[ResourceTypes.Cloth],
            this[ResourceTypes.Diamond]
        );
    }

    ratios() {
        const gcd = this.gcd();
        const ratios = new Ratios();

        ratios[ResourceTypes.Wood] = this[ResourceTypes.Wood] / gcd;
        ratios[ResourceTypes.Metal] = this[ResourceTypes.Metal] / gcd;
        ratios[ResourceTypes.Cloth] = this[ResourceTypes.Cloth] / gcd;
        ratios[ResourceTypes.Diamond] = this[ResourceTypes.Diamond] / gcd;

        return ratios
    }
}