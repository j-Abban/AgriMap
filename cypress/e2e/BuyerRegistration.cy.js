/// <reference types="cypress" />
//Buyer Registration Page
import Signup from "../../PageObjects/PageActions/BuyerPageActions"

describe('Buyer Registration Page', () => {
const signup = new Signup();

        it('should register a new user', () => {
            cy.fixture('credentials').then((creds) => {
            signup.visit();
            signup.fillFirstName(creds.buyerFirstName);
            signup.fillLastName(creds.buyerLastName);
            signup.clickNextButton();
            signup.fillEmail(creds.buyerEmail);
            signup.fillPhone(creds.phone);
            signup.fillLocation(creds.location);
            signup.clickButton();
            signup.fillCreatePassword(creds.createPassword);
            signup.fillConfirmPassword(creds.confirmPassword);
            signup.checkCheckbox();
            signup.clickRegisterButton();
        });
    });
    });