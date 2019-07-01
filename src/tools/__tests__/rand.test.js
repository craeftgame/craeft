/* globals describe, test */
import assert from "assert"
import {
    getRandomArrayItem,
    getRandomObjectEntry,
    getRandomInt
} from "../rand"

describe("rand", () => {
    describe("getRandomObjectEntry", () => {

        test("should return one of the elements", () => {
            const entry = getRandomObjectEntry({
                object: {
                    "one": "one",
                    "two": "two"
                },
                start: 1
            });

            assert(
                entry === "one" ||
                entry === "two"
            )
        });
    });

    describe("getRandomArrayItem", () => {

        test("should return one of the elements", () => {
            const entry = getRandomArrayItem({
                array: [
                    "one",
                    "two"
                ],
                start: 0
            });

            assert(
                entry === "one" ||
                entry === "two"
            )
        });

        test("should return one of the elements", () => {
            const entry = getRandomArrayItem({
                array: [
                    "one"
                ],
                start: 0
            });

            assert(
                entry === "one"
            )
        });
    });

    describe("randomInt", () => {

        test("should return one of the elements", () => {
            const rand = getRandomInt(0, 2);

            assert(
                rand === 0 ||
                rand === 1 ||
                rand === 2
            )
        });

    });
});