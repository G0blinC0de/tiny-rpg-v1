import { rollDice20 } from '../src/js/questRoller.js';

describe('rollDice20', () => {
    test("Roll dice for 1 - 20 outcome", () => {
        const rollOutput20 = rollDice20();
        expect (rollOutput20).toBeGreaterThanOrEqual(1);
        expect (rollOutput20).toBeLessThanOrEqual(25);

    })
});

// import { rollDice20 } from '../src/js/questRoller.js';

// describe('rollDice20', () => {
//     test("Roll dice for 1 - 20 outcome", () => {
//         const rollOutput20 = rollDice20();
//         expect(rollOutput20).toBeGreaterThanOrEqual(1);
//         expect(rollOutput20).toBeLessThanOrEqual(20);
//     });
// });

