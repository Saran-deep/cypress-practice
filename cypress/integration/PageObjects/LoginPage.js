/// <reference types="cypress-xpath" />
class Login {
  elements = {
    accountLink: () => cy.contains("a", "Account"),
    signUpLink: () => cy.contains("a", "SignUp"),
    modal: () => cy.get("div[class='modal size--big open']"),
    userEmailInput: () =>
      cy.xpath("//div[@class='modal size--big open']//input[@name='email']"),
    userPasswordInput: () =>
      cy.xpath("//div[@class='modal size--big open']//input[@name='password']"),
    loginSuccessSnackbar: () =>
      cy.get("div[class='MuiAlert-message']", { timeout: 10000 }),
    loginFailedErrorMsg: () =>
      cy.xpath("//div[@class='modal size--big open']//div[@class='errorMsg']"),
    loginButton: () => cy.xpath("//button[normalize-space()='Login']"),
    loginSectionLink: () =>
      cy.xpath(
        "//div[@class='modal size--big open']//span[@class='bottom--text'][normalize-space()='Existing user ? Login']"
      ),
    loginPageCheckpoint: () => cy.xpath("//h2[normalize-space()='Login.']"),
  };

  typeUserEmail(email) {
    this.elements.userEmailInput().type(email).should("have.value", email);
  }

  typeUserPassword(password) {
    this.elements
      .userPasswordInput()
      .type(password)
      .should("have.value", password);
  }

  clickLoginButton() {
    this.elements.loginButton().click();
  }
}

module.exports = new Login();
