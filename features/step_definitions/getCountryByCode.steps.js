'use strict';
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Then,When}){


  When("I search country by it's counry code", function(callback) {
    callback(null, 'pending');
  });

  Then("I can see further deatils about that country with that country code", function(callback) {
    callback(null, 'pending');
  });

});