'use strict';

var {defineSupportCode} = require('cucumber');

var chai = require('chai');
var rp = require('request-promise');
var expect = chai.expect;

var self = this;

var countryName = [];


self.World = require(process.cwd() + '/features/support/world');


defineSupportCode(function({Then,When}){


  When("I search country by name", {timeout: 120*1000}, function(done) {
  	
  	for(var i=0; i < self.World.response.length; i++){
	countryName.push(self.World.response[i].name);
	}

	var ps = [];
	for(var j=0; j<countryName.length; j++){

		var cLoop = {
    		uri: "https://restcountries.eu/rest/v2/name/" + countryName[j] + "?fullText=true",
          	json: true
          }
			ps.push(rp(cLoop));
	}

	Promise.all(ps)
      	.then(function(response) {
          self.response = response;
          //console.log(self.response);
          done();
      	}).catch(function(err) {
          throw err;
      	}) 
  });

  Then("I can see further details about that country", function(done) {
  	expect(self.response).to.be.ok;
  	expect(self.response).to.be.an('array');
  	expect(self.response.length).to.be.at.least(196);
    done();
  });

});