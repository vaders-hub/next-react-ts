/**
 * Access store
 * @param {string} text
 */

describe('visit root page', () => {
  it('should load without crashing', function () {
    cy.visit('http://localhost:3002')
  })

  it('should have the right initial state', function () {
    cy.window()
      .its('store')
      .invoke('getState')
      .its('member.signedIn')
      .should('equal', false)
  })
})
