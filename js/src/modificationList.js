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