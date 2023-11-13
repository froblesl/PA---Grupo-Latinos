describe('Dashboard Features', () => {

    beforeEach(()=>{
        cy.visit('http://localhost:2368/ghost')
        cy.get('input[name="identification"]').type('da.martin2@uniandes.edu.co');
        cy.get('input[name="password"]').type('L05Am0r35!');
        cy.get('button[type="submit"]').click();
    })
    
    it('Test that members count is equal to current members on the dashboard', () => {
        cy.visit('http://localhost:2368/ghost/#/dashboard');
        cy.get('.gh-dashboard-metric.is-large .gh-dashboard-metric-value .value').invoke('text').then((membersCount) => {
            cy.log('Members:', membersCount);
            //expect("2").to.equal("2");
            expect(membersCount).to.equal("2");
        })
    })

    it('Test that All Posts can be viewed on the dashboard', () => {
        cy.visit('http://localhost:2368/ghost/#/dashboard');
        cy.get('a[href="#/posts/"]').should('exist');
        cy.get('a[href="#/posts/"]').click();
        cy.url().should('include', '/ghost/#/posts');
    })

})