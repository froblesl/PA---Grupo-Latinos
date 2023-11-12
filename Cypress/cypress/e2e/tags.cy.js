describe('Testing funcionalidad tags', () => {
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
      cy.get('a[href="#/tags/"]').click();
      cy.wait(7000);
      cy.get('a[href="#/tags/new/"').click();
      cy.get('input[name="name"]').type('Colombia');
      cy.get('button:contains("Save")').click();
      cy.wait(7000);
      cy.get('a[href="#/posts/"]').eq(0).click();
      cy.get('a[href="#/editor/post/6550649705dcc051f8a6632a/"').click();
      cy.get('.settings-menu-toggle').click();
      cy.get('.ember-power-select-multiple-trigger').eq(0).click();
      cy.get('.ember-power-select-option').should('be.visible');
      cy.contains('.ember-power-select-option', 'Colombia').click();
      cy.get('.settings-menu-toggle').click();
      cy.get('[data-test-button="publish-save"]').click();
      cy.get('a[href="#/posts/"]').eq(0).click();
      cy.get('a[href="#/tags/"]').click();
      cy.get('a[title="Edit tag"]').eq(0).click();
      cy.get('.gh-btn.gh-btn-red.gh-btn-icon').click();
      cy.get('[data-test-button="confirm"]').click();
    });



  });