Feature: Sign Up Feature

    User is only able to Sign Up to FoodN using valid credentials.

    Scenario: User is able to Sign Up to FoodN with valid credentials.
    Given User is in the FoodN login modal.
    And User enters valid email address and password.
    When User cliks the Sign Up button.
    Then A snack bar is displayed showing Sign Up is success message.
