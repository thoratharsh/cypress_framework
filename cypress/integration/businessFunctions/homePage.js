import LoginPage from "../pageObjects/loginPage.js" 

class HomePage{

    login(username, password){
        cy.visit()
        cy.get(LoginPage.username())
        .type(username)

        cy.get(LoginPage.password())
        .type(password)

        cy.get(LoginPage.loginButton())
        .click()

        cy.get(LoginPage.homePageLogo())
        .should("be.visible")
        .should("have.class", "firstLevelMenu")
    }

}

module.exports = new HomePage();