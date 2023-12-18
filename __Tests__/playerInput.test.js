import Player from '../src/playerInput.js';
// import attributes from '../src/playerInput.js';


describe('Player', () => {
    test("Player should instantiate Player Object", () => {
        const player1 = new Player("Greg", "Warrior");
        expect(player1.nameInput).toBe("Greg");
        expect(player1.playerClass).toBe("Warrior");
    })
})


describe('classSelector', () => {
    test("Should set player attribute according to class", () => {
        const player1 = new Player("Greg", "Warrior");
        player1.classSelector();
        // expect(playerClass.wizard).toEqual(3, 0, 0);
        expect(player1.attributes).toEqual([0, 3, 0]);
        // expect(playerClass.rogue).toEqual(0, 0, 3);
    })
})


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