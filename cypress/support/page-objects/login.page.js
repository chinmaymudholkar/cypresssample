export const LoginPage = {
  selectors: {
    username: '[data-test="username"]',
    password: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
    errorMessage: '[data-test="error"]',
    title: '.title'
  },
  
  urls: {
    inventory: '/inventory.html'
  },
  
  texts: {
    productsTitle: 'Products'
  }
}