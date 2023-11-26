import 'cypress-iframe';

let explore = '';

describe('Add Site', () => {

    beforeEach(()=>{
        // Given: Se generan datos a priori con Mockaroo
        cy.request({
            method: 'GET',
            url: 'https://api.mockaroo.com/api/f6a4da30?count=1&key=13c2cd60'
        }).then((response) => {
            explore = response.body[0];
        })
        // Given: El usuario se autentica en la aplicación
        cy.visit('http://localhost:2368/ghost')
        cy.get('input[name="identification"]').type('da.martin2@uniandes.edu.co');
        cy.get('input[name="password"]').type('L05Am0r35!');
        cy.get('button[type="submit"]').click();
    })

    it('Test that Add Site can be accesed from Dashboard/Explore', () => {
        // Given: El usuario accede al Dashboard
        cy.visit('http://localhost:2368/ghost/#/dashboard').wait(2000);
        //cy.screenshot('explore-3-1-1');
        // When: El usuario encuentra, accede y valida el URL Explore
        cy.get('a[href="javascript:void(0)"]').should('exist');
        cy.get('a[href="javascript:void(0)"]').click();
        cy.url().should('include', '/ghost/#/explore');
        //cy.screenshot('explore-3-1-2').wait(2000);
        // When: El usuario hace click en Add you site
        cy.iframe('explore-frame').find('button[aria-label="Add your site"]').click();
        // When: Se valida el URL de la opción Add your site
        cy.url().should('include', '/connect');
        // Then: Se ingresan los datos de título y descripción
        cy.iframe('explore-frame').find('button[data-test-button="submit-explore"]').click();
        cy.get('input[id="title"]').type(explore.title);
        cy.get('input[id="description"]').type(explore.description);
        cy.iframe('explore-frame').find('button[aria-label="Submit listing & go live →"]').click();
        //cy.screenshot('explore-3-1-3');
    })
    
})