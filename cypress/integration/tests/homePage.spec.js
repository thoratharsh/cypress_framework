/// <reference types="Cypress" />

import LoginPage from "../pageObjects/loginPage.js"
 
describe("Home page test cases", () => {

    beforeEach(() => {
        cy.login("Admin", "admin123")
    })

    it("Should show all tags on home page", () => {

        cy.get("a#menu_admin_viewAdminModule")
            .should("be.visible")
            .should("have.class", "firstLevelMenu")

        cy.get("a#menu_pim_viewPimModule").should("be.visible", "have.class")
    })

})