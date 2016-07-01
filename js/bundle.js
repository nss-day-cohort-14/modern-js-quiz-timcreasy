(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//var robots = require('./robots');

function Robot() {
  this.name = "null";
}

function Drone(name) {
  
}
Drone.prototype = new Robot();

function Bipedal() {

}
Bipedal.prototype = new Robot();

function Micron() {

}
Micron.prototype = new Robot();

// Drone functions
Drone.prototype.kick = function() {

}
Drone.prototype.punch = function() {

}

// Bipedal functions
Bipedal.prototype.powerWalk = function() {

}

Bipedal.prototype.powerSkip = function() {

}

// Micron functions
Micron.prototype.inchAttack = function() {

}

Micron.prototype.bacterialBang = function() {

}
},{}]},{},[1]);
