/// <reference types="cypress"/>
import Login from "../../PageObjects/PageActions/LoginPageActions";
import Product from "../../PageObjects/PageActions/productManagement";

describe('Full User Flow Test', () => {
  const login = new Login();
  const product = new Product();

  before(() => {
    // This will run once before all tests in this block
    login.visit();
    login.userEmail('jilabov846@calunia.com');
    login.userPassword('Sell3r.123@');
    login.clickLoginButton();
  });

  describe('User Profile Page', () => {
    //beforeEach(() => {
    //  update.visit();
    //});

    it('should view and edit user details', () => {
     //product.clickOnManageProducts();
     //product.clickAddProduct();
     cy.get(':nth-child(9) > .ng-star-inserted > .nav-item > p').click();
     cy.get('div.md\\:text-base.text-xs.font-bold.px-4.py-1.md\\:px-7.md\\:py-2.font-sans.bg-primary-100.text-white.rounded-lg.cursor-pointer').click();
     
    });
  });
});