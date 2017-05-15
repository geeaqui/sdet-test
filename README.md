# BDD test for Rest Countries API


This document describes the Rest Country API test framework. The requirement for the framework was to create a BBD Feature file for the following use Case  :

"As a user I want to be able to see all countries in the world So that I can then choose which country to see further details about"

I was assigned to use the following API: https://restcountries.eu/rest/v2/all
and as I came from a web development background, I chose to use cucumber.js for this test project as I am familiar with using javascript language and frameworks such as assertion library chai for my test case.

The following three instruction bellow were provided in order to complete the framework:


1. Determine what coverage you would look to achieve through feature tests and what other techniques you might like to use to test to obtain good test coverage.  

2. Implement the more important scenarios (min 2) creating a way of testing them that will allow for executing in an automated manner. This should demonstrate an understanding of the attributes that make up a good test framework, using the language/library of your choice Java, Ruby or C#.  

3. Annotate how you would trace the features back to the requirement. If time permits, include reporting that demonstrates how the features have been validated

### Extra

 Bellow are the Different features that were tested in order to test all the endpoint that Version 2 of the Rest Countries API had to offer 

1. All Countries : "As a user I want to view all of the countries in the world So that I can then choose which country to see further details about that country"
2. Get Country By Name : "As a user I want to search country by name So that I can see further details about that country"
3. Get Country by Country Code : "As a user I want to view country by its country code So that I can see further details about that country"


## Installation

**Prerequisites**:

* node v7.10.0

## Technologies used for this test

* Javascript
* npm
* cucumber.js
* chai

### Features

The acceptance tests are written on a high-level language.

````
When I search for all the countries
Then I should be able to see all the countries
And I should see all the information about each country
````


### Step Definitions

In general, the actual actions to be taken are described in the step definitions:


#Running the Test

 Once the Step Defintion's are complete then the test is ready to executed inorder to run test run the following command 

 ````shell
    ./node_modules/.bin/cucumber-js

````

## Author
Gerald Aqui