describe('Posts Features', () => {

    beforeEach(()=>{
        cy.visit('http://localhost:2368/ghost')
        cy.get('input[name="identification"]').type('da.martin2@uniandes.edu.co');
        cy.get('input[name="password"]').type('L05Am0r35!');
        cy.get('button[type="submit"]').click();
    })
    
    it('Test that a post is published', () => {
        cy.visit('http://localhost:2368/ghost/#/dashboard');
        cy.get('a[href="#/editor/post/"]').should('exist');
        cy.get('a[href="#/editor/post/"]').click();
        cy.url().should('include', '/ghost/#/editor/post');
        cy.get('.gh-editor-title').should('exist').type('Published Post{enter}');
        cy.get('button[data-test-button="publish-flow"]').click();
        cy.get('button[data-test-button="continue"]').click();
        cy.get('button[data-test-button="confirm-publish"]').click();
    })

    it('Test that a pusblished post is edited', () => {
        cy.visit('http://localhost:2368/ghost/#/dashboard');
        cy.get('a[href="#/posts/?type=published"]').should('exist').click();
        cy.get('h3').then(($header)=>{
            expect($header[0].innerText).to.equal('Published Post')
        }).click();
        cy.get('.settings-menu-toggle[title="Settings"]').click();
        cy.get('.gh-btn[type="button"]').eq(2).click({force: true});
        cy.get('span[data-test-task-button-state="idle"]').click();
    })

})