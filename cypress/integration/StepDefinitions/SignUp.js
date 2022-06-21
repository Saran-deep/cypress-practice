import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import SignUpPage from "../PageObjects/SignUpPage";

Given("User is in the FoodN login modal.", () => {
  cy.visit("/");
  cy.openLoginModal(SignUpPage.elements);
});

And("User enters valid email address and password.", () => {
  SignUpPage.typeEmail("fake15@domain.com");
  SignUpPage.typePassword("Fake@74!#");
  SignUpPage.typeConfirmPassword("Fake@74!#");
});

When("User cliks the Sign Up button.", () => {
  SignUpPage.clickSignUpButton();
});

Then("A snack bar is displayed showing Sign Up is success message.", () => {
  SignUpPage.elements
    .loginSuccessSnackbar()
    .should("have.text", "Sign up success.");
});

And('User enters invalid email address as "testemail.com"', () => {});

And('User enters the password and confirm password "P@ssw0rd".', () => {});

When("User clicks SignUp button.", () => {});

Then("An error message is displayed.", () => {});

And("User enters the email address.", () => {});

And(
  "User enters the password as 'invalid' and enters confirm password as 'invalid password'.",
  () => {}
);

When("User click Sign Up button.", () => {});

Then("An error message is shown.", () => {});
