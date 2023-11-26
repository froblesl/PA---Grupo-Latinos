import {faker} from '@faker-js/faker'

before(()=>{
    // Given: El usuario accede al Dashboard
    cy.visit('http://localhost:2368/ghost')
    cy.get('input[name="identification"]').type(faker.internet.email());
    cy.get('input[name="password"]').type(faker.internet.password());
    cy.get('button[type="submit"]').click();
    //cy.screenshot('view-site-6-0-1');
 })

describe('View Site', () => {
    it('Test search content my a specified member', () => {
        // Given: El usuario accede al Dashboard
        cy.visit('http://localhost:2368/ghost/#/dashboard').wait(2000);
        //cy.screenshot('view-site-6-1-1');
        // When: El usuario hace click en View Site
        cy.get('a[href="#/site/"]').should('exist');
        cy.get('a[href="#/site/"]').click();
        //cy.screenshot('view-site-6-1-2');
        // Then: El usuario hace click en campo de búsqueda
        cy.url().should('include', '/ghost/#/site');
        cy.get('button["data-ghost-search"]').click();
        //cy.screenshot('view-site-6-1-3');
    });
});