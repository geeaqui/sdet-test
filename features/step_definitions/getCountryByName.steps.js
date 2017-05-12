'use strict';
var {defineSupportCode} = require('cucumber');
var chai = require('chai');
var rp = require('require-promise');

var expect = chai.expect;

defineSupportCode(function({Then,When}){


  When("I search country by name", function(callback) {
    callback(null, 'pending');
  });

  Then("I can see further details about that country", function(callback) {
    callback(null, 'pending');
  });

});