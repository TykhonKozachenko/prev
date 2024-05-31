/// <reference types='cypress' />

const { existingUserData } = require('../support/fixtures/existingUser');
const { generateBankCardData } = require('../support/fixtures/bankCardData');

const userData = existingUserData();
const cardData = generateBankCardData();

import PageObject from "../pages/PageObject";
import AuthPageObject from "../pages/auth.pageObject";
import CartPageObject from "../pages/cart.pageObject";
import CheckoutPageObject from "../pages/checkout.pageObject";
import PaymentPageObject from "../pages/payment.pageObject";
import PaymentDoneObject from "../pages/paymentDone.pageObject";

const mainPage = new PageObject;
const authPage = new AuthPageObject;
const cartPage = new CartPageObject;
const checkoutPage = new CheckoutPageObject;
const paymentPage = new PaymentPageObject;
const paymentDonePage = new PaymentDoneObject;

describe('Checkout process', () => {
  before(() => {
    authPage.visit();

    authPage.typeEmailOfExistingUser(userData.email);
    authPage.typePasswordOfExistingUser(userData.password);
    authPage.clickLoginBtn();

    mainPage.assertLoggedInUser(userData.firstName);
  });

  it('should allow to complete checkout', () => {
    cy.addToCart(1);
    cy.addToCart(2);
    cy.addToCart(3);

    cartPage.visit();

    cartPage.clickProceedToCheckoutBtn();

    checkoutPage.clickPlaceOrderBtn();

    paymentPage.typeNameOnCard(cardData.name);
    paymentPage.typeCardNumber(cardData.number);
    paymentPage.typeCardCVC(cardData.cvc);
    paymentPage.typeCardExpiryMonth(cardData.expMonth);
    paymentPage.typeCardExpiryYear(cardData.expYear);

    paymentPage.clickPayBtn();

    paymentDonePage.assertOrderPlaced();
    paymentDonePage.clickContinueBtn();
  });
});
