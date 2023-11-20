describe('Posts Features', () => {

    beforeEach(()=>{
        // Given: El usuario se autentica en la aplicación
        cy.visit('http://localhost:2368/ghost')
        cy.get('input[name="identification"]').type('da.martin2@uniandes.edu.co');
        cy.get('input[name="password"]').type('L05Am0r35!');
        cy.get('button[type="submit"]').click();
        cy.screenshot('posts-4-0-1');
    })
    
    it('Test that a post is published', () => {
        // Given: El usuario accede al Dashboard
        cy.visit('http://localhost:2368/ghost/#/dashboard').wait(2000);
        cy.screenshot('posts-4-1-1');
        // When: El usuario hace clic para crear un nuevo post
        cy.get('a[href="#/editor/post/"]').should('exist');
        cy.get('a[href="#/editor/post/"]').click();
        cy.screenshot('posts-4-1-2');
        // Then: El editor se abre, se escribe Published Post en el título y se publica el post
        cy.url().should('include', '/ghost/#/editor/post');
        cy.get('.gh-editor-title').should('exist').type('Published Post{enter}');
        cy.get('button[data-test-button="publish-flow"]').click();
        cy.get('button[data-test-button="continue"]').click();
        cy.get('button[data-test-button="confirm-publish"]').click();
        cy.screenshot('posts-4-1-3');
    })

    it('Test that a pusblished post is edited', () => {
        // Given: El usuario accede al Dashboard
        cy.visit('http://localhost:2368/ghost/#/dashboard').wait(2000);
        cy.screenshot('posts-4-2-1');
        // When: El usuario verifica que exista un post publicado con el nombre Published Post
        cy.get('a[href="#/posts/?type=published"]').should('exist').click();
        cy.get('h3').then(($header)=>{
            expect($header[0].innerText).to.equal('Published Post')
        }).click();
        cy.screenshot('posts-4-2-2');
        // Then: El usuario edita un campo del post y este se guarda
        cy.get('.settings-menu-toggle[title="Settings"]').click();
        cy.get('.gh-btn[type="button"]').eq(2).click({force: true});
        cy.get('span[data-test-task-button-state="idle"]').click();
        cy.screenshot('posts-4-2-3');
    })

})