Feature: Sign Up Feature

    User is only able to Sign Up to FoodN using valid credentials.

    Background: Login page.
        Given User is in the FoodN login modal.

    Scenario: User is able to Sign Up to FoodN with valid credentials.
        And User enters valid email address and both password confirm password as "Fake@Pass45".
        When User cliks the Sign Up button.
        Then A snack bar is displayed showing Sign Up is success message.

    Scenario Outline: User is not able to create an account with invalid email address.
        And User enters invalid email address as "<email>".
        And User enters the password and confirm password as "P@ssw0rd".
        When User clicks SignUp button.
        Then "Enter a Valid Email" error message is displayed.

    Examples:
        | email |
        | invalid.com |
        | com.testemail@.com |

    Scenario Outline: User is not able to create an account with both the password and confirm password as diffrent but valid password.
        And User enters the email address as "testEmail@domain.com".
        And User enters both password as "<password>" and confirm password as "<confirmPassword>".
        When User click Sign Up button.
        Then "Both password need to be the same" error message is shown.
    
    Examples:
        | password | confirmPassword |
        | P@ssw0rd | P1ssw@rd         |
        | Test@123 | Teet@123         |
