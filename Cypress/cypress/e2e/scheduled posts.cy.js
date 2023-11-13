describe('Scheduled Posts Features', () => {

    beforeEach(()=>{
        cy.visit('http://localhost:2368/ghost')
        cy.get('input[name="identification"]').type('da.martin2@uniandes.edu.co');
        cy.get('input[name="password"]').type('L05Am0r35!');
        cy.get('button[type="submit"]').click();
    })
    
    it('Test the scheduling of a post publishing', () => {
        cy.visit('http://localhost:2368/ghost/#/dashboard');
        cy.get('a[href="#/posts/?type=scheduled"]').should('exist').click();
        cy.get('a[href="#/editor/post/"][class="ember-view gh-btn gh-btn-primary"]').should('exist').click();
        cy.get('.gh-editor-title').should('exist').type('Scheduled Post{enter}');
        cy.get('button[data-test-button="publish-flow"]').click();
        cy.get('.gh-publish-setting-trigger').click({ multiple: true });
    })

    it('Test change of scheduling of a post', () => {
        cy.visit('http://localhost:2368/ghost/#/dashboard');
        cy.get('a[href="#/posts/?type=scheduled"]').should('exist').click();
        cy.get('h3').then(($header)=>{
            expect($header[0].innerText).to.equal('Scheduled Post')
        }).click();
        cy.get('button[data-test-button="update-flow"]').click();
        cy.get('button[data-test-button="revert-to-draft"]').click();
    })

})