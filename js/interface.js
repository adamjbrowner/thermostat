$(document).ready(function() {
  var thermostat = new Thermostat
  updateTemperature = function() {
    $('#temperature').text(thermostat.temperature);
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
});
