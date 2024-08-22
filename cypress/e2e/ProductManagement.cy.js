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
     const imagePath = 'Guava.jpg';
     cy.get(':nth-child(9) > .ng-star-inserted > .nav-item > p').click();
     cy.get("[class='flex w-full items-center justify-between px-4 my-4'] [tabindex]").click();
     cy.get('.form-group > .w-full').type('Maize');
     cy.get('.mt-4 > .w-full')
     .type('Maize, also known as corn in North American English, is a tall stout grass that produces cereal grain.');
    // cy.get('label[for="file"]').attachFile(imagePath);
    cy.get('label[for="file"]').click();

    });
  });
});