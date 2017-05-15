Feature: User get a list of all countries from the RestCountries API
  As a user
  I want to view all of the countries in the world
  So that I can then choose which country to see further details about that country

Background: I am using the API correctly according to the documentation

  Scenario: Successfully search for all countries
    When I search for all the countries
    Then I should be able to see all the countries
    And I should see all the information about each country

  Scenario: Successfully search for countries by name
    When I search country by name
    Then I can see further details about that country

  Scenario: Successfully search for country by country code
    When I search country by it's counry code
    Then I can see further deatils about that country with that country code