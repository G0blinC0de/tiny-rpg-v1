import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './js/playerInput.js';
import { Player } from './js/playerInput.js';


// UI Logic

document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault();
    const nameInput = document.getElementById('nameInput').value;
    const playerClass = document.getElementById('classSelect').value;
    let newPlayer = new Player(nameInput, playerClass);
    const displayText = document.getElementById('displayText');
    const playerInfo = `Name: ${newPlayer.nameInput}, Class: ${newPlayer.playerClass}, STR ${newPlayer.attributes[0]}, INT ${newPlayer.attributes[1]}, DEX ${newPlayer.attributes[2]}`;


    displayText.append(playerInfo);

});
