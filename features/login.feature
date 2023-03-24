Feature: Login Test

  Scenario: Login with valid credentials

    Given I am on the login page
    When I login with username as 'Admin' and password as 'Admin@Navi'
    Then I should go to dashboard page
