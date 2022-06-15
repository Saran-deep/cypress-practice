import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import SignUpPage from "../PageObjects/SignUpPage";

Given("User is in the FoodN login modal.", () => {
  cy.visit("/");
  SignUpPage.openSignUpModal();
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
