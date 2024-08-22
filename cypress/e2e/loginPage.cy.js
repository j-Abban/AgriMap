/// <reference types="cypress"/>
import Login from "../../PageObjects/PageActions/LoginPageActions"

describe('Login Page Test', () => {
    const login = new Login();
    it('should Login to the Dashboard', () => {
    login.visit();
    login.userEmail('dohago9951@qodiq.com');
    login.userPassword('Kw@m3.Jak1');
    login.clickLoginButton();
    })
})