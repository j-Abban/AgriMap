/// <reference types="cypress" />
//Buyer Registration Page
import Signup from "../../PageObjects/PageActions/BuyerPageActions"

describe('Buyer Registration Page', () => {
const signup = new Signup();

        it('should register a new user', () => {
            signup.visit();
            signup.fillFirstName('Akomeah');
            signup.fillLastName('Ansah');
            signup.clickNextButton();
            signup.fillEmail('kwameabban@gmail.com');
            signup.fillPhone('+233550877703');
            signup.fillLocation('Kumasi');
            signup.clickButton();
            signup.fillCreatePassword('Sell3r123@');
            signup.fillConfirmPassword('Sell3r123@');
            signup.checkCheckbox();
            signup.clickRegisterButton();
        })
    })