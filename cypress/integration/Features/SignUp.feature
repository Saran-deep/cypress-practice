Feature: Sign Up Feature

    User is only able to Sign Up to FoodN using valid credentials.

    Background: Login page.
    Given User is in the FoodN login modal.

    Scenario: User is able to Sign Up to FoodN with valid credentials.
    And User enters valid email address and password.
    When User cliks the Sign Up button.
    Then A snack bar is displayed showing Sign Up is success message.

    Scenario: User is not able to create an account with invalid email address.
    And User enters invalid email address as "testemail.com"
    And User enters the password and confirm password "P@ssw0rd".
    When User clicks SignUp button.
    Then An error message is displayed.

    Scenario: User is not able to create an account with both the password and confirm password as diffrent.
    And User enters the email address.
    And User enters the password as "invalid" and enters confirm password as "invalid password".
    When User click Sign Up button.
    Then An error message is shown.
