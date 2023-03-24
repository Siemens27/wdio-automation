Feature: Client Test
    Scenario: Create client
        Given I am on the client page
        When I click add client
        And I input client data
        And I click save button
        Then I should see create success message

    Scenario: View client
        Given I am on the client page
        When I click a client data
        Then I should see client detail data
    
    Scenario: Edit client
        Given I am on the client page
        When I click a client data
        And I change client data
        And I click save button
        Then I should see update success message