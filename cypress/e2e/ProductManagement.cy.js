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
     cy.get("[class='flex w-full items-center justify-between px-4 my-4'] [tabindex]").click();
     
    });
  });
});