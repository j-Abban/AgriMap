//Seller Registration Page Actions

class RegistrationPage {
    visit = () => {
        cy.visit('/auth/seller-signup');
    }

    fillFirstName = (userfirstname) => {
        cy.get(':nth-child(1) > .form-group > .w-full').type(userfirstname);
    }

    fillLastName =(userlastname) => {
        cy.get(':nth-child(2) > .form-group > .w-full').type(userlastname);
    }

    fillEmail = (email) => {
        cy.get(':nth-child(3) > .form-group > .w-full').type(email);
    }

    clickNextButton = () => {
        cy.get('button').click();
    }

    fillLocation = (location) => {
        cy.get(':nth-child(1) > .form-group > .w-full').type(location);
    }

    fillPhone = (phone) => {
        cy.get(':nth-child(2) > .form-group > .w-full').type(phone);
    }

    fillOrganization = (Organization) => {
    cy.get(':nth-child(3) > .form-group > .w-full').type(Organization);
    }

   clickButton = () => {
    cy.get('.flex > :nth-child(2) > .w-full').click();
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

export default RegistrationPage;