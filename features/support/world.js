'use strict';

var {defineSupportCode} = require('cucumber');

var chai = require('chai');
var rp = require('request-promise');

var expect = chai.expect;
var self = this;



var World = defineSupportCode(function({When}) {
  When("I search for all the countries", {timeout: 60*1000}, function(done) {
      rp({
          uri: "https://restcountries.eu/rest/v2/all",
          json: true
      }).then(function(response) {
          self.response = response;
          done();
      }).catch(function(err) {
          throw err;
      })
  });

});
  module.exports.World = World;