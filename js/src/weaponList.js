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