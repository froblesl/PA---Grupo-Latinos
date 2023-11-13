describe('Testing funcionalidad members', () => {
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
      cy.get('a[href="#/members/"]').eq(0).click();
      cy.get('a[href="#/members/6550691005dcc051f8a66505/"').eq(0).click();
      cy.get('input[name="name"]').type('Jose');
      cy.get('input[name="email"]').type('Jose@hotmail.com');
      cy.get('[data-test-button="publish-save"]').click();
      cy.get('.gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.open').click();
      cy.get('.mr2').click();
      cy.get('[data-test-button="confirm"]').click();
    });



  });