var argButtonName, buttonPaper, buttonRock, buttonScissors, kamien, nozyce, papier, x;

/**
 * Describe this function...
 */
function buttonClicked(argButtonName, kamien, papier, nozyce) {
  console.log(kamien + papier + nozyce + ' został kliknięty');
  printMessage(kamien + papier + nozyce + ' został kliknięty');
}
buttonScissors = document.getElementById('button-scissors');
buttonPaper = document.getElementById('button-paper');
buttonRock = document.getElementById('button-rock');

buttonRock.addEventListener('click', function(){ buttonClicked('', 'Guzik kamień', '', ''); });
buttonPaper.addEventListener('click', function(){ buttonClicked('', '', 'Guzik papier', ''); });
buttonScissors.addEventListener('click', function(){ buttonClicked('', '', '', 'Guzik nożyce'); });