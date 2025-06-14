import { LoginPage } from './page-objects/login.page'

// Login page actions
Cypress.Commands.add('enterUsername', (username) => {
  cy.get(LoginPage.selectors.username).type(username)
})

Cypress.Commands.add('enterPassword', (password) => {
  cy.get(LoginPage.selectors.password).type(password)
})

Cypress.Commands.add('clickLoginButton', () => {
  cy.get(LoginPage.selectors.loginButton).click()
})

Cypress.Commands.add('login', (username, password) => {
  cy.enterUsername(username)
  cy.enterPassword(password)
  cy.clickLoginButton()
})

// Verification actions
Cypress.Commands.add('verifySuccessfulLogin', () => {
  cy.url().should('include', LoginPage.urls.inventory)
  cy.get(LoginPage.selectors.title).should('have.text', LoginPage.texts.productsTitle)
})

Cypress.Commands.add('verifyLoginError', (errorMessage) => {
  cy.get(LoginPage.selectors.errorMessage)
    .should('be.visible')
    .and('contain.text', errorMessage)
})