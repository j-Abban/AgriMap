/// <reference types="cypress"/>
//User Profile

import Update from "../../PageObjects/PageActions/UserProfile"

describe('User Profile Page', () => {
const update = new Update;

it('should view and edit use details', () => {
 update.visit();
 update.clickOnEdit();
 update.inputFirstName();
 update.inputLastName();
 update.inputPhone();
 update.inputOrganizationName();
 update.clickSaveChanges();
})
})