/// <reference types='cypress' />

import HomePageObject from '../support/pages/home.pageObject';
import CartPageObject from '../support/pages/cart.pageObject';
import PageObject from '../support/PageObject';

const homePage = new HomePageObject();
const cartPage = new CartPageObject();
const pageObject = new PageObject();

const item = 'Samsung galaxy s6';

describe('Adding product to the cart', () => {
  
  before(() => {
    homePage.visit();
  })

  it('should allow user to add product to the cart', () => {
    homePage
      .clickOnItem();

    homePage
      .assertRightProduct(item);

    homePage
      .addToCartBtn();

    pageObject
      .assertAllert('Product added');

    cartPage.visit();

    cartPage
      .assertProductAdded(item);
  });
})