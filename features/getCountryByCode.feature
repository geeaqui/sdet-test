Feature: User get details of a country by searching its country code from the RestCountries API
  As a user
  I want to search country by country code
  So that I can see further details about that country
Scenario: Successfully search for country by country code
  When I search country by it's counry code
  Then I can see further deatils about that country with that country code