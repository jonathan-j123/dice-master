const enemy = {
  points: 0,
  dice: [1, 2, 3, 4, 5, 5, 6, 6],
};
const player = {
  points: 0,
  dice: [1, 2, 3, 4, 5, 6],
};

const enemyDiceRoll = function () {
  return enemy.dice[Math.floor(Math.random() * enemy.dice.length)];
};
const playerDiceRoll = function () {
  return player.dice[Math.floor(Math.random() * player.dice.length)];
};

const playerDiceImage = function (playerDice) {
  playerDice = playerDiceRoll();
  switch (playerDice) {
    case 1:
      return "url('images/dice/dice-1.png')";
    case 2:
      return "url('images/dice/dice-1.png')";
    case 3:
      return "url('images/dice/dice-1.png')";
    case 4:
      return "url('images/dice/dice-1.png')";
    case 5:
      return "url('images/dice/dice-1.png')";
    case 6:
      return "url('images/dice/dice-1.png')";
  }
};
const enemyDiceImage = function (enemyDice) {
  enemyDice = playerDiceRoll();
  switch (enemyDice) {
    case 1:
      return "url('images/dice/dice-1.png')";
    case 2:
      return "url('images/dice/dice-1.png')";
    case 3:
      return "url('images/dice/dice-1.png')";
    case 4:
      return "url('images/dice/dice-1.png')";
    case 5:
      return "url('images/dice/dice-1.png')";
    case 6:
      return "url('images/dice/dice-1.png')";
  }
};

const diceScoring = function (playerDice, enemyDice) {
  document.querySelector(".player .dice").style.src = playerDiceImage();
  document.querySelector(".enemy .dice").style.src = enemyDiceImage();
  playerDice = playerDiceRoll();
  enemyDice = enemyDiceRoll();
  //   alert(`Player dice: ${playerDice} \nEnemy dice: ${enemyDice}`);
  if (playerDice > enemyDice) return (player.points += playerDice);
  if (enemyDice > playerDice) return (enemy.points += enemyDice);
  if (playerDice === enemyDice) return player.points;
};

function matchExecution() {
  for (let i = 0; i < 100; i++) {
    diceScoring();
  }
  document.querySelector(
    "#enemyScore"
  ).innerHTML = `<strong>Score: ${enemy.points} </strong>`;
  document.querySelector(
    "#playerScore"
  ).innerHTML = `<strong>Score: ${player.points} </strong>`;
}
