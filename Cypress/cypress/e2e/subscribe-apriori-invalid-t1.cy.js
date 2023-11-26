import 'cypress-iframe';

let subscribe = '';

before(()=>{
    // Given: Se generan datos a priori con Mockaroo
    cy.request({
        method: 'GET',
        url: 'https://api.mockaroo.com/api/bf818950?count=1&key=13c2cd60'
    }).then((response) => {
        subscribe = response.body[0];
    })
    // Given: El usuario se autentica en la aplicación
    cy.visit('http://localhost:2368/ghost')
    cy.get('input[name="identification"]').type('da.martin2@uniandes.edu.co');
    cy.get('input[name="password"]').type('L05Am0r35!');
    cy.get('button[type="submit"]').click();
})

describe('Subscribe', () => {
    it('Test search content my a specified member', () => {
        // Given: El usuario accede al Dashboard
        cy.visit('http://localhost:2368/ghost/#/dashboard');
        // When: El usuario hace click en View Site
        cy.get('a[href="#/site/"]').should('exist');
        cy.get('a[href="#/site/"]').click();
        // Then: El usuario hace click en campo de búsqueda
        cy.url().should('include', '/ghost/#/site');
        cy.iframe('site-frame ').find('input[type="email"].gh-form-input[data-members-email=""]').click().type(subscribe.email);
    });
});