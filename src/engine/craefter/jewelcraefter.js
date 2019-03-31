import Armor from '../items/armor';
import Craefter from './craefter';
import math from "mathjs";

export default class Jewelcraefter extends Craefter {
    constructor({
                    name,
                    luk,
                    dex,
                    str
                } = {}) {
        super({
            type: 'Jewelcraefter',
            name,
            luk,
            dex,
            str
        });
    }

    evaluateItem(resources) {

        const gcd = math.gcd(
            resources.wood || 0,
            resources.metal || 0,
            resources.cloth || 0,
            resources.diamond || 0
        );

        const ratios = {
            wood: resources.wood / gcd,
            metal: resources.metal / gcd,
            cloth: resources.cloth / gcd,
            diamond: resources.diamond / gcd,
        };

        let type = '???';

        const highestResource = Craefter.highestMaterial(ratios);

        switch (highestResource) {
            case 'metal':
                type = 'plate';

                if (ratios.cloth > 0) {
                    type = 'mail';

                    if (ratios.diamond > ratios.metal * 2) {
                        type = 'diamond_mail'
                    }
                } else if (ratios.diamond > ratios.metal * 2) {
                    type = 'diamond_plate'
                }
                break;
            case 'cloth':
                type = 'robe';

                if (ratios.diamond > 0) {
                    type = 'jewe_robe';
                }
                break;
            default:
                break
        }

        const resSum = (
            resources.wood +
            resources.metal +
            resources.cloth +
            resources.diamond
        );

        return {
            category: 'jewlery',
            type,
            atk: resSum * Math.random()
        }
    }

    craeft(resources) {
        return new Armor({
            name: 'test',
            def: 100,
            mdef: 100
        });
    }
}
