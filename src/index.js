import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './playerInput.js';
import { Player } from './playerInput.js';


// UI Logic

document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault();
    const nameInput = document.getElementById('nameInput').value;
    const playerClass = document.getElementById('classSelect').value;
    const displayText = document.getElementById('displayText');
    let newPlayer = new Player(nameInput, playerClass);

    console.log(newPlayer);

    displayText.append(newPlayer);

});
