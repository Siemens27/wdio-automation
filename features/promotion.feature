Feature: Promotion Test
    Scenario: Edit promotion
        Given I am in the promotion page
        When I click a promotion
        And I click edit basic promotion
        And I change basic promotion data
        And I click save
        Then I should see the data changed

    Scenario: Delete promotion
        Given I am in the promotion page
        When I click a promotion
        # And I click delete promotion
        # Then I should see promotion deleted