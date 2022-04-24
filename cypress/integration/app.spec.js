describe('Navigation', () => {
    it('should navigate to the about page', () => {
      // Start from the index page
      cy.visit('http://localhost:3002/')
      cy.get('button.menu').click()
      // Find a link with an href attribute containing "about" and click it
      cy.get('a[href*="join"]').click()
  
      // The new url should include "/about"
      cy.url().should('include', '/join')
  
      // The new page should contain an h1 with "About page"
      cy.get('section').contains('Join')
    })
  })