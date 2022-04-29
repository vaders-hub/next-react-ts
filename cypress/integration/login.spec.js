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
    enterId('test')
    enterPw('1234')
  })

  it('cy.request() - save response in the shared test context', () => {
    cy.request('POST', '/api/members/signin', {
      memid: 'test',
      mempw: '1234',
    }).then((response) => {
      // expect(response.status).to.eq(200)
      // it('should have the right initial state', () => {
      cy.window()
        .its('store')
        .invoke('getState')
        .its('member.signedIn')
        .should('equal', true)
      // })
    })
  })
})
