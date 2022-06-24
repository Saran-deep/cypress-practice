/// <reference types="cypress-xpath" />
class OrderSummaryPage {
  #privaeElements = {
    orderSummaryHeading: () =>
      cy.xpath("//h3[normalize-space()='Order Summary']"),
    paymentMethodRadioBtn: (method) =>
      cy.xpath("//input[@value='" + method + "']"),
    placeOrderButton: () =>
      cy.xpath("//button[normalize-space()='PLACE ORDER']"),
    orderSummaryLeftBox: () =>
      cy.xpath("//div[@class='shopping--cart--items product--summary']"),
  };

  OrderSummaryPageIsLoaded() {
    cy.url().should("include", "Order-summary");
    this.#privaeElements
      .orderSummaryHeading()
      .should("be.visible")
      .and("have.text", "Order Summary");
  }

  selectPaymentMethod(method) {
    this.#privaeElements.orderSummaryLeftBox().scrollTo("bottom");
    this.#privaeElements
      .paymentMethodRadioBtn(method)
      .click()
      .should("be.checked");
  }

  clickOrderPlaceButton() {
    this.#privaeElements.placeOrderButton().click();
  }
}

module.exports = new OrderSummaryPage();
