/// <reference types='cypress' />

import RegistrationPageObject from '../support/pages/registration.pageObject';
import PageObject from '../support/PageObject';

const signUpModal = new RegistrationPageObject();
const pageObject = new PageObject();

describe('Registration modal', () => {
  let user;

  before(() => {
    cy.task('newUser')
      .then((newUser) => {
        user = newUser;
    });

    cy.visit('/');

    cy.get('#signin2')
      .click();

  });

  it('should allow user to sign up', () => {
    signUpModal
      .assertSignUpModalOpened();

    signUpModal
      .typeUsername(user.username);

    cy.wait(500);

    signUpModal
      .typePassword(user.password);
    
    cy.wait(500);

    signUpModal
      .clickSignUpBtn();

    pageObject
      .assertAllert('Sign up successful.');
  });
});