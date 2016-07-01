// Module to construct and export each Player
function Player(name, robot, weapon, modification) {
  this.name = name;
  this.robot = robot;
  this.weapon = weapon;
  this.modification = modification;
};

// Export Player object
module.exports = Player;