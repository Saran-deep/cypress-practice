import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../PageObjects/LoginPage";
import loginData from "../../../fixtures/Authentication.json";

Given("User is in the FoodN login modal page.", () => {
  cy.visit("/");
  cy.openAuthenticationModal(LoginPage.elements);
  LoginPage.elements.loginSectionLink().click();
  LoginPage.elements.loginPageCheckpoint().should("have.text", "Login.");
});

And("User enters valid email address.", () => {
  LoginPage.typeUserEmail(loginData.userEmail);
});

And("User enters valid password.", () => {
  LoginPage.typeUserPassword(loginData.password);
});

When("User clicks the login button.", () => {
  LoginPage.clickLoginButton();
});

Then("A snack bar is displayed showing {string} message.", (successMsg) => {
  LoginPage.elements.loginSuccessSnackbar().should("have.text", successMsg);
});

And("User enters invalid email address as {string}.", (email) => {
  LoginPage.typeUserEmail(email);
});

And("User eters invalid password as {string}.", (password) => {
  LoginPage.typeUserPassword(password);
});

When("User click the login button.", () => {
  LoginPage.clickLoginButton();
});

Then("{string} error message is showed.", (errorMsg) => {
  LoginPage.elements.loginFailedErrorMsg().should("have.text", errorMsg);
});
