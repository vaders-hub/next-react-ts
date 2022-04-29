describe('Navigation', () => {
  it('should navigate to the join page', () => {
    cy.visit('http://localhost:3002/')

    cy.get('button.menu').click()
    cy.get('a[href*="join"]').click()
    cy.url().should('include', '/join')
    cy.get('section').contains('Join')
  })
})
