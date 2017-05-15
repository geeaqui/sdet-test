'use strict';

var {defineSupportCode} = require('cucumber');

var chai = require('chai');
var rp = require('request-promise');
var expect = chai.expect;

var self = this;

var countryCode = [];


self.World = require(process.cwd() + '/features/support/world');


defineSupportCode(function({Then,When}){


  When("I search country by it's counry code", {timeout: 60*1000}, function(done) {
  	
  	for(var i=0; i < self.World.response.length; i++){
	countryCode.push(self.World.response[i].alpha3Code);
	}

	var ps = [];
	for(var j=0; j<countryCode.length; j++){
		var cLoop = {
    		uri: "https://restcountries.eu/rest/v2/alpha/" +countryCode[j],
          	json: true
          }
			ps.push(rp(cLoop));
	}
	Promise.all(ps)
      	.then(function(response) {
          self.response = response;
          done();
      	}).catch(function(err) {
          throw err;
      	}) 
  });

  Then("I can see further deatils about that country with that country code", function(done) {
  	expect(self.response).to.be.ok;
  	expect(self.response).to.exist;
  	expect(self.response).to.be.an('array');
    done();
  });

});