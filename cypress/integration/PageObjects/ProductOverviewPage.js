/// <reference types="cypress-xpath" />
class ProductOverviewPage {
  #privateElements = {
    buyNowBtn: () => cy.xpath("//button[normalize-space()='Buy Now']"),
  };

  productOverviewPageIsLoaded() {
    cy.url().should("include", "Product-OverView");
  }

  clickBuyNowBtn() {
    this.#privateElements.buyNowBtn().click();
  }
}

module.exports = new ProductOverviewPage();
