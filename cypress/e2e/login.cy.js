/// <reference types='cypress' />

import LoginPageObject from '../support/pages/login.pageObject';
import HomePageObject from '../support/pages/home.pageObject';
import PageObject from '../support/PageObject';

const signInModal = new LoginPageObject();
const homePage = new HomePageObject();
const pageObject = new PageObject();

const user = {
  username: 'tykhonkozachenko',
  password: 'Password123!_'
}

describe('Login modal', () => {
  
  before(() => {
    cy.visit('/');

    cy.get('#login2')
      .click();
  })

  it('should allow user to sign in', () => {
    signInModal
      .assertSignInModalOpened();
      
    cy.wait(500);

    signInModal
      .typeUsername(user.username);

    signInModal
      .typePassword(user.password);

    cy.wait(500);

    signInModal
      .clickLogInBtn();

    homePage
      .assertHeaderContainUsername(user.username);
  });
});