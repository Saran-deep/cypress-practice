import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import SignUpPage, { elements } from "../../PageObjects/SignUpPage";

Given("User is in the FoodN login modal.", () => {
  cy.visit("/");
  cy.openAuthenticationModal(SignUpPage.elements);
});

And(
  "User enters valid email address and both password confirm password as {string}.",
  (password) => {
    const generatedEmail = "fakeemail" + Date.now() + "@domain.com";
    SignUpPage.typeEmail(generatedEmail);
    SignUpPage.typePassword(password);
    SignUpPage.typeConfirmPassword(password);
  }
);

When("User cliks the Sign Up button.", () => {
  SignUpPage.clickSignUpButton();
});

Then("A snack bar is displayed showing Sign Up is success message.", () => {
  SignUpPage.elements
    .loginSuccessSnackbar()
    .should("have.text", "Sign up success.");
  cy.logout(elements);
});

And("User enters invalid email address {string}.", (email) => {
  SignUpPage.typeEmail(email);
});

And(
  "User enters the password and confirm password as {string}.",
  (password) => {
    SignUpPage.typePassword(password);
    SignUpPage.typeConfirmPassword(password);
  }
);

When("User clicks SignUp button.", () => {
  SignUpPage.clickSignUpButton();
});

Then("{string} error message is displayed.", (errorMsg) => {
  elements.emailErrorMsg().should("have.text", errorMsg);
  SignUpPage.closeModal();
});

And("User enters the email address as {string}.", (emailAddress) => {
  SignUpPage.typeEmail(emailAddress);
});

And(
  "User enters both password as {string} and confirm password as {string}.",
  (password, confirmPassword) => {
    SignUpPage.typePassword(password);
    SignUpPage.typeConfirmPassword(confirmPassword);
  }
);

When("User click Sign Up button.", () => {
  SignUpPage.clickSignUpButton();
});

Then("{string} error message is shown.", (errorMsg) => {
  elements.diffrentPasswordErrMsg().should("have.text", errorMsg);
  SignUpPage.closeModal();
});
