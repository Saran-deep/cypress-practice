import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../PageObjects/LoginPage";
import loginData from "../../../fixtures/Authentication.json";
import HomePage from "../../PageObjects/HomePage";
import ProductOverviewPage from "../../PageObjects/ProductOverviewPage";
import OrderSuccessPage from "../../PageObjects/OrderSuccessPage";
import OrderSummaryPage from "../../PageObjects/OrderSummaryPage";

Given("User is in the FoodN application and loged in.", () => {
  cy.visit("/");
  cy.login(loginData, LoginPage.elements);
});
And("User scrolls to Our Menu section.", () => {
  HomePage.scrollToOurMenu();
});
And("User selects {string} from the meal options.", (mealOption) => {
  HomePage.selectFromMealOptions(mealOption);
});
When("User selects {string} from the list of meals displayed.", (dishName) => {
  HomePage.selectDish(dishName);
});
And("The product overview page is displayed.", () => {
  ProductOverviewPage.productOverviewPageIsLoaded();
});

And("User clicks the buy now button.", () => {
  ProductOverviewPage.clickBuyNowBtn();
});

And("Order summary page is displayed.", () => {
  OrderSummaryPage.OrderSummaryPageIsLoaded();
});
And("User selects {string} as payment option.", (paymentMethod) => {
  OrderSummaryPage.selectPaymentMethod(paymentMethod);
});
When("User clicks Place Order button.", () => {
  OrderSummaryPage.clickOrderPlaceButton();
});
Then("Order is succuessfully placed and {string} is displayed.", (message) => {
  OrderSuccessPage.orderSucsessPageIsLoaded(message);
});
