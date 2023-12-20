import { Player } from '../src/js/playerInput.js';
// import attributes from '../src/playerInput.js';


describe('Player', () => {
    test("Player should instantiate Player Object", () => {
        const player1 = new Player("Greg", "Warrior");
        expect(player1.nameInput).toBe("Greg");
        expect(player1.playerClass).toBe("Warrior");
    })
});


describe('classSelector', () => {
    test("It should set player attributes according to Warrior", () => {
        const player1 = new Player("Greg", "Warrior");
        player1.classSelector();
        expect(player1.attributes).toEqual([3, 0, 0]);
    })
    test("It should set player attributes according to Wizard", () => {
        const player2 = new Player("Steve", "Wizard");
        player2.classSelector();
        expect(player2.attributes).toEqual([0, 3, 0]);
    })
    test("It should set player attributes according to Rogue", () => {
        const player3 = new Player("Anna", "Rogue");
        player3.classSelector();
        expect(player3.attributes).toEqual([0, 0, 3]);
    })
});




// ------------- References & Examples ----------------

// import Player from './../src/nameInput.js';

// describe(Player, () => {
//     test("Player should be created with given name and class", () => {
//         const player = new Player("Greg", "Warrior");
//         expect(player).toBeDefined();
//     });
// });

// describe('Player properties', () => {
//     const player1 = new Player("Greg", "Warrior");

//     test("nameInput should be defined", () => {
//         expect(player1.nameInput).toBeDefined();
//     });

//     test("nameInput should match the given name", () => {
//         expect(player1.nameInput).toBe("Greg");
//     });

//     test('playerClass should match the given class', () => {
//         expect(player1.playerClass).toBe("Warrior");
//     });
// });




// import Triangle from './../src/triangle.js';

// describe('Triangle', () => {

//     test('should correctly create a triangle object with three lengths', () => {
//         const triangle = new Triangle(2, 4, 5);
//         expect(triangle.side1).toEqual(2);
//         expect(triangle.side2).toEqual(4);
//         expect(triangle.side3).toEqual(5);
//     });
// });
