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