Feature: Promotion Test

    Scenario: Delete promotion
        Given I am in the promotion page
        When I click a promotion
        And I click delete promotion
        Then I should see promotion deleted
