(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Defines module for Modification constructor
function Modification(modificationName, damageIncrease, protectionIncrease) {

  this.modificationName = modificationName;
  this.damageIncrease = damageIncrease;
  this.protectionIncrease = protectionIncrease;

};

// Export Modification module
module.exports = Modification;
},{}],2:[function(require,module,exports){
// Module to construct and export each Robot
function Robot(type) {
  this.type = type;
  this.currentHealth = null;
}
// Robot.prototype.getInitalHealth = function() {
//   let health = Math.floor(Math.random() * (this.maxHealth - this.minHealth + 1)) + this.minHealth;
//   return health;
// }

// Export Robot
module.exports = Robot;
},{}],3:[function(require,module,exports){
// Defines module for Weapon constructor

function Weapon(weaponName, weaponDamage) {

  this.weaponName = weaponName;
  this.weaponDamage = weaponDamage;

};

// Export Weapon module
module.exports = Weapon;
},{}],4:[function(require,module,exports){
// Require necessary modules
var robotModels = require('./robotModels');
var weaponList = require('./weaponList');
var modificationList = require('./modificationList');

var playerOneOptions = {};
var playerTwoOptions = {};

// Walks user through creation of two robots, with weapons and modifications, to prepare for battle
function getPlayers() {

  // Change heading to Create Player 1
  $('#playerCreateHeading').text("Create Player 1");

  // Show butttons for robot selection
  showRobotSelectionButtons();

}


function addButtons(data, eventListener) {

  // Get reference to page
  let playerCreateButtonsOutput = $('#playerCreateButtonsOutput');

  // Clear page before adding buttons
  playerCreateButtonsOutput.empty();

  // Create correct number of buttons using size of data
  for (item in data) {

    // Formats item name by splitting at uppercase characters and seperating with a space
    let formattedItemName = item.match(/[A-Z][a-z]+/g).join(" ");
    
    // Create button using formattedRobotName as the text
    var buttonToAdd = $('<button></button>').text(formattedItemName);

    // Add button to page
    playerCreateButtonsOutput.append(buttonToAdd);

    // Add click event listener to button
    buttonToAdd.click(eventListener);

  }

}


// Adds buttons to page for user to select a robot model to battle
function showRobotSelectionButtons() {

  // Set appropriate heading prompt
  $('#playerCreatePrompt').text("Select a robot model");

  // Add robot butttons
  addButtons(robotModels, showWeaponSelectionButtons);

}

// Adds buttons to page for user to select a weapon for robot
function showWeaponSelectionButtons(event) {

  // Add previosly selected robot to player options
  playerOneOptions.model = event.target.innerText;

  // Set appropriate heading prompt
  $('#playerCreatePrompt').text("Select a weapon");
  
  // Add weapon buttons
  addButtons(weaponList, showModificationSelectionButtons);

}

// Adds buttons to page for user to select a modification for robot
function showModificationSelectionButtons(event) {

  // Add previosly selected robot to player options
  playerOneOptions.weapon = event.target.innerText;

  // Set appropriate heading prompt
  $('#playerCreatePrompt').text("Select a modification");

  // Add modification buttons
  addButtons(modificationList, null);

}



// Export getPlayers
module.exports = getPlayers;
},{"./modificationList":5,"./robotModels":7,"./weaponList":9}],5:[function(require,module,exports){
// Defines all modifications availble to user, and exports list of availble modifications

// Require Modification constructor
var Modification = require('./Modification');

// Create weapons object, to hold all newly created weapons
var modifications = {
  "PowerPack": new Modification("Power Pack", 3, 5),
  "ManOnFire": new Modification("Man on Fire", 7, 1),
  "BringTheHeat": new Modification("Bring the Heat", 4, 8),
  "TheProtector": new Modification("The Protector", 3, 14),
  "ManOfHisWord": new Modification("Man of His Word", 10, 3),
  "Glory": new Modification("Glory", 8, 8)
}

// Export all modifications
module.exports = modifications;
},{"./Modification":1}],6:[function(require,module,exports){
// Require necessary modules
var getPlayers = require('./getPlayers');



// Get players
getPlayers();
// Battle
// Print results



},{"./getPlayers":4}],7:[function(require,module,exports){
// Module for creating and exporting list of robot model constructors

// Require robotTypes
var robotTypes = require('./robotTypes');

// Collection of robot model constructors
var robotModels = {

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
},{"./robotTypes":8}],8:[function(require,module,exports){
// Module for exporting list of robot type constructors

// Require Robot constructor
var Robot = require('./Robot');

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
},{"./Robot":2}],9:[function(require,module,exports){
// Defines all weapons availble to user, and exports list of availble weapons

// Require Weapon constructor
var Weapon = require('./Weapon');

// Create weapons object, to hold all newly created weapons
var weapons = {
  "WarHammer": new Weapon("War Hammer", 8),
  "FireCannon": new Weapon("Fire Cannon", 10),
  "SquirtGun": new Weapon("Squirt Gun", 4),
  "AngelDust": new Weapon("Angel Dust", 7),
  "GoldSword": new Weapon("Gold Sword", 12),
  "Rope": new Weapon("Rope", 6)
}

// Export all weapons
module.exports = weapons;
},{"./Weapon":3}]},{},[6]);
