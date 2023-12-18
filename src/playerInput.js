export default class Player {
    constructor(nameInput, playerClass) {
        this.nameInput = nameInput;
        this.playerClass = playerClass;
        this.attributes = [];
    }
    classSelector() {
        if (this.playerClass === "Warrior") {
            this.attributes = [0, 3, 0]
        }
    }
};

// UI Logic

document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault();
    const nameInput = document.getElementById('nameInput').value;
    const playerClass = document.getElementsByName('classType').value;
    let newPlayer = new Player(nameInput, playerClass);
})

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