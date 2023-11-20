describe('Draft Posts Features', () => {

    beforeEach(()=>{
        // Given: El usuario se autentica en la aplicación
        cy.visit('http://localhost:2368/ghost')
        cy.get('input[name="identification"]').type('da.martin2@uniandes.edu.co');
        cy.get('input[name="password"]').type('L05Am0r35!');
        cy.get('button[type="submit"]').click();
        cy.screenshot('draft-posts-2-0-1').wait(2000);
    })

    it('Test that a post that is not yet published would be saved as a draft post', () => {
        // Given: El usuario accede al Dashboard
        cy.visit('http://localhost:2368/ghost/#/dashboard').wait(2000);
        cy.screenshot('draft-posts-2-1-1'); 
        // When: El usuario hace clic para crear un nuevo post
        cy.get('a[href="#/editor/post/"]').should('exist')
          .then(() => {
            cy.get('a[href="#/editor/post/"]').click();
          })
          .then(() => {
            cy.screenshot('draft-posts-2-1-2');      
            // Then: El editor se abre, se escribe Draft Post en el título y se regresa al listado de posts para verificar que quede grabado
            cy.url().should('include', '/ghost/#/editor/post');
            cy.get('.gh-editor-title').should('exist').type('Draft Post{enter}');
          })
          .then(() => {
            cy.visit('http://localhost:2368/ghost/#/posts/');
            cy.screenshot('draft-posts-2-1-3');
          });
      })

    it('Test that a draft post would be deleted', () => {
        // Given: El usuario accede al Dashboard
        cy.visit('http://localhost:2368/ghost/#/dashboard').wait(2000);
        cy.screenshot('draft-posts-2-2-1');
        // When: El usuario accede a Draft Posts y encuentra un post con el título Draft Post
        cy.get('a[href="#/posts/?type=draft"]').should('exist').click();
        cy.screenshot('draft-posts-2-2-2').wait(2000);
        cy.get('h3').then(($header)=>{
            expect($header[0].innerText).to.equal('Draft Post')
        }).click();
        cy.screenshot('draft-posts-2-2-3').wait(2000);
         // Then: El usuario despliega el menú de configuraciones y borra el post
        cy.get('.settings-menu-toggle[title="Settings"]').click();
        cy.get('.gh-btn[type="button"]').eq(2).click();
        cy.get('span[data-test-task-button-state="idle"]').click();
        cy.screenshot('draft-posts-2-2-4');
    })

})