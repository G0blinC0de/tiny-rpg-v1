export class Player {
    constructor(nameInput, playerClass) {
        this.nameInput = nameInput;
        this.playerClass = playerClass;
        this.attributes = [0, 0, 0];
        strAtt = this.attributes[0];
        intAtt = this.attributes[1];
        dexAtt = this.attributes[2];
    }
    // attributes = [STR, INT, DEX]
    classSelector() {
        if (this.playerClass === "Warrior") {
            this.attributes = [3, 0, 0];
        } else if (this.playerClass === "Wizard") {
            this.attributes = [0, 3, 0];
        } else if (this.playerClass === "Rogue") {
            this.attributes = [0, 0, 3];
        }
    }
}


// export default class Triangle {
//     constructor(side1, side2, side3) {
//         this.side1 = side1;
//         this.side2 = side2;
//         this.side3 = side3;
//     }

//     checkType() {
//         if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
//             return "not a triangle";
//         } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
//             return "scalene triangle";
//         } else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
//             return "equilateral triangle";
//         } else {
//             return "isosceles triangle";
//         }
//     }
// }