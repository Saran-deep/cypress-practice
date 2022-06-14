class SignUp {
  elements = {
    accountLink: () => cy.contains("a", "Account"),
    signUpLink: () => cy.contains("a", "SignUp"),
    userEmailInput: () =>
      cy.get("div[class='modal size--big open'] input[name='email']"),
    passwordInput: () =>
      cy.get("div[class='modal size--big open'] input[name='password']"),
    confirmPasswordInput: () =>
      cy.get("div[class='modal size--big open'] input[name='confirmPassword']"),
    sinUpButton: () =>
      cy.get("div[class='modal size--big open'] button[type='submit']"),
    modal: () => cy.get("div[class='modal size--big open']"),
    loginSuccessSnackbar: () => cy.get("div[class='MuiAlert-message']"),
  };

  openSignUpModal() {
    this.elements.accountLink().realHover("mouse");
    this.elements.signUpLink().click();
    this.elements.modal().should("be.visible");
  }

  typeEmail(email) {
    this.elements.userEmailInput().type(email).should("have.value", email);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password).should("have.value", password);
  }

  typeConfirmPassword(password) {
    this.elements
      .confirmPasswordInput()
      .type(password)
      .should("have.value", password);
  }

  clickSignUpButton() {
    this.elements.sinUpButton().click();
  }
}

module.exports = new SignUp();
