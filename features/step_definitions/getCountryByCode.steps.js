'use strict';
var {defineSupportCode} = require('cucumber');
var chai = require('chai');
var rp = require('require-promise');

var expect = chai.expect;
var self = this;

defineSupportCode(function({Then, When}) {

  When("I search country by it's counry code", function(done) {
    console.log("test2 testing " + self.response);
    done();
  });

  Then("I can see further deatils about that country with that country code", function(done) {
    expect(self.response).to.be.ok;
    done();
  });

});