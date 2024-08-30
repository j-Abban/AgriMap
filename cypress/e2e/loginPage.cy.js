/// <reference types="cypress"/>
import Login from "../../PageObjects/PageActions/LoginPageActions"

describe('Login Page Test', () => {
    const login = new Login();
    it('should Login to the Dashboard', () => {
        cy.fixture('credentials').then((creds) => {
    login.visit();
    login.userEmail(creds.loginUserEmail);
    login.userPassword(creds.loginPassword);
    login.clickLoginButton();
    login.verifyLoginSuccess();
    });
});
});