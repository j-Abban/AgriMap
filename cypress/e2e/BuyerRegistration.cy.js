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
            signup.fillEmail();
        })
    })