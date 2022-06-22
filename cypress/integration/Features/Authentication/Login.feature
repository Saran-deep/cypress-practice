Feature: Login Feature

    User is able to login to FoodN application using valid credentials.


    Background: login Page
        Given User is in the FoodN login modal page.


    Scenario: User is able to login using valid credentials.
        And User enters valid email address.
        And User enters valid password.
        When User clicks the login button.
        Then A snack bar is displayed showing "Login success." message.

    Scenario: User is not able to login using invalid credentials.
        And User enters invalid email address "invalid@gmail.com".
        And User eters invalid password as "P@ssw0rd".
        When User click the login button.
        Then "There is no user record corresponding to this identifier. The user may have been deleted." error message is showed.
