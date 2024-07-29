/// <reference types="cypress"/>
import Login from "../../PageObjects/PageActions/LoginPageActions";
import Update from "../../PageObjects/PageActions/UserProfile";

describe('Full User Flow Test', () => {
  const login = new Login();
  const update = new Update();

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
      update.clickUserProfile();
      update.clickOnEdit();
      update.inputFirstName(); 
      update.inputLastName(); 
      update.inputPhone(); 
      update.inputOrganizationName();
      update.clickSaveChanges();

    });
  });
});