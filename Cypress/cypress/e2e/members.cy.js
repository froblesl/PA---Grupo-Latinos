describe('Testing funcionalidad members', () => {


  beforeEach(()=>{
    cy.visit('http://localhost:2368/ghost/#/signin');
    //cy.get('input[name="identification"]').clear();
    cy.get('input[name="identification"]').type('camilopenaflorez@hotmail.com');
    //cy.get('input[name="password"]').clear();
    cy.get('input[name="password"]').type('Camilo2307');
    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    cy.screenshot('loginM')
    cy.wait(2000);

  })

  
  it('Probar la edicion de un member', () => {
    cy.visit('http://localhost:2368/ghost/#/members');
    cy.wait(2000);
    cy.screenshot('memberE1')
    cy.get('a[href="#/members/655a93f0a2ea0066f2a8480b/"]').eq(0).click();
    cy.wait(2000);
    cy.screenshot('memberE2')
    cy.get('input[name="name"]').clear();
    cy.get('input[name="name"]').type('Juan');
    cy.wait(2000);
    cy.screenshot('memberE3')
    cy.get('input[name="email"]').clear();
    cy.get('input[name="email"]').type('Jose@hotmail.com');
    cy.wait(2000);
    cy.screenshot('memberE4')
    cy.get('[data-test-button="save"]').click();
    cy.wait(2000);
    cy.screenshot('memberE5')
  });

  it('Probar el borrado de un member', () => {
    cy.visit('http://localhost:2368/ghost/#/members');
    cy.wait(2000);
    cy.screenshot('memberB1')
    cy.get('a[href="#/members/655a93f0a2ea0066f2a8480b/"]').eq(0).click();
    cy.wait(2000);
    cy.screenshot('memberB2')
    cy.get('[data-test-button="member-actions"]').click();
    cy.wait(2000);
    cy.screenshot('memberB3')
    cy.get('[data-test-button="delete-member"]').click();
    cy.wait(2000);
    cy.screenshot('memberB4')
    cy.get('[data-test-button="confirm"]').click();
    cy.wait(2000);
    cy.screenshot('memberB1')
  });





});