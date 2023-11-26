import {faker} from '@faker-js/faker'

before(()=>{
    // Given: El usuario accede a la aplicación
    cy.visit('http://localhost:2368/ghost')
 })

describe('Login Site', () => {
    it('Test search content my a specified member', () => {
        // When: Se escriben los datos generados aleatoriamente dinámicamente con Faker
        cy.get('input[name="identification"]').type(faker.internet.email());
        cy.get('input[name="password"]').type(faker.internet.password());
        // Then: Se hace click en Sign in
        cy.get('button[type="submit"]').click();        
    });
});