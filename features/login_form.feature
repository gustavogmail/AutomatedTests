Feature: Login proccess
  In order to show my knowledge as an automation developer
  As an opportunity seeker at Docler.
  I want to be able to run a simple BDD scenario

Scenario: log in application with a valid user
    Given I am on the login page

    When I tried to log in with a valid user
        | username                  | password  |
        | gustavo@emailprovider.com | 123456789 |

    Then I can see the success message

Scenario: try to log in application with a invalid user
    Given I am on the login page

    When I tried to log in with a invalid user
        | username                      | password  |
        | invaliduser@emailprovider.com | 987654321 |

    Then I can see the error message