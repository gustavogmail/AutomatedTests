Feature: Business rules
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system

Scenario: do something
  Given I am on the main page
  When I add multiple tasks in the list
    | task         | day      | 
    | Harry Potter | today    | 
    | iPhone 5     | today    | 
    | Nuclear Bomb | tomorrow |
  Then I can see the added tasks items
