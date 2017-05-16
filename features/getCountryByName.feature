Feature: User get details of a country by searching its name from the RestCountries API
  As a user
  I want to search country by name
  So that I can see further details about that country

  Scenario: Successfully search for countries by name
    When I search country by name
    Then I can see further details about that country

  Scenario: Search a country with an invalid name
    When I search country with an invalid name
    Then I should get an error