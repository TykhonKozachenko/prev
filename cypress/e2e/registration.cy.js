/// <reference types='cypress' />

const { generateNewUserUI } = require('../support/fixtures/newUserViaUI');
const { generateNewUserAPI } = require('../support/fixtures/newUserViaAPI');

const userDataUI = generateNewUserUI();
const userDataAPI = generateNewUserAPI();

import PageObject from "../pages/PageObject";
import AuthPageObject from "../pages/auth.pageObject";
import RegistrationPageObject from "../pages/registration.pageObject";
import AccountCreatedPageObject from "../pages/accountCreated.pageObject";

const mainPage = new PageObject;
const authPage = new AuthPageObject;
const registrationPage = new RegistrationPageObject;
const accountCreatedPage = new AccountCreatedPageObject;

describe('User management', () => {
  beforeEach(() => {
    authPage.visit();
  });

  it('should allow to register a new user', () => {
    authPage.typeNameOfNewUser(userDataUI.firstName);
    authPage.typeEmailOfNewUser(userDataUI.email);
    authPage.clickSignUpBtn();

    cy.url().should('include', registrationPage.url);

    registrationPage.selectGender(userDataUI.randomGender);
    registrationPage.typePassword(userDataUI.password);
    registrationPage.selectBirthDay(userDataUI.randomBirthDay);
    registrationPage.selectBirthMonth(userDataUI.randomBirthMonth);
    registrationPage.selectBirthYear(userDataUI.randomBirthYear);
    registrationPage.checkNewsletterBox();

    registrationPage.typeFirstName(userDataUI.firstName);
    registrationPage.typeLastName(userDataUI.lastName);
    registrationPage.enterAddress(userDataUI.randomAddress);
    registrationPage.selectCountry(userDataUI.randomCountry);
    registrationPage.enterState(userDataUI.randomState);
    registrationPage.enterCity(userDataUI.randomCity);
    registrationPage.enterZipCode(userDataUI.randomZipCode);
    registrationPage.enterMobileNumber(userDataUI.randomMobileNumber);
    registrationPage.clickCreateAccountBtn();

    cy.url().should('include', accountCreatedPage.url);
    accountCreatedPage.assertAccountCreated();

    accountCreatedPage.clickContinueBtn();

    mainPage.assertLoggedInUser(userDataUI.firstName);
  });

  it('should allow to login with created credentials', () => {
    cy.generateUser(userDataAPI).then(() => {
      cy.get('@userData').then((userData) => {
        authPage.typeEmailOfExistingUser(userData.email);
        authPage.typePasswordOfExistingUser(userData.password);
        authPage.clickLoginBtn();
  
        mainPage.assertLoggedInUser(userData.name);
      });
    });
  });

  it('should allow to delete account', () => {
    cy.generateUser(userDataAPI).then(() => {
      cy.get('@userData').then((userData) => {
        cy.deleteUserAccount(userData).then(() => {
          cy.verifyLogin(userData);
        });
      });
    });
  });
});
