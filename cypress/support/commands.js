// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("openAuthenticationModal", (elements) => {
  elements.accountLink().realHover({ pointer: "mouse", scrollBehavior: false });
  elements.signUpLink().click();
  elements.modal().should("be.visible");
});

Cypress.Commands.add("logout", (elements) => {
  elements.accountLink().realHover({ pointer: "mouse", scrollBehavior: false });
  elements.logOutLink().click();
});

Cypress.Commands.add("login", (credentials, elements) => {
  elements.accountLink().realHover({ pointer: "mouse", scrollBehavior: false });
  elements.signUpLink().click();
  elements.modal().should("be.visible");
  elements.loginSectionLink().click();
  elements.loginPageCheckpoint().should("have.text", "Login.");
  elements
    .userEmailInput()
    .type(credentials.userEmail)
    .should("have.value", credentials.userEmail);
  elements
    .userPasswordInput()
    .type(credentials.password)
    .should("have.value", credentials.password);
  elements.loginButton().click();
  elements.loginSuccessSnackbar().should("have.text", "Login success.");
});
