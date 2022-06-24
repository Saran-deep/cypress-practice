Feature: Food Ordering Feature

    User is able to order food online.

    Scenario: User is able to order food through FoodN web appication.
        Given User is in the FoodN application and loged in.
        And User scrolls to Our Menu section.
        And User selects "Launch" from the meal options.
        When User selects "Tandoori Chicken" from the list of meals displayed.
        And The product overview page is displayed.
        And User clicks the buy now button.
        And Order summary page is displayed.
        And User selects "Net Banking" as payment option.
        When User clicks Place Order button.
        Then Order is succuessfully placed and "Order has been successfully placed." is displayed.