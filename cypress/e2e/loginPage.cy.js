/// <reference types="cypress"/>
import Login from "../../PageObjects/PageActions/LoginPageActions"

describe('Login Page Test', () => {
    const login = new Login();
    it('should Login to the Dashboard', () => {
    login.visit();
    login.userEmail('xitoda6041@amxyy.com');
    login.userPassword('Buy3r@1234');
    login.clickLoginButton();
    })
})