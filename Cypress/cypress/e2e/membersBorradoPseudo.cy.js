import {faker} from '@faker-js/faker'

describe('Testing funcionalidad members', () => {
  const numberOfMembers = 2; // Número de miembros aleatorios que se crearán

  const generateRandomMember = () => {
    return {
      name: faker.name.firstName(),
      email: faker.internet.email(),
    };
  };

  const membersData = Array.from({ length: numberOfMembers }, generateRandomMember);

  beforeEach(() => {
    cy.visit('http://localhost:2368/ghost/#/signin');
    //cy.get('input[name="identification"]').clear();
    cy.get('input[name="identification"]').type('camilopenaflorez@hotmail.com');
    //cy.get('input[name="password"]').clear();
    cy.get('input[name="password"]').type('Camilo2307');
    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    cy.screenshot('loginM')
    cy.wait(2000);
  });

  it('Probar la creación de varios miembros', () => {
    cy.visit('http://localhost:2368/ghost/#/members');
    cy.wait(2000);

    membersData.forEach((member, index) => {
      cy.contains('New member').click();
      cy.wait(2000);

      cy.get('input[name="name"]').clear().type(member.name);
      cy.get('input[name="email"]').clear().type(member.email);
      
      cy.wait(2000);
      cy.screenshot(`memberE${index + 1}`);
      
      cy.get('[data-test-button="save"]').click();
      cy.wait(2000);
      cy.get('[data-test-button="member-actions"]').click();
      cy.wait(2000);
    
      cy.get('[data-test-button="delete-member"]').click();
      cy.wait(2000);

      cy.get('[data-test-button="confirm"]').click();
    });
  });
});