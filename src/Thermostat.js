'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10
  this.MAXIMUM_TEMPERATURE = 25
  this.powerSave = true
  this.updateEnergy()
}

Thermostat.prototype.increaseTemperature = function(number = 1) {
  if (this.temperature + number >= this.MAXIMUM_TEMPERATURE) {
    this.temperature = this.MAXIMUM_TEMPERATURE;
  }
  else {
    this.temperature += number;
  }
  this.updateEnergy()
};

Thermostat.prototype.decreaseTemperature = function(number = 1) {
  if (this.temperature - number <= this.MINIMUM_TEMPERATURE) {
    this.temperature = this.MINIMUM_TEMPERATURE;
  }
  else
  {
  this.temperature -= number;
  }
  this.updateEnergy()
};

Thermostat.prototype.powerSaveOn = function () {
  this.powerSave = true
  this.MAXIMUM_TEMPERATURE = 25
};

Thermostat.prototype.powerSaveOff = function () {
  this.powerSave = false
  this.MAXIMUM_TEMPERATURE = 32
};

Thermostat.prototype.reset = function () {
  this.temperature = 20
};

Thermostat.prototype.updateEnergy = function () {
  if (this.temperature < 25 && this.temperature > 18) {
    this.colour = 'Yellow';
  }
  else if (this.temperature < 18 ) {
    this.colour = 'Green';
  }
  else
  {
    this.colour = 'Red';
  }
};
