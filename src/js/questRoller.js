export function rollDice20() {
    return (Math.floor(Math.random() * 20) + 1);

}



// performAction() {
//     const attributeValue = this.attributes[0]; // STR
//     const randomNumber = Math.floor(Math.random() * 20) + 1;
//     const result = randomNumber + attributeValue;
//     console.log(`Rolled: ${randomNumber}, Total with STR: ${result}`);
//     return result > 14;
// }

// performIntAction() {
//     const attributeValue = this.attributes[1]; // INT
//     const randomNumber = Math.floor(Math.random() * 20) + 1;
//     const result = randomNumber + attributeValue;
//     console.log(`Rolled: ${randomNumber}, Total with INT: ${result}`);
//     return result > 14;