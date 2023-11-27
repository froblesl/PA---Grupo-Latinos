

describe('Testing funcionalidad members', () => {


  beforeEach(()=>{
    cy.fixture('members').as('membersData');
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

  
  it('Probar la creación de un member con datos del fixture', function() {
    cy.visit('http://localhost:2368/ghost/#/members');
    cy.wait(2000);
    cy.screenshot('memberE1')
    cy.contains('New member').click();
    cy.wait(2000);
    cy.screenshot('memberE2')
    cy.get('@membersData').then((membersData) => {
      const randomMember = membersData.members[0]; // Acceder a un miembro del fixture

      cy.get('input[name="name"]').clear().type(randomMember.name);
      cy.wait(2000);
      cy.screenshot('memberE3');
      cy.get('input[name="email"]').clear().type(randomMember.email);
      cy.wait(2000);
      cy.screenshot('memberE4');
      cy.get('[data-test-button="save"]').click();
      cy.wait(2000);
      cy.screenshot('memberE5');
    });

  });

  it('Probar la creación de un member con datos del fixture', function() {
    cy.visit('http://localhost:2368/ghost/#/members');
    cy.wait(2000);
    cy.screenshot('memberE1')
    cy.contains('New member').click();
    cy.wait(2000);
    cy.screenshot('memberE2')
    cy.get('@membersData').then((membersData) => {
      const randomMember = membersData.members[1]; 

      cy.get('input[name="name"]').clear().type(randomMember.name);
      cy.wait(2000);
      cy.screenshot('memberE3');
      cy.get('input[name="email"]').clear().type(randomMember.email);
      cy.wait(2000);
      cy.screenshot('memberE4');
      cy.get('[data-test-button="save"]').click();
      cy.wait(2000);
      cy.screenshot('memberE5');
    });

  });



  





});