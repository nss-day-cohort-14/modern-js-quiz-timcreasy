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

function instantiatePlayer(name, selectedRobot) {

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

function createPlayers() {

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

function attackPressed() {

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
