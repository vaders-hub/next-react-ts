/**
 * Try login
 * @param {string} text
 */
const enterId = (text) => {
  cy.get('input[name*="id"]').type(`${text}{enter}`)
}
const enterPw = (text) => {
  cy.get('input[name*="pw"]').type(`${text}{enter}`)
}

describe('visit login page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3002/login')
  })

  it('enter id and password', () => {
    enterId(Cypress.env('userName'))
    enterPw(Cypress.env('userPassword'))
    
    cy
      .get('main button')
      .click() 
      .request('POST', '/api/members/signin', {
        memid: Cypress.env('userName'),
        mempw: Cypress.env('userPassword'),
      }).then((response) => {
        expect(response.status).to.eq(200)

        cy.window()
          .its('store')
          .invoke('getState')
          .then((state) => {
            expect(state.member.signedIn).equal(true)
          })
      })
  })
})
