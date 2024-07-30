// User Profile Page Actions

class Update{
    clickUserProfile = ()  => {
        cy.get(":nth-child(2) > .ng-star-inserted > .nav-item").click();
    };

    clickOnEdit = () => {
    cy.get('.left-content > [tabindex="1"]').click();
    };

    inputFirstName = (firstName) => {
        cy.get(':nth-child(1) > .form-group > .w-full').clear().type(firstName);
    };

    inputLastName = (lastName) => {
        cy.get(':nth-child(2) > .form-group > .w-full').clear().type(lastName);
    };

    inputPhone = (phone) => {
        cy.get(':nth-child(3) > .form-group > .w-full').clear().type(phone)
    }

    inputOrganizationName = (OrganizationName) => {
        cy.get(':nth-child(4) > .form-group > .w-full').clear().type(OrganizationName)
    };

    clickSaveChanges = () => {
        cy.get('.bottom-section > .bg-primary-100').click();
    }
    successfulUpdate= (message) => {
        cy.get('.toast-message').should('contain.text', message);
    }
}

export default Update;