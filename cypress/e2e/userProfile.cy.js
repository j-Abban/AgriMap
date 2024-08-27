/// <reference types="cypress"/>
import Login from "../../PageObjects/PageActions/LoginPageActions";
import Update from "../../PageObjects/PageActions/UserProfile";

describe('Full User Flow Test', () => {
  const login = new Login();
  const update = new Update();

  before(() => {
    // This will run once before all tests in this block
    login.visit();
    login.userEmail('xegopi2177@daypey.com');
    login.userPassword('Kw@m3.Jak1');
    login.clickLoginButton();
  });

  describe('User Profile Page', () => {
    //beforeEach(() => {
    //  update.visit();
    //});

    it('should view and edit user details', () => {
      update.clickUserProfile();
      update.clickOnEdit();
      update.clickOnEdit1();
      update.inputFirstName('Hilary'); 
      update.inputLastName('Ackah'); 
      update.inputPhone('+233557298173'); 
      update.inputOrganizationName('Darko Farms');
      update.clickSaveChanges();
      update.successfulUpdate('Profile Updated Successfully')
    });
  });
});