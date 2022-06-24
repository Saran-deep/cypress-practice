/// <reference types="cypress-xpath" />
class OrderSuccessPage {
  #pageElements = {
    orderSuccessText: (message) =>
      cy.xpath("//h2[normalize-space()='" + message + "']"),
  };

  orderSucsessPageIsLoaded(message) {
    cy.url().should("include", "Order-success");
    this.#pageElements
      .orderSuccessText(message)
      .should("be.visible")
      .and("have.text", message);
  }
}

module.exports = new OrderSuccessPage();
