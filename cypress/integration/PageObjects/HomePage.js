/// <reference types="cypress-xpath" />
class HomePage {
  elements = {};

  #privateElements = {
    mealsUiList: () =>
      cy.xpath("//ul[@class='ourMenu--foodNav--lists ulList']"),
    ourMenuSection: () =>
      cy.xpath("//section[@id='section--ourMenu']//div[@class='empty--space']"),
    menuItemsContainer: () => cy.xpath("//div[@class='ourMenu--menuItems']"),
  };

  scrollToOurMenu() {
    this.#privateElements.ourMenuSection().scrollIntoView();
  }

  selectFromMealOptions(option) {
    this.#privateElements
      .mealsUiList()
      .contains(option)
      .click({ scrollBehavior: false });
  }

  selectDish(dishName) {
    this.#privateElements
      .menuItemsContainer()
      .contains(dishName)
      .parent()
      .contains("Buy Now")
      .click({ force: true });
  }

  
}

module.exports = new HomePage();
