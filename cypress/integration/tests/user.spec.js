
describe('Actions', () => {
    beforeEach(() => {
      cy.login("Admin", "admin123")
    })

    it("Should able to search users",() => {

      cy.get("#menu_admin_viewAdminModule").should("be.visible").click()

      cy.get("#searchSystemUser_userName").type("Admin")

      cy.get("#searchBtn").click()

      cy.get("#resultTable tbody tr").should("have.length",1)

    });

    
  
  })
  