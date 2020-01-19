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

        cy.get("#menu_pim_viewPimModule").should("be.visible").should("have.text","PIM")

        cy.get("#menu_leave_viewLeaveModule").should("be.visible").should("have.text","Leave")
       
        cy.get("#menu_time_viewTimeModule").should("be.visible").should("have.text","Time")

        cy.get("#menu_recruitment_viewRecruitmentModule").should("be.visible").should("have.text","Recruitment")


    })

})