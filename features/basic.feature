Feature: Business rules
  In order to show my knowledge as an automation developer
  As an opportunity seeker at Docler.
  I want to be able to run a simple BDD scenario

Scenario: add multiple tasks in Todo Application
  Given I am on the main page

  When I add multiple tasks in the list
    | task                   | day      | 
    | Create automated tests | today    | 
    | Study the pageObjects  | today    | 
    | study codeceptjs       | tomorrow |
    
  Then I can see the added tasks items
