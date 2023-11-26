describe('Testing funcionalidad published', () => {


  beforeEach(()=>{
    cy.visit('http://localhost:2368/ghost/#/signin');
    cy.get('input[name="identification"]').clear();
    cy.get('input[name="identification"]').type('camilopenaflorez@hotmail.com');
    cy.get('input[name="password"]').clear();
    cy.get('input[name="password"]').type('Camilo2307');
    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    cy.screenshot('PageL1')

  })

  it('Probar Post Publicados', () => {
    cy.visit('http://localhost:2368/ghost/#/posts?type=draft');
    cy.wait(3000);
    cy.screenshot('PageP1')
    cy.get('a[href="#/editor/post/655a0d44f53a7563a37c4eff/"').eq(0).click();
    cy.wait(3000);
    cy.screenshot('PageP2')
    cy.get('[data-test-button="publish-flow"]').click();
    cy.wait(3000);
    cy.screenshot('PageP3')
    cy.get('[data-test-button="continue"]').click();
    cy.wait(3000);
    cy.screenshot('PageP4')
    cy.get('[data-test-button="confirm-publish"]').click();
    cy.wait(3000);
    cy.screenshot('PageP5')  
    cy.visit('http://localhost:2368/ghost/#/posts?type=published');
    cy.wait(3000);
    cy.screenshot('PageP6')

    })
    it('Borrar Post Publicados', () => {
    cy.visit('http://localhost:2368/ghost/#/posts?type=published');
    cy.wait(3000);
    cy.screenshot('PageB1')
    cy.get('[title="Published"]').click();
    cy.wait(3000);
    cy.screenshot('PageB2')
    cy.get('a[href="#/editor/post/655114fcf53a7563a37c4dcf/"').eq(0).click();
    cy.wait(3000);
    cy.screenshot('PageB3')
    cy.get('[data-test-button="update-flow"]').click();
    cy.wait(3000);
    cy.screenshot('PageB4')
    cy.get('[data-test-button="revert-to-draft"]').click();
    cy.wait(3000);
    cy.screenshot('PageB5')
    cy.visit('http://localhost:2368/ghost/#/posts?type=draft');
    cy.wait(3000);
    cy.screenshot('PageB6')

    })
;



  })

