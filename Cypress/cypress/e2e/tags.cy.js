describe('Testing funcionalidad tags', () => {


  beforeEach(()=>{
    cy.visit('http://localhost:2368/ghost/#/signin');
    //cy.get('input[name="identification"]').clear();
    cy.get('input[name="identification"]').type('camilopenaflorez@hotmail.com');
    //cy.get('input[name="password"]').clear();
    cy.get('input[name="password"]').type('Camilo2307');
    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    cy.screenshot('loginT')
    cy.wait(2000);

  })

  it('Probar la creacion de un tag', () => {
    cy.visit('http://localhost:2368/ghost/#/tags');
    cy.wait(2000);
    cy.screenshot('tagC1')
    cy.get('a[href="#/tags/new/"').click();
    cy.wait(2000);
    cy.screenshot('tagC2')
    cy.get('input[name="name"]').type('Colombia1');
    cy.wait(2000);
    cy.screenshot('tagC3')
    cy.get('[data-test-button="save"]').click();
    cy.wait(2000);
    cy.screenshot('tagC4')
  })

  it('Probar la asignacion de un tag', () => {    
    cy.visit('http://localhost:2368/ghost/#/posts');
    cy.wait(2000);
    cy.screenshot('tagA1')
    cy.get('a[href="#/editor/post/655106a105dcc051f8a665fe/"').click();
    cy.wait(2000);
    cy.screenshot('tagA2')
    cy.get('.settings-menu-toggle').click();
    cy.wait(2000);
    cy.screenshot('tagA3')
    cy.get('.ember-power-select-multiple-trigger').eq(0).click();
    cy.wait(2000);
    cy.screenshot('tagA4')
    cy.get('.ember-power-select-option').should('be.visible');
    cy.wait(2000);
    cy.screenshot('tagA5')
    cy.contains('.ember-power-select-option', 'Colombia1').click();
    cy.wait(2000);
    cy.screenshot('tagA6')
    cy.get('.settings-menu-toggle').click();
    cy.wait(2000);
    cy.screenshot('tagA7')
    cy.get('[data-test-button="publish-save"]').click();
    cy.wait(2000);
    cy.screenshot('tagA8')
    cy.visit('http://localhost:2368/ghost/#/posts');
    cy.wait(2000);
    cy.screenshot('tagA9')
    })

  it('Probar la eliminación de un tag', () => {  
    cy.visit('http://localhost:2368/ghost/#/tags');
    cy.wait(2000);
    cy.screenshot('tagE1')
      cy.get('a[title="Edit tag"]').eq(0).click();
      cy.wait(2000);
      cy.screenshot('tagE2')
      cy.get('[data-test-button="delete-tag"]').scrollIntoView()
      cy.wait(2000);
      cy.screenshot('tagE3')
      cy.get('[data-test-button="delete-tag"]').click();
      cy.wait(2000);
      cy.screenshot('tagE4')
      //cy.get('[data-test-button="confirm"]').click();
    });

  })


  