import PageObject from "../PageObject";

class LoginPageObject extends PageObject {
  get usernameField() {
    return cy.get('#loginusername');
  }

  typeUsername(username) {
    this.usernameField
      .type(username);
  }

  get passwordField() {
    return cy.get('#loginpassword');
  }

  typePassword(password) {
    this.passwordField
      .type(password);
  }

  get logInBtn() {
    return cy.contains('.btn', 'Log in');
  }

  clickLogInBtn(logInBtn) {
    this.logInBtn
      .click();
  }
  
  get signInModal() {
    return cy.get('#logInModalLabel');
  }

  assertSignInModalOpened(signInModal) {
    this.signInModal
      .should('exist');
  }
}

export default LoginPageObject
