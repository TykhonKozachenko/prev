import PageObject from "../PageObject";

class RegistrationPageObject extends PageObject {
  get usernameField() {
    return cy.get('#sign-username');
  }

  typeUsername(username) {
    this.usernameField
      .type(username);
  }

  get passwordField() {
    return cy.get('#sign-password');
  }

  typePassword(password) {
    this.passwordField
      .type(password);
  }

  get signUpBtn() {
    return cy.contains('.btn', 'Sign up');
  }

  clickSignUpBtn(signUpBtn) {
    this.signUpBtn
      .click();
  }

  get signUpModal() {
    return cy.get('#signInModalLabel');
  }

  assertSignUpModalOpened(signUpModal) {
    this.signUpModal
      .should('exist');
  }
}

export default RegistrationPageObject;
