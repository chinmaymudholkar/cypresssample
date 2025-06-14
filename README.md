# Cypress API Testing Sample Project

This project demonstrates automated API testing using Cypress, featuring tests for the ReqRes.in demo API and Sauce Labs demo site.

## Features

- API Testing Suite for ReqRes.in
  - User management endpoints
  - Resource management endpoints
  - Error handling scenarios
  - Delayed response testing
- UI Testing Suite for Sauce Labs Demo
  - Login functionality
  - Error handling
  - Page Object Model implementation

## Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Create `cypress.env.json` file in the project root:
   ```json
   {
     "STANDARD_USER": "standard_user",
     "LOCKED_OUT_USER": "locked_out_user",
     "PASSWORD": "secret_sauce",
     "API_KEY": "reqres-free-v1"
   }
   ```

## Running Tests

### Run all tests
```bash
npm run cypress:run
```

### Open Cypress Test Runner
```bash
npm run cypress:open
```

### Run specific test file
```bash
npm run cypress:run --spec "cypress/e2e/reqres-api.cy.js"
```

## Test Structure

### API Tests (reqres-api.cy.js)
- List users with pagination
- Get single user details
- List resources
- Get single resource
- Handle user not found
- Test delayed responses

### UI Tests (saucelabs-login.cy.js)
- Successful login
- Locked out user error

## Best Practices Implemented

1. Page Object Pattern
2. Custom Commands
3. Environment Variables
4. API Headers Management
5. Consistent Wait Strategy
6. Error Handling
7. Detailed Assertions

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.