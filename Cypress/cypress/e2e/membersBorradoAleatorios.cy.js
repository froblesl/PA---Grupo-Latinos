import {faker} from '@faker-js/faker'

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

  
  it('Probar la creación de un member con faker 1', () => {
    cy.visit('http://localhost:2368/ghost/#/members');
    cy.wait(2000);
    cy.screenshot('memberE1')
    cy.contains('New member').click();
    cy.wait(2000);
    cy.screenshot('memberE2')
    cy.get('input[name="name"]').clear();
    cy.get('input[name="name"]').should('exist').should('be.visible').type(faker.name.firstName());
    cy.wait(2000);
    cy.screenshot('memberE3')
    cy.get('input[name="email"]').clear();
    cy.get('input[name="email"]').should('exist').should('be.visible').type(faker.internet.email());
    cy.wait(2000);
    cy.screenshot('memberE4')
    cy.get('[data-test-button="save"]').click();
    cy.wait(2000);
    cy.screenshot('memberE5')
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

  it('Probar la creación de un member con faker 1', () => {
    cy.visit('http://localhost:2368/ghost/#/members');
    cy.wait(2000);
    cy.screenshot('memberE1')
    cy.contains('New member').click();
    cy.wait(2000);
    cy.screenshot('memberE2')
    cy.get('input[name="name"]').clear();
    cy.get('input[name="name"]').should('exist').should('be.visible').type(faker.name.firstName());
    cy.wait(2000);
    cy.screenshot('memberE3')
    cy.get('input[name="email"]').clear();
    cy.get('input[name="email"]').should('exist').should('be.visible').type(faker.internet.email());
    cy.wait(2000);
    cy.screenshot('memberE4')
    cy.get('[data-test-button="save"]').click();
    cy.wait(2000);
    cy.screenshot('memberE5')
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

  it('Probar la creación de un member con faker 1', () => {
    cy.visit('http://localhost:2368/ghost/#/members');
    cy.wait(2000);
    cy.screenshot('memberE1')
    cy.contains('New member').click();
    cy.wait(2000);
    cy.screenshot('memberE2')
    cy.get('input[name="name"]').clear();
    cy.get('input[name="name"]').should('exist').should('be.visible').type(faker.name.firstName());
    cy.wait(2000);
    cy.screenshot('memberE3')
    cy.get('input[name="email"]').clear();
    cy.get('input[name="email"]').should('exist').should('be.visible').type(faker.internet.email());
    cy.wait(2000);
    cy.screenshot('memberE4')
    cy.get('[data-test-button="save"]').click();
    cy.wait(2000);
    cy.screenshot('memberE5')
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