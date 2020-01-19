
describe('Actions', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
    })
  
    it('should able to login to orangehrms', () => {
        cy.get("#divUsername input")
        .type("Admin")

        cy.get("#divPassword input")
        .type("admin123")

        cy.get("input#btnLogin")
        .click()

        cy.get("#branding").should("be.visible")

        cy.url().should("include","opensource-demo.orangehrmlive.com/")
    })

    it('Should not able to login if invalid credentials', () => {
        cy.get("#divUsername input")
        .type("Admin")

        cy.get("#divPassword input")
        .type("admin1234")

        cy.get("input#btnLogin")
        .click()

        cy.get("#branding").should("not.be.visible")

        cy.get("span#spanMessage").should("have.text","Invalid credentials")
    })

    it("Should able to logout from crm", () => {

      cy.login("Admin", "admin123")
      
      cy.get("#welcome").should("be.visible").should("have.text","Welcome Admin").click()

      cy.get("#welcome-menu > ul > li:nth-child(2) > a").should("be.visible").click()

      cy.get("#txtUsername").should("be.visible")

  })

  })
  