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

const diceScoring = function (playerDice, enemyDice) {
  playerDice = playerDiceRoll();
  enemyDice = enemyDiceRoll();
  //   alert(`Player dice: ${playerDice} \nEnemy dice: ${enemyDice}`);
  if (playerDice > enemyDice) return (player.points += playerDice);
  if (enemyDice > playerDice) return (enemy.points += enemyDice);
  if (playerDice === enemyDice) return console.log("draw");
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
