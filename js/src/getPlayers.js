// Require necessary modules
var robotModels = require('./robotModels');
var weaponList = require('./weaponList');
var modificationList = require('./modificationList');

var playerOneOptions = {};
var playerTwoOptions = {};

var currentPlayer = 1;

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
  addButtons(modificationList, nextPlayer);

}

function nextPlayer() {

  // Ensure not second player
  if (currentPlayer != 2) {
    // Add previosly selected modifications to player one options
    playerOneOptions.modification = event.target.innerText;
  }

  // Change to player two
  currentPlayer = 2;

  // Change text of heading
  $('#playerCreateHeading').text("Create Player 1");

}


// Export getPlayers
module.exports = getPlayers;