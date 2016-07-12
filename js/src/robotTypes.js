"use strict";

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
