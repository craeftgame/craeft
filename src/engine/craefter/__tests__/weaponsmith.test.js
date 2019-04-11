/* globals describe, test */
import assert from "assert"
import Weaponsmith from "../weaponsmith"
import {WeaponTypes} from "../../data/types";

describe("Weaponsmith", () => {
    describe("evaluateItem", () => {

        test("should return item type wand if only wood", () => {
            const craefter = new Weaponsmith();

            const item = craefter.evaluateItem({
                wood: 100
            });

            assert(item.type, "wand")
        });

        test("should return item type sword if only metal", () => {
            const weaponsmith = new Weaponsmith();

            const item = weaponsmith.evaluateItem({
                metal: 100
            });

            assert(item.type, "sword")
        });

        test("should return item type knife if metal is a little bit larger than wood", () => {
            const weaponsmith = new Weaponsmith();

            const item = weaponsmith.evaluateItem({
                metal: 30,
                wood: 20
            });

            assert(item.type, WeaponTypes.Knife)
        });

        test("should return item type sword if metal is way larger than wood", () => {
            const weaponsmith = new Weaponsmith();

            const item = weaponsmith.evaluateItem({
                metal: 100,
                wood: 20
            });

            assert(item.type, WeaponTypes.Sword)
        });

        test("correct atk", () => {
            const weaponsmith = new Weaponsmith();

            const res = {
                metal: 5,
                wood: 1
            };

            const item = weaponsmith.evaluateItem(res);

            assert(item.type, WeaponTypes.Sword)
        });
    })
});