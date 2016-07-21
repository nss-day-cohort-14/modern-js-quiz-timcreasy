"use strict";

// Module to construct and export each Robot
function Robot(type) {
  this.type = type;
  this.currentHealth = null;
}

// Export Robot
module.exports = Robot;
