// Buyer Page Actions

class Signup{
    visit = () => {
        cy.visit('/auth/buyer-registration');
    }

    fillFirstName = (userfirstnamee) => {
        cy.get(':nth-child(1) > .form-group > .w-full').type(userfirstnamee);    
    }

    fillLastName =(userlastnamee) => {
        cy.get(':nth-child(2) > .form-group > .w-full').type(userlastnamee);
    }
    
    clickNextButton = () => {
        cy.get("button[type='button']").click();
    }

    fillEmail = (email) => {
        cy.get(':nth-child(1) > .form-group > .w-full').type(email);
    }

    fillPhone = (phone) => {
        cy.get(':nth-child(2) > .form-group > .w-full').type(phone);
    }

    fillLocation = (location) => {
        cy.get(':nth-child(3) > .form-group > .w-full').type(location);
    }

    clickButton = () => {
        cy.get('[class] .w-full:nth-of-type(2) [type]').click();
       }

       fillCreatePassword = (password) => {
        cy.get(':nth-child(1) > .form-group > .w-full').type(password);
    }

    fillConfirmPassword = (confirmPassword) => {
        cy.get(':nth-child(2) > .form-group > .w-full').type(confirmPassword);
    }

    checkCheckbox = () => {
        cy.get('input[formcontrolname="terms"]').check();
    }

    clickRegisterButton = () => {
        cy.get('.flex > :nth-child(2) > .w-full').click();
    }
}
export default Signup;