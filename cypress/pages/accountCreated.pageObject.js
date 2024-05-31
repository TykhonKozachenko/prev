import PageObject from "./PageObject";

class AccountCreatedPageObject extends PageObject {
  url = '/account_created';

  assertAccountCreated() {
    cy.getByDataQa('account-created')
      .should('contain', 'Account Created!');
  }

  clickContinueBtn() {
    cy.getByDataQa('continue-button').click();
  }
}

export default AccountCreatedPageObject;
