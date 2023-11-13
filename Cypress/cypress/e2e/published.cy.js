describe('Testing funcionalidad published', () => {
    it('Ingresar credenciales y hacer clic en el botón de inicio de sesión', () => {
      cy.visit('http://localhost:2368/ghost/#/signin');
  
      // Esperar a que la página cargue completamente (reemplaza con un tiempo adecuado)
      cy.wait(7000);
  
      // Rellenar el formulario de inicio de sesión
      cy.get('input[name="identification"]').type('camilopenaflorez@hotmail.com');
      cy.get('input[name="password"]').type('Camilo2307');
  
      // Hacer clic en el botón de inicio de sesión
      cy.get('button:contains("Sign in")').click(); 
      cy.wait(7000);
      cy.get('[title="Drafts"]').click();
      cy.get('a[href="#/editor/post/655106a105dcc051f8a665fe/"').eq(0).click();
      //cy.get('.gh-btn gh-btn-editor darkgrey gh-publish-trigger').click();
      cy.get('[data-test-button="publish-flow"]').click();
      cy.get('[data-test-button="continue"]').click();
      cy.get('[data-test-button="confirm-publish"]').click();
      cy.get('[data-test-button="close-publish-flow"]').click();
      cy.get('[title="Published"]').click();
      cy.get('a[href="#/editor/post/655114fcf53a7563a37c4dcf/"').eq(0).click();
      cy.get('[data-test-button="update-flow"]').click();
      cy.get('[data-test-button="revert-to-draft"]').click();

    });



  });