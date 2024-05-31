import PageObject from "./PageObject";

class PaymentDoneObject extends PageObject {
  assertOrderPlaced() {
    cy.getByDataQa('order-placed')
      .should('contain', 'Order Placed!');
  }

  clickContinueBtn() {
    cy.getByDataQa('continue-button').click();
  }
}

export default PaymentDoneObject;
