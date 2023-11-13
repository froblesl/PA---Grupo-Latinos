describe('Draft Posts Features', () => {

    beforeEach(()=>{
        cy.visit('http://localhost:2368/ghost')
        cy.get('input[name="identification"]').type('da.martin2@uniandes.edu.co');
        cy.get('input[name="password"]').type('L05Am0r35!');
        cy.get('button[type="submit"]').click();
    })
    
    it('Test that a post that is not yet published, would be saved as a draft post', () => {
        cy.visit('http://localhost:2368/ghost/#/dashboard');
        cy.get('a[href="#/editor/post/"]').should('exist');
        cy.get('a[href="#/editor/post/"]').click();
        cy.url().should('include', '/ghost/#/editor/post');
        cy.get('.gh-editor-title').should('exist').type('Draft Post');
        cy.get('a[href="#/posts/"]').eq(0).click();
    })

    it('Test that a draft post would be deleted', () => {
        cy.visit('http://localhost:2368/ghost/#/dashboard');
        cy.get('a[href="#/posts/?type=draft"]').should('exist').click();
        cy.get('h3').then(($header)=>{
            expect($header[0].innerText).to.equal('Draft Post')
        }).click();
        cy.get('.settings-menu-toggle[title="Settings"]').click();
        cy.get('.gh-btn[type="button"]').eq(2).click({force: true});
        cy.get('span[data-test-task-button-state="idle"]').click();
    })

})