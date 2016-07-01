function Robot(type) {
  this.type = type;
  this.currentHealth = null;
}
Robot.prototype.getInitalHealth = function() {
  let health = Math.floor(Math.random() * (this.maxHealth - this.minHealth + 1)) + this.minHealth;
  return health;
}
// Robot.prototype.attack = function(max, min) {
//   let damageInflicted = Math.floor(Math.random() * (max - min + 1)) + min;
//   return damageInflicted;
// }
Robot.prototype.attack = function(defender) {
  let attackStrength = Math.floor(Math.random() * (this.maxAttack - this.minAttack + 1)) + this.minAttack;
  defender.currentHealth = defender.currentHealth - attackStrength;
}


function Drone(model, maxHealth, minHealth, maxAttack, minAttack) {
  this.model = model;
  this.maxHealth = maxHealth;
  this.minHealth = minHealth;
  this.maxAttack = maxAttack;
  this.minAttack = minAttack;
}
Drone.prototype = new Robot("Drone");

function Bipedal(model, maxHealth, minHealth, maxAttack, minAttack) {
  this.model = model;
  this.maxHealth = maxHealth;
  this.minHealth = minHealth;
  this.maxAttack = maxAttack;
  this.minAttack = minAttack;
}
Bipedal.prototype = new Robot("Bipedal");

function Micron(model, maxHealth, minHealth, maxAttack, minAttack) {
  this.model = model;
  this.maxHealth = maxHealth;
  this.minHealth = minHealth;
  this.maxAttack = maxAttack;
  this.minAttack = minAttack;
}
Micron.prototype = new Robot("Micron");


let robotModels = [];

var viperDrone = new Drone("Viper", 80, 40, 15, 5);
robotModels.push(viperDrone);

var crazyDrone = new Drone("Crazy", 83, 37, 16, 4);
robotModels.push(crazyDrone);

var cavemanBipedal = new Bipedal("Caveman", 86, 44, 13, 8);
robotModels.push(cavemanBipedal);

var rangoBipedal = new Bipedal("Rango", 88, 41, 14, 3);
robotModels.push(rangoBipedal);

var masterMicron = new Micron("Master", 81, 55, 17, 2);
robotModels.push(masterMicron);

var willisMicron = new Micron("Willis", 76, 33, 23, 7);
robotModels.push(willisMicron);

// function populateSelectMenus() {

//   // Get reference to both select menus
//   var robotOneSelect = $('#robotOneSelect');
//   var robotTwoSelect = $('#robotTwoSelect');

//   // Populate select menus
//   for (let i = 0; i < 6; i++) {

//     // Create option items
//     let robotOneOption = $('<option></option>').attr("value", robotModels[i].model).text(`${robotModels[i].model} ${robotModels[i].type}`);
//     let robotTwoOption = $('<option></option>').attr("value", robotModels[i].model).text(`${robotModels[i].model} ${robotModels[i].type}`);
    
//     // Add option items to both select menus
//     robotOneSelect.append(robotOneOption);
//     robotTwoSelect.append(robotTwoOption);
//   }

// }

// populateSelectMenus();

function attackPressed() {

  // Get reference to both select menus
  let robotOneSelect = $('#robotOneSelect');
  let robotTwoSelect = $('#robotTwoSelect');

  // Robot objects
  let robotOne;
  let robotTwo;

  // Get selected robots

  // Robot one
  if (robotOneSelect.val() === "viper") {
    robotOne = new Drone("Viper", 80, 40, 15, 5);
  } else if (robotOneSelect.val() === "crazy") {
    robotOne = new Drone("Crazy", 83, 37, 16, 4);
  } else if (robotOneSelect.val() === "caveman") {
    robotOne = new Bipedal("Caveman", 86, 44, 13, 8);
  } else if (robotOneSelect.val() === "rango") {
    robotOne = new Bipedal("Rango", 88, 41, 14, 3);
  } else if (robotOneSelect.val() === "master") {
    robotOne = new Micron("Master", 81, 55, 17, 2);
  } else {
    robotOne = new Micron("Willis", 76, 33, 23, 7);
  }

  // Robot two
  if (robotTwoSelect.val() === "viper") {
    robotTwo = new Drone("Viper", 80, 40, 15, 5);
  } else if (robotTwoSelect.val() === "crazy") {
    robotTwo = new Drone("Crazy", 83, 37, 16, 4);
  } else if (robotTwoSelect.val() === "caveman") {
    robotTwo = new Bipedal("Caveman", 86, 44, 13, 8);
  } else if (robotTwoSelect.val() === "rango") {
    robotTwo = new Bipedal("Rango", 88, 41, 14, 3);
  } else if (robotTwoSelect.val() === "master") {
    robotTwo = new Micron("Master", 81, 55, 17, 2);
  } else {
    robotTwo = new Micron("Willis", 76, 33, 23, 7);
  }

  // Set robots inital health
  robotOne.currentHealth = robotOne.getInitalHealth();
  robotTwo.currentHealth = robotTwo.getInitalHealth();

  // Set vars to store winner and loser
  let winner = null;;
  let loser = null;

  // While both robots still have health, continue fighting
  while (robotOne.currentHealth > 0 && robotTwo.currentHealth > 0) {

    // Each robot gets a turn to attack
    robotOne.attack(robotTwo);

    // No need to have counter attack if already defeated
    if (robotTwo.currentHealth > 0) {
      robotTwo.attack(robotOne);
    }

  }

  if (robotOne.currentHealth <= 0) {
    loser = robotOne;
    winner = robotTwo;
    $('#resultOutput').text(`${winner.model} defeated ${loser.model}!`);
  } else {
    loser = robotTwo;
    winner = robotOne;
    $('#resultOutput').text(`${winner.model} defeated ${loser.model}!`);
  }


}


$('#attackButton').click(attackPressed);
