import PageObject from "./PageObject";

class CartPageObject extends PageObject {
  url = '/view_cart';

  clickProceedToCheckoutBtn() {
    cy.contains('.btn', 'Proceed To Checkout').click();
  }
}

export default CartPageObject;
