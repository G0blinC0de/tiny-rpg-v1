import { questBuilder } from "../src/js/questBuilder";
import { Player } from "../src/js/playerInput";
import { rollDice20 } from '../src/js/questRoller.js';

describe('questBuilder', () => {
    const player1 = new Player("Steve", "Wizard", [0, 3, 0]);
    const classStats = player1.attributes + rollDice20;
    expect (classStats).toBeGreaterThanOrEqual(1);
})
