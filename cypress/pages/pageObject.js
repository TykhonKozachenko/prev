class PageObject {
  visit(url) {
    cy.visit(url || this.url);
  }
  
  assertLoggedInUser(firstName) {
    cy.assertLoggedInUser(firstName);
  }
}

export default PageObject;
