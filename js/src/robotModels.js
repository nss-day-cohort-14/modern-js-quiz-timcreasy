"use strict";

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
