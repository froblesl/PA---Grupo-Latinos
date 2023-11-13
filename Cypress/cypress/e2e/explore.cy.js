describe('Add Site', () => {

    beforeEach(()=>{
        cy.visit('http://localhost:2368/ghost')
        cy.get('input[name="identification"]').type('da.martin2@uniandes.edu.co');
        cy.get('input[name="password"]').type('L05Am0r35!');
        cy.get('button[type="submit"]').click();
    })

    it('Test that Add Site can be accesed from Dashboard/Explore', () => {
        cy.visit('http://localhost:2368/ghost/#/dashboard');
        cy.get('a[href="javascript:void(0)"]').should('exist');
        cy.get('a[href="javascript:void(0)"]').click();
        cy.url().should('include', '/ghost/#/explore');
        cy.wait(5000);
        //cy.get('button[type="button"][aria-label="Add your site"]').click();
        //cy.get('button[type="button"]').eq(0).click();
        cy.contains('button', 'Add your site').click();
        cy.url().should('include', '/connect');
    })
    
})