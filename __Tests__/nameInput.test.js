import Player from './../src/nameInput.js';

describe('nameInput', () => {
    const name = new Player("Greg", "Warrior");
    test("input should exist", () => {
        expect(name.nameInput).toBeDefined();
    });
    test("input should initially have no value", () => {
        expect(name.nameInput).toBe("");
    });
    test('should check if nameInput is Greg & playerClass is Warrior', () => {

        expect(name.nameInput).toBe("Greg");
        expect(name.playerClass).toBe("Warrior");
    });
})




// import Triangle from './../src/triangle.js';

// describe('Triangle', () => {

//     test('should correctly create a triangle object with three lengths', () => {
//         const triangle = new Triangle(2, 4, 5);
//         expect(triangle.side1).toEqual(2);
//         expect(triangle.side2).toEqual(4);
//         expect(triangle.side3).toEqual(5);
//     });
// });