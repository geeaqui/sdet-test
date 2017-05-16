'use strict';

var {defineSupportCode} = require('cucumber');

var chai = require('chai');
var rp = require('request-promise');
var expect = chai.expect;

var self = this;
var euCountry = [];
var euroCurrency = [];

self.World = require(process.cwd() + '/features/support/world');

defineSupportCode(function({Then,When}){
  When("I search for the list of countries in the Europe", function(done) {
  	for(var i=0; i < self.World.response.length; i++){
  		if(self.World.response[i].region === 'Europe'){
  			euCountry.push(self.World.response[i]);
  			console.log(self.World.response[i].currencies);
  		}
  	}
  	console.log("There are " + euCountry.length + " countries in europe");
  	done();
  });

  Then("I can see how many countries are using euro", function(done) {
  	for(var i = 0; i < euCountry.length; i++){
  		if(euCountry[i].currencies[0].code === 'EUR'){
  			euroCurrency.push(euCountry[i]);
  		}
  	}
  	//console.log(euroCurrency);
  	console.log("There are " + euroCurrency.length + " using the euro currency");
  	done();
  });
});