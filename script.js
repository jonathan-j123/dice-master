const enemy = {
  healthPoints: 100,
  dice: [1, 2, 3, 4, 5, 5, 6, 6],
};
const player = {
  healthPoints: 100,
  dice: [1, 2, 3, 4, 5, 6],
};
document.querySelector(
  "#enemyScore"
).innerHTML = `<strong>Score: ${enemy.healthPoints} </strong>`;
document.querySelector(
  "#playerScore"
).innerHTML = `<strong>Score: ${player.healthPoints} </strong>`;

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
      return "images/dice/dice-6.png";
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
  if (playerDice > enemyDice) return (enemy.healthPoints -= playerDice);
  if (enemyDice > playerDice) return (player.healthPoints -= enemyDice);
  if (playerDice === enemyDice) return player.healthPoints;
};

const healthStatus = function (result) {
  if (result < 1) {
    if (player.healthPoints > enemy.healthPoints) {
      document.querySelector(".rollButton").style.visibility = "hidden";
      document.querySelector("#arena").innerHTML =
        "<h1 class='playerText' style='padding: 50px 0;'>🎉PLAYER WON!🎉</h1>";
      alert("The Player has wOn!");
    } else {
      document.querySelector(".rollButton").style.visibility = "hidden";
      document.querySelector("#arena").innerHTML =
        "<h1 class='enemyText' style='padding: 50px 0;'>😱ENEMY WON😱 </h1>";
      alert("The Dice Sorcerer has won 😢 ");
    }
  }
};

function matchExecution(result) {
  result = diceScoring();
  document.querySelector(
    "#enemyScore"
  ).innerHTML = `<strong>Score: ${enemy.healthPoints} </strong>`;
  document.querySelector(
    "#playerScore"
  ).innerHTML = `<strong>Score: ${player.healthPoints} </strong>`;
  if (player.healthPoints <= 0 || enemy.healthPoints <= 0)
    return healthStatus(0);
  healthStatus(result);
}
