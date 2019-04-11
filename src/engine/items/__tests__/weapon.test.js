/* globals describe, it */
import Weapon from "../weapon";
import assert from "assert";

describe("Weapon", () => {
    describe("constructor", () => {
        it("should set atk correct", () => {
            const atk = 10;
            const item = new Weapon({atk});
            assert(item.atk, atk)
        });
    });
});
