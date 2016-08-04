'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10
  this.MAXIMUM_TEMPERATURE = 25
  this.powerSave = true
}

Thermostat.prototype.increaseTemperature = function (number = 1) {
  this.temperature += number
};

Thermostat.prototype.decreaseTemperature = function (number = 1) {
  if (this.temperature <= this.MINIMUM_TEMPERATURE) {
    this.temperature;
  }
  else
  {
  this.temperature -= number;
  }
};

Thermostat.prototype.powerSaveOn = function () {
  this.powerSave = true
  this.MAXIMUM_TEMPERATURE = 25
}

Thermostat.prototype.powerSaveOff = function () {
  this.powerSave = false
  this.MAXIMUM_TEMPERATURE = 32
}

Thermostat.prototype.reset = function () {
  this.temperature = 20
}
