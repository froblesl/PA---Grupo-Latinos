before(()=>{
    cy.visit('http://localhost:2368/ghost')
    cy.get('input[name="identification"]').type('da.martin2@uniandes.edu.co');
    cy.get('input[name="password"]').type('L05Am0r35!');
    cy.get('button[type="submit"]').click();
 })

describe('View Site', () => {
    it('Test search content my a specified member', () => {
        cy.visit('http://localhost:2368/ghost/#/dashboard');
        cy.get('a[href="#/site/"]').should('exist');
        cy.get('a[href="#/site/"]').click();
        cy.url().should('include', '/ghost/#/site');
        cy.get('button["data-ghost-search"]').click();
    });
});