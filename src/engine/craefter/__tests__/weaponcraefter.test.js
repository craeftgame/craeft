/* globals describe, test, expect */
import WeaponCraefter from "../weaponcraefter"
import {Unknown, WeaponTypes} from "../../data/types";

describe("WeaponCraefter", () => {
    describe("evaluateItem", () => {

        describe("Staff", () => {

            test("should return item type wand if only wood", () => {
                const craefter = new WeaponCraefter();

                const item = craefter.evaluateItem({
                    wood: 100
                });

                expect(item.type).toBe(WeaponTypes.Staff)
            });

        });

        describe("Sword", () => {

            test("should return item type sword if only metal", () => {
                const weaponCraefter = new WeaponCraefter();

                const item = weaponCraefter.evaluateItem({
                    metal: 100
                });

                expect(item.type).toBe(WeaponTypes.Sword)
            });

            test("should return item type sword if metal is way larger than wood", () => {
                const weaponCraefter = new WeaponCraefter();

                const item = weaponCraefter.evaluateItem({
                    metal: 100,
                    wood: 20
                });

                expect(item.type).toBe(WeaponTypes.Sword)
            });

        });

        describe("Knife", () => {

            test("should return item type knife if metal is a little bit larger than wood", () => {
                const weaponCraefter = new WeaponCraefter();

                const item = weaponCraefter.evaluateItem({
                    metal: 30,
                    wood: 20
                });

                expect(item.type).toBe(WeaponTypes.Knife)
            });

        });

        describe("JewelSword", () => {

            test("make jewel sword", () => {
                const weaponCraefter = new WeaponCraefter();

                const res = {
                    metal: 5,
                    wood: 2,
                    diamond: 11
                };

                const item = weaponCraefter.evaluateItem(res);

                console.log(item.type, WeaponTypes.JewelSword);

                expect(item.type).toBe(WeaponTypes.JewelSword)
            });

        });

        describe("JewelKnife", () => {

            test("make jewel knife", () => {
                const weaponCraefter = new WeaponCraefter();

                const res = {
                    metal: 5,
                    wood: 5,
                    diamond: 11
                };

                const item = weaponCraefter.evaluateItem(res);

                expect(item.type).toBe(WeaponTypes.JewelKnife)
            });

        });

        describe("JewelWand", () => {

            test("make jewel wand", () => {
                const weaponCraefter = new WeaponCraefter();

                const res = {
                    wood: 5,
                    diamond: 11
                };

                const item = weaponCraefter.evaluateItem(res);

                expect(item.type).toBe(WeaponTypes.JewelWand)
            });

        });

        describe("mysterious", () => {

            test("Should create", () => {
                const weaponCraefter = new WeaponCraefter();

                const res = {
                    diamond: 50
                };

                const item = weaponCraefter.evaluateItem(res);

                expect(item.type).toBe(Unknown)
            });

        })

    });
});