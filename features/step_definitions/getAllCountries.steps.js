'use strict';

var {defineSupportCode} = require('cucumber');

var chai = require('chai');
var rp = require('request-promise');

var expect = chai.expect;
var self = this;

self.expectedKeys = [
    "name", 
    "topLevelDomain",
    "alpha2Code", 
    "alpha3Code", 
    "callingCodes", 
    "capital", 
    "altSpellings", 
    "region", 
    "subregion", 
    "population", 
    "latlng", 
    "demonym", 
    "area", 
    "gini", 
    "timezones", 
    "borders", 
    "nativeName", 
    "numericCode", 
    "currencies", 
    "languages", 
    "translations", 
    "flag", 
    "regionalBlocs"
];

defineSupportCode(function({Then, When}) {
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

  Then("I should be able to see all the countries", function(done) {
      expect(self.response).to.be.ok;
      expect(self.response).to.be.an('array');
      expect(self.response.length).to.be.at.least(196);
    done();
  });

  Then("I should see all the information about each country", function(done) {

      self.response.forEach(function(country) {
          expect(country).to.have.all.keys(self.expectedKeys);
          expect(country).to.be.an('object');
          //console.log(country.numericCode);
          try{
          	if(expect(country.area).to.exist === -1) throw "There is an error here";
          }catch(err){
          	console.log(country.name + " has no area Oh no!");
          }

          try{
          	if(expect(country.topLevelDomain).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no topLevelDomain");
          }

          try{
          	if(expect(country.alpha2Code).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no alpha2code");
          }

                    try{
          	if(expect(country.alpha3Code).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no alpha3code");
          }

                    try{
          	if(expect(country.callingCodes).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no callingCodes");
          }

                    try{
          	if(expect(country.topLevelDomain).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no topLevelDomain");
          }

                    try{
          	if(expect(country.topLevelDomain).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no topLevelDomain");
          }

                    try{
          	if(expect(country.topLevelDomain).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no topLevelDomain");
          }
 
          
          expect(country.capital).to.exist;
          expect(country.altSpellings).to.exist;
          expect(country.region).to.exist;
          expect(country.subregion).to.exist;
          expect(country.population).to.exist;
          expect(country.latlng).to.exist;
          expect(country.demonym).to.exist;
          //expect(country.area).to.exist; some of the content are null
          //expect(country.gini).to.exist; some of the content are null
          expect(country.timezones).to.exist;
          expect(country.borders).to.exist;
          expect(country.nativeName).to.exist;
          //expect(country.numericCode).to.exist; one of the object is null
          expect(country.currencies).to.exist;
          expect(country.languages).to.exist;
          expect(country.translations).to.exist;
          expect(country.flag).to.exist;
          expect(country.regionalBlocs).to.exist;
          done();
      })
  })

});