$(document).ready(function() {
  var thermostat = new Thermostat
  updateTemperature = function() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.colour);
  }
  updateTemperature();
  $('#temperature-up').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature();
  });
  $('#temperature-down').on('click', function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  });
  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  });
  $('#powersaving-on').on('click', function() {
    thermostat.powerSaveOn();
    updateTemperature();
  });
  $('#powersaving-off').on('click', function() {
    thermostat.powerSaveOff();
  });
});
