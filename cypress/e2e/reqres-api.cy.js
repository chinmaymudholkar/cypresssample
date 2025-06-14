describe('Reqres API Tests', () => {
    const BASE_URL = 'https://reqres.in/api'
  
    beforeEach(() => {
      cy.wait(1000) // Wait for 1 second before each test
    })
  
    it('should get list of users with exact pagination details', () => {
      cy.request({
        method: 'GET',
        url: `${BASE_URL}/users?page=2`,
        headers: {
          'x-api-key': Cypress.env('API_KEY'),
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.deep.include({
          page: 2,
          per_page: 6,
          total: 12,
          total_pages: 2
        })
        
        // Verify first user in the list
        expect(response.body.data[0]).to.deep.include({
          id: 7,
          email: 'michael.lawson@reqres.in',
          first_name: 'Michael',
          last_name: 'Lawson',
          avatar: 'https://reqres.in/img/faces/7-image.jpg'
        })
      })
    })
  
    it('should get single user with exact details', () => {
      const userId = 2
      cy.request({
        method: 'GET',
        url: `${BASE_URL}/users/${userId}`,
        headers: {
          'x-api-key': Cypress.env('API_KEY'),
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.data).to.deep.include({
          id: 2,
          email: 'janet.weaver@reqres.in',
          first_name: 'Janet',
          last_name: 'Weaver',
          avatar: 'https://reqres.in/img/faces/2-image.jpg'
        })
      })
    })
  
    it('should get list of resources with exact values', () => {
      cy.request({
        method: 'GET',
        url: `${BASE_URL}/unknown`,
        headers: {
          'x-api-key': Cypress.env('API_KEY'),
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.deep.include({
          page: 1,
          per_page: 6,
          total: 12,
          total_pages: 2
        })
  
        // Verify first resource
        expect(response.body.data[0]).to.deep.include({
          id: 1,
          name: 'cerulean',
          year: 2000,
          color: '#98B2D1',
          pantone_value: '15-4020'
        })
      })
    })
  
    it('should get single resource with exact details', () => {
      const resourceId = 2
      cy.request({
        method: 'GET',
        url: `${BASE_URL}/unknown/${resourceId}`,
        headers: {
          'x-api-key': Cypress.env('API_KEY'),
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.data).to.deep.include({
          id: 2,
          name: 'fuchsia rose',
          year: 2001,
          color: '#C74375',
          pantone_value: '17-2031'
        })
      })
    })
  
    it('should handle user not found with exact error response', () => {
      cy.request({
        method: 'GET',
        url: `${BASE_URL}/users/23`,
        headers: {
          'x-api-key': Cypress.env('API_KEY'),
          'Content-Type': 'application/json'
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404)
        expect(response.body).to.deep.equal({})
      })
    })
  
    it('should get delayed response with exact pagination details', () => {
      cy.request({
        method: 'GET',
        url: `${BASE_URL}/users?delay=3`,
        headers: {
          'x-api-key': Cypress.env('API_KEY'),
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.deep.include({
          page: 1,
          per_page: 6,
          total: 12,
          total_pages: 2
        })
      })
    })
})