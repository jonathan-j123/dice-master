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
  switch (playerDice) {
    case 1:
      return "images/dice/dice-1.png";
    case 2:
      return "images/dice/dice-2.png";
    case 3:
      return "images/dice/dice-3.png";
    case 4:
      return "images/dice/dice-4.png";
    case 5:
      return "images/dice/dice-5.png";
    case 6:
      return "images/dice/dice-5.png";
  }
};
const enemyDiceImage = function (enemyDice) {
  switch (enemyDice) {
    case 1:
      return "images/dice/dice-1.png";
    case 2:
      return "images/dice/dice-2.png";
    case 3:
      return "images/dice/dice-3.png";
    case 4:
      return "images/dice/dice-4.png";
    case 5:
      return "images/dice/dice-5.png";
    case 6:
      return "images/dice/dice-6.png";
  }
};

const diceScoring = function (playerDice, enemyDice) {
  playerDice = playerDiceRoll();
  enemyDice = enemyDiceRoll();

  document
    .querySelector(".player .dice")
    .setAttribute("src", playerDiceImage(playerDice));
  document
    .querySelector(".enemy .dice")
    .setAttribute("src", enemyDiceImage(enemyDice));

  //   alert(`Player dice: ${playerDice} \nEnemy dice: ${enemyDice}`);
  if (playerDice > enemyDice) return (player.points += playerDice);
  if (enemyDice > playerDice) return (enemy.points += enemyDice);
  if (playerDice === enemyDice) return player.points;
};

function matchExecution() {
  diceScoring();
  document.querySelector(
    "#enemyScore"
  ).innerHTML = `<strong>Score: ${enemy.points} </strong>`;
  document.querySelector(
    "#playerScore"
  ).innerHTML = `<strong>Score: ${player.points} </strong>`;
}
