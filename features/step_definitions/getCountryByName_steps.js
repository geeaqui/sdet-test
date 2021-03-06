'use strict';

var {defineSupportCode} = require('cucumber');

var chai = require('chai');
var rp = require('request-promise');
var expect = chai.expect;

var self = this;

var countryName = [];

var unError = [];


self.World = require(process.cwd() + '/features/support/world');


defineSupportCode(function({Then,When}) {

  When("I search country by name", {timeout: 60*1000}, function(done) {
  	
    for (var i=0; i < self.World.response.length; i++){
  	   countryName.push(self.World.response[i].name);
  	}

	  var ps = [];
		for ( var j = 0; j < countryName.length; j++){
  		var cLoop = {
    		uri: "https://restcountries.eu/rest/v2/name/"+ countryName[j] +"?fullText=true",
        json: true
      }
      ps.push(rp(cLoop)
    		.catch(function(err){
    			unError.push(err);
        }));
		}

	 Promise.all(ps)
  	.then(function(response) {
      self.response = response;
      console.log("There are a total of " + unError.length + "errors.");
      done();
  	}).catch(function(err) {
      throw err;
  	}) 
  });

    When("I search country with an invalid name", {timeout: 60*1000}, function(done) {
      rp({
          uri: "https://restcountries.eu/rest/v2/name/"+ "12345test" +"?fullText=true",
          simple: true,
          json: true
      })
        .then(function(response2) {
          self.response2 = response2;
          done();
        }).catch(function(err) {
            console.log("Error: Invalid Request");
        done();
      })
  });

  Then("I can see further details about that country", function(done) {
  	expect(self.World.response).to.be.ok;
    expect(self.response).to.exist;
  	expect(self.response).to.be.an('array');
    done();
  });

    Then("I should get an error", function(done) {
    expect(self.response2).to.not.be.ok;
    done();
  });

});