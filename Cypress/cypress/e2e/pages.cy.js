describe('Testing funcionalidad pages', () => {
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
      cy.get('a[href="#/pages/"]').eq(0).click();
      cy.get('a[href="#/editor/page/"]').eq(0).click();
      cy.get('textarea[tabindex="1"]').type('Jose');
      cy.get('p[data-koenig-dnd-droppable="true"]').type('Jose');
      cy.get('[data-test-button="publish-flow"]').click();
      cy.get('[data-test-button="continue"]').click();
      cy.get('[data-test-button="confirm-publish"]').click();
      cy.get('[data-test-button="close-publish-flow"]').click();
      cy.get('a[href="#/pages/"]').eq(0).click();
      cy.get('a[href="#/editor/page/65512116f53a7563a37c4e65/"]').eq(0).click();
      cy.get('[data-test-button="update-flow"]').click();
      cy.get('[data-test-button="revert-to-draft"]').click();
      cy.get('[title="Close"]').click();



      
    });



  });