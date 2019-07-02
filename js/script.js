const buttonScissors = document.getElementById('button-scissors');
const buttonPaper = document.getElementById('button-paper');
const buttonRock = document.getElementById('button-rock');
/**
 * Describe this function...
 */
function buttonClicked (argButtonName){
  console.log(argButtonName + ' został kliknięty');
  printMessage(argButtonName + ' został kliknięty');
}

/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}


/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if ( argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}




let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
const playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + argPlayerMove);
const randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + argComputerMove);
displayResult(playerMove, computerMove);

buttonRock.addEventListener('click', function(){ buttonClicked('Guzik kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('Guzik papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('Guzik nożyce'); });