describe('Saucelabs Demo Login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('should login successfully with standard user', () => {
    cy.login(Cypress.env('STANDARD_USER'), Cypress.env('PASSWORD'))
    cy.verifySuccessfulLogin()
  })

  it('should show error for locked out user', () => {
    cy.login(Cypress.env('LOCKED_OUT_USER'), Cypress.env('PASSWORD'))
    cy.verifyLoginError('Sorry, this user has been locked out')
  })
})