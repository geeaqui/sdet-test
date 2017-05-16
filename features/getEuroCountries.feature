Feature: User get number of country using euro
  As a user using the api
  I want to know list of countries in europe
  So that I know how many countries are using euro

  Scenario: Successfully search for countries by name
    When I search for the list of countries in the Europe
    Then I can see how many countries are using euro