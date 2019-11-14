// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login',(userName,password)=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    
    cy.get("#divUsername input")
    .type("Admin")

    cy.get("#divPassword input")
    .type("admin123")

    cy.get("input#btnLogin")
    .click()

    cy.get("#branding").should("be.visible")

    cy.url().should("include","opensource-demo.orangehrmlive.com/")
});
