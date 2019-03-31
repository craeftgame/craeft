import assert from 'assert'
import Craefter from '../craefter'

describe('Craefter', () => {
    describe('evaluateItem', () => {

        test('should return item type wand if only wood', () => {
            const craefter = new Craefter();

            const item = craefter.evaluateItem({
                wood: 100
            });

            assert(item.type, 'wand')
        });

        test('should return item type sword if only metal', () => {
            const craefter = new Craefter();

            const item = craefter.evaluateItem({
                metal: 100
            });

            assert(item.type, 'sword')
        });

        test('should return item type knife if metal is a little bit larger than wood', () => {
            const craefter = new Craefter();

            const item = craefter.evaluateItem({
                metal: 30,
                wood: 20
            });

            assert(item.type, 'knife')
        });

        test('should return item type sword if metal is way larger than wood', () => {
            const craefter = new Craefter();

            const item = craefter.evaluateItem({
                metal: 100,
                wood: 20
            });

            assert(item.type, 'sword')
        });
    })
});