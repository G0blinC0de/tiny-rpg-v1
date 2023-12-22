import { questBuilder } from "../src/js/questBuilder";
import { Player } from "../src/js/playerInput";
import { rollDice20 } from '../src/js/questRoller.js';

describe('questBuilder', () => {
    beforeEach
    test("It should add the strength attribute value to the diceRoll20 result", () => {
        const player1 = new Player("Steve", "Warrior", [3, 0, 0]);
        
        console.log(player1.attributes[0]);
        const classStats = player1.attributes[0] + rollDice20();
        expect(classStats).toBeGreaterThanOrEqual(1);
        expect(classStats).toBeLessThanOrEqual(23);
        console.log(classStats);
    })

    // test('questInt')
})
