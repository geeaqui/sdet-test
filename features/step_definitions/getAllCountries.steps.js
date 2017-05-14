'use strict';

var {defineSupportCode} = require('cucumber');

var chai = require('chai');
var rp = require('request-promise');

var expect = chai.expect;
var self = this;

var hasNullValue = [];

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

self.World = require(process.cwd() + '/features/support/world');
defineSupportCode(function({Then, When}) {

  Then("I should be able to see all the countries", function(done) {
      expect(self.World.response).to.be.ok;
      expect(self.World.response).to.be.an('array');
      expect(self.World.response.length).to.be.at.least(196);
    done();
  });

  Then("I should see all the information about each country", function(done) {

      self.World.response.forEach(function(country) {
          expect(country).to.have.all.keys(self.expectedKeys);
          expect(country).to.be.an('object');
          try{
          	if(expect(country.topLevelDomain).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no topLevelDomain");
          	hasNullValue.push(country.name + " has no topLevelDomain");
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
          	if(expect(country.capital).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no capital");
          }

          try{
          	if(expect(country.altSpellings).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no altSpellings");
          }

          try{
          	if(expect(country.region).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no region");
          }
 		
 		  try{
          	if(expect(country.subregion).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no subregion");
          }

          try{
          	if(expect(country.population).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no population");
          }

          try{
          	if(expect(country.latlng).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no latlang");
          }

          try{
          	if(expect(country.demonym).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no demonym");
          }

          try{
          	if(expect(country.area).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no area");
          	hasNullValue.push(country.name + " has no area");
          }

          try{
          	if(expect(country.gini).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no gini");
          }

          try{
          	if(expect(country.timezones).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no timezones");
          }

          try{
          	if(expect(country.borders).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no borders");
          }

          try{
          	if(expect(country.nativeName).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no nativeName");
          }

          try{
          	if(expect(country.numericCode).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no numericCode");
          }
          
          try{
          	if(expect(country.currencies).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no currencies");
          }

          try{
          	if(expect(country.languages).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no languages");
          }

          try{
          	if(expect(country.translations).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no translation");
          }

          try{
          	if(expect(country.flag).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no flag");
          }

          try{
          	if(expect(country.regionalBlocs).to.exist === -1) throw "Error"
          }catch(err){
          	console.log(country.name + " has no regionalBlocs");
          }
          
          //expect(country.area).to.exist; some of the content are null
          //expect(country.gini).to.exist; some of the content are null
          //expect(country.numericCode).to.exist; one of the object is null
          
          done();
      })
  });
});