"use strict";

// Gets a range and returns a randomAttack
function getInitialHealth(healthMax, healthMin) {
  let initialHealth = Math.floor(Math.random() * (healthMax - healthMin + 1)) + healthMin;
  return initialHealth;
}

module.exports = getInitialHealth;
