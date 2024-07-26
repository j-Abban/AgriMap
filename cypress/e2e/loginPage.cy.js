/// <reference types="cypress"/>
import Login from "../../PageObjects/PageActions/LoginPageActions"

describe('Login Page Test', () => {
    const login = new Login();
    it('should Login to the Dashboard', () => {
    login.visit();
    login.userEmail('jilabov846@calunia.com');
    login.userPassword('Sell3r.123@');
    login.clickLoginButton();
    })
})