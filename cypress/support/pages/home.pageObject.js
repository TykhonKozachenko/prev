import PageObject from "../PageObject";

class HomePageObject extends PageObject {
  url = '/';

  get item() {
    return cy.contains('.card-title', 'Samsung galaxy s6');
  }

  clickOnItem() {
    this.item
      .click();
  }

  get itemName() {
    return cy.get('.name');
  }

  assertRightProduct(item) {
    this.itemName
      .should('contain', item);
  }

  get addBtn() {
    return cy.contains('.btn', 'Add to cart')
  }

  addToCartBtn(addBtn) {
    this.addBtn
      .click();
  }

  get usernameLink() {
    return cy.get('#nameofuser');
  }

  assertHeaderContainUsername(username) {
    this.usernameLink
      .should('contain', username);
  }
}

export default HomePageObject
