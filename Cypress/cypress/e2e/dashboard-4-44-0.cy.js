describe('Dashboard Features', () => {

    beforeEach(()=>{
        // Given: El usuario se autentica en la aplicación
        cy.visit('http://localhost:3001/ghost')
        cy.get('input[name="identification"]').type('da.martin2@uniandes.edu.co');
        cy.get('input[name="password"]').type('L05Am0r35!');
        cy.get('button[type="submit"]').click();
        cy.screenshot('dashboard-4-44-0-1-0-1').wait(2000);
    })

    it('Test that members count is equal to current members on the dashboard', () => {
        // Given: El usuario accede al Dashboard
        cy.visit('http://localhost:3001/ghost/#/dashboard').wait(2000);
        cy.screenshot('dashboard-4-44-0-1-1-1');
        // When: El elemento span value refleja la cantidad de miembros
        cy.get('.data-container .data').invoke('text').then((membersCount) => {
             // Then: La candidad de miembros debe ser igual a "2"
             expect(membersCount).to.equal("200%");
        })
        cy.screenshot('dashboard-4-44-0-1-1-2');
    })

    it('Test that All Posts can be viewed on the dashboard', () => {
        // When: El usuario accede al Dashboard
        cy.visit('http://localhost:3001/ghost/#/dashboard');
        cy.screenshot('dashboard-4-44-0-1-2-1').wait(2000);
        // Then: El URL asociado al link All Posts existe, se hace click en él y el URL final de la página All Posts contiene el link correspondiente 
        cy.get('a[href="#/posts/"]').should('exist');
        cy.get('a[href="#/posts/"]').click({multiple:true, force:true});
        cy.url().should('include', '/ghost/#/posts');
        cy.screenshot('dashboard-4-44-0-1-2-2');
    })

})