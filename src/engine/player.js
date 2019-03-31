import peopleNames from './data/people_names'
import { getRandomArrayItem } from '../tools/rand';

export default class Player {

    constructor({
        name = getRandomArrayItem(peopleNames),
        exp = 0,
        level = 1
    } = {}) {
        this.level = level;
        this.exp = exp;
        this.name = name;
    }
}