import PageObject from "../PageObject";

class CartPageObject extends PageObject {
  url = '/cart.html';

  get itemName() {
    return cy.contains('.success', 'Samsung galaxy s6');
  }

  assertProductAdded(item) {
    this.itemName
      .should('contain', item);
  }
}

export default CartPageObject
