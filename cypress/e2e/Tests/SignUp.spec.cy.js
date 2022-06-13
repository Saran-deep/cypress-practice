import SignUpPage from "../../PageObjects/SignUpPage";

describe("FoodN Sign Up functionality", () => {
  beforeEach(() => {
    cy.visit("https://restaurant-development.web.app");
  });
  it(
    "Create an account with valid credentials.",
    { defaultCommandTimeout: 10000 },
    () => {
      SignUpPage.openSignUpModal();
      SignUpPage.typeEmail("fake15@domain.com");
      SignUpPage.typePassword("Fake@74!#");
      SignUpPage.typeConfirmPassword("Fake@74!#");
      SignUpPage.clickSignUpButton();
      SignUpPage.elements
        .loginSuccessSnackbar()
        .should("have.text", "Sign up success.");
    }
  );
});
