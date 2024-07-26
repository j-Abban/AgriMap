/// <reference types="cypress" />
//Seller Account Registration
import RegistrationPage from "../../PageObjects/PageActions/SellerPageActions"

describe('Seller Registration Page', () => {

const registrationPage = new RegistrationPage();

    it('should register a new user', () => {
     registrationPage.visit();
     registrationPage.fillFirstName('Nana');
     registrationPage.fillLastName('Kwame');
     registrationPage.fillEmail('nana.kwame@example.com');
     registrationPage.clickNextButton();
     registrationPage.fillLocation('Takoradi');
     registrationPage.fillPhone('+233557298173');
     registrationPage.fillOrganization('Amakom');
     registrationPage.clickButton();
     registrationPage.fillCreatePassword('Kw@m3.Jak1');
     registrationPage.fillConfirmPassword('Kw@m3.Jak1');
     registrationPage.checkCheckbox();
     registrationPage.clickRegisterButton();
    })
})