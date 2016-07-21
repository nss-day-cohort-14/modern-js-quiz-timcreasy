"use strict";

var test = require('tape');
var getRandomAttack = require('./getRandomAttack');
var robotModels = require('./robotModels');
var Robot = require('./Robot');
var getRandomAttack = require('./getRandomAttack');
var getInitialHealth = require('./getInitialHealth');

for (let robot in robotModels) {
  let currentRobot = new robotModels[robot]();
  test(`${currentRobot.model}`, function(t) {
    t.equal(typeof currentRobot.model, "string", `${currentRobot.model} should be a string`);
    t.equal(typeof currentRobot.maxHealth, "number", `currentRobot.maxHealth should be a number`);
    t.equal(typeof currentRobot.minHealth, "number", `currentRobot.minHealth should be a number`);
    t.equal(typeof currentRobot.maxAttack, "number", `currentRobot.maxAttack should be a number`);
    t.equal(typeof currentRobot.minAttack, "number", `currentRobot.minAttack should be a number`);
    t.equal(currentRobot.constructor, Robot, `currentRobot should have Robot as constructor`);
    t.end();
  });
}

test('getRandomAttack', function(t) {
  t.equal(typeof getRandomAttack(12, 4), "number", 'getRandomAttack(var, var) should return a number');
  t.end();
});

test('getInitialHealth', function(t) {
  t.equal(typeof getRandomAttack(80, 4), "number", 'getInitialHealth(var, var) should return a number');
  t.end();
});
