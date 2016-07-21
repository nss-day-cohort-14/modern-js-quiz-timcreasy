(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// Module to construct and export each Robot
function Robot(type) {
  this.type = type;
  this.currentHealth = null;
}

// Export Robot
module.exports = Robot;

},{}],2:[function(require,module,exports){
"use strict";

// Gets a range and returns a randomAttack
let getInitialHealth = (healthMax, healthMin) => {
  let initialHealth = Math.floor(Math.random() * (healthMax - healthMin + 1)) + healthMin;
  return initialHealth;
}

module.exports = getInitialHealth;

},{}],3:[function(require,module,exports){
"use strict";

// Gets a range and returns a randomAttack
let getRandomAttack = (attackMax, attackMin) => {
  let randomAttack = Math.floor(Math.random() * (attackMax - attackMin + 1)) + attackMin;
  return randomAttack;
}

module.exports = getRandomAttack;

},{}],4:[function(require,module,exports){
"use strict";

const robotModels = require('./robotModels');
const getRandomAttack = require('./getRandomAttack');
const getInitialHealth = require('./getInitialHealth');
const writeToAttackLog = require('./writeToAttackLog');

// Keeps track of currentAttacker
let currentAttacker = 1;

// players
let playerOne = null;
let playerTwo = null;

// Initally hide attack button
$('#attackButton').hide();

let instantiatePlayer = (name, selectedRobot) => {

  let robot = null;

  // iniate proper robotModel
  if (selectedRobot === "viper") {
    robot = robotModels.ViperDrone();
    robot.name = name;
  } else if (selectedRobot === "crazy") {
    robot = robotModels.CrazyDrone();
    robot.name = name;
  } else if (selectedRobot === "caveman") {
    robot = robotModels.CavemanBipedal();
    robot.name = name;
  } else if (selectedRobot === "rango") {
    robot = robotModels.RangoBipedal();
    robot.name = name;
  } else if (selectedRobot === "master") {
    robot = robotModels.MasterMicron();
    robot.name = name;
  } else if (selectedRobot === "willis") {
    robot = robotModels.WillisMicron();
    robot.name = name;
  }

  // Return instantiated robot
  return robot;

}

let createPlayers = () => {

  // Test if fields are empty
  if ($('#robotOneInput').val() === "" || $('#robotTwoInput').val() === "") {
    window.alert("Please fill out both fields to continue");
  } else {

    // Fields not empty, create players
    playerOne = instantiatePlayer($('#robotOneInput').val(), $('#robotOneSelect').val());
    playerTwo = instantiatePlayer($('#robotTwoInput').val(), $('#robotTwoSelect').val());

    // Initialize health
    playerOne.currentHealth = getInitialHealth(playerOne.maxHealth, playerOne.minHealth);
    playerTwo.currentHealth = getInitialHealth(playerTwo.maxHealth, playerTwo.minHealth);


    // Hide create button
    $('#createButton').hide();

    // Show attack button
    $('#attackButton').show();

  }

}

let attackPressed = () => {

  // Only fight if both healths are positive
  if (playerOne.currentHealth > 0 && playerTwo.currentHealth > 0) {

    // If currentAttacker is playerOne
    if (currentAttacker === 1) {

      // Get attackPoints
      let attackPoints = getRandomAttack(playerOne.maxAttack, playerOne.minAttack);
      // playerOne attack playerTwo
      playerTwo.currentHealth = playerTwo.currentHealth - attackPoints;
      // Set currentAttacker to be playerTwo
      currentAttacker = 2;
      // Attack string
      let attackString = `<p>${playerOne.name}'s ${playerOne.model} ${playerOne.type} attacked ${playerTwo.name}'s ${playerTwo.model} ${playerTwo.type} and dealt ${attackPoints} damage</p>`;
      // Write attack string to DOM
      writeToAttackLog(attackString);

    } else if (currentAttacker === 2) {

      // Get attackPoints
      let attackPoints = getRandomAttack(playerTwo.maxAttack, playerTwo.minAttack);
      // playerTwo attack playerOne
      playerOne.currentHealth = playerOne.currentHealth - attackPoints;
      // Set currentAttacker to be playerOne
      currentAttacker = 1;
      // Attack string
      let attackString = `<p>${playerTwo.name}'s ${playerTwo.model} ${playerTwo.type} attacked ${playerOne.name}'s ${playerOne.model} ${playerOne.type} and dealt ${attackPoints} damage</p>`;
      // Write attack string to DOM
      writeToAttackLog(attackString);

    }

  }

  // If last attack caused a fatal blow
  if (playerOne.currentHealth <= 0) {
    $('#winnerOutput').text(`${playerTwo.name} Wins!`);
  } else if (playerTwo.currentHealth <= 0) {
    $('#winnerOutput').text(`${playerOne.name} Wins!`);
  }

}

// Add event listener to create button
$('#createButton').click(createPlayers);

// Add event listener to attack button
$('#attackButton').click(attackPressed);

},{"./getInitialHealth":2,"./getRandomAttack":3,"./robotModels":5,"./writeToAttackLog":7}],5:[function(require,module,exports){
"use strict";

// Module for creating and exporting list of robot model constructors

// Require robotTypes
let robotTypes = require('./robotTypes');

// Collection of robot model constructors
let robotModels = {

  "ViperDrone": function() {
    return new robotTypes.Drone("Viper", 80, 40, 15, 5);
  },
  "CrazyDrone": function() {
    return new robotTypes.Drone("Crazy", 83, 37, 16, 4);
  },
  "CavemanBipedal": function() {
    return new robotTypes.Bipedal("Caveman", 86, 44, 13, 8);
  },
  "RangoBipedal": function() {
    return new robotTypes.Bipedal("Rango", 88, 41, 14, 3);
  },
  "MasterMicron": function() {
    return new robotTypes.Micron("Master", 81, 55, 17, 2);
  },
  "WillisMicron": function() {
    return new robotTypes.Micron("Willis", 76, 33, 23, 7);
  }

};

// Export robotModels
module.exports = robotModels;

},{"./robotTypes":6}],6:[function(require,module,exports){
"use strict";

// Module for exporting list of robot type constructors

// Require Robot constructor
let Robot = require('./Robot');

// Type Drone
function Drone(model, maxHealth, minHealth, maxAttack, minAttack) {
  this.model = model;
  this.maxHealth = maxHealth;
  this.minHealth = minHealth;
  this.maxAttack = maxAttack;
  this.minAttack = minAttack;
}
Drone.prototype = new Robot("Drone");

// Type Bipedal
function Bipedal(model, maxHealth, minHealth, maxAttack, minAttack) {
  this.model = model;
  this.maxHealth = maxHealth;
  this.minHealth = minHealth;
  this.maxAttack = maxAttack;
  this.minAttack = minAttack;
}
Bipedal.prototype = new Robot("Bipedal");

// Type Micron
function Micron(model, maxHealth, minHealth, maxAttack, minAttack) {
  this.model = model;
  this.maxHealth = maxHealth;
  this.minHealth = minHealth;
  this.maxAttack = maxAttack;
  this.minAttack = minAttack;
}
Micron.prototype = new Robot("Micron");

// Export collection of robot type constructors
module.exports = {
  Drone,
  Bipedal,
  Micron
};

},{"./Robot":1}],7:[function(require,module,exports){
"use strict";

let writeToAttackLog = (attackString) => {

  $('#attackLog').prepend(attackString);
}

module.exports = writeToAttackLog;

},{}]},{},[4]);
