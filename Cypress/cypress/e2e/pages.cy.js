describe('Testing funcionalidad pages', () => {


  beforeEach(()=>{
    cy.visit('http://localhost:2368/ghost/#/signin');
    cy.get('input[name="identification"]').clear();
    cy.get('input[name="identification"]').type('camilopenaflorez@hotmail.com');
    cy.get('input[name="password"]').clear();
    cy.get('input[name="password"]').type('Camilo2307');
    cy.get('button[type="submit"]').click();
    cy.wait(2000);
    cy.screenshot('loginPA')
    cy.wait(2000);

  })
  it('Crear una pagina', () => {
      cy.visit('http://localhost:2368/ghost/#/pages');
      cy.wait(2000);
      cy.screenshot('PageC1')
      cy.get('a[href="#/editor/page/"]').eq(0).click();
      cy.wait(2000);
      cy.screenshot('PageC2')
      cy.get('textarea[tabindex="1"]').type('Algun dia');
      cy.wait(2000);
      cy.screenshot('PageC3')
      cy.get('p[data-koenig-dnd-droppable="true"]').type('Algun dia');
      cy.wait(2000);
      cy.screenshot('PageC4')
      cy.get('[data-test-button="publish-flow"]').click();
      cy.wait(2000);
      cy.screenshot('PageC5')
      cy.get('[data-test-button="continue"]').click();
      cy.wait(2000);
      cy.screenshot('PageC6')
      cy.get('[data-test-button="confirm-publish"]').click();
      cy.wait(2000);
      cy.screenshot('PageC7')
      cy.get('[data-test-button="close-publish-flow"]').click();
      cy.wait(2000);
      cy.screenshot('PageC8')


  })

  it('Despublicar una pagina', () => {
      cy.visit('http://localhost:2368/ghost/#/pages');
      cy.wait(2000);
      cy.screenshot('PageD1')
      cy.get('a[href="#/editor/page/655a9632a2ea0066f2a84834/"]').eq(0).click();
      cy.wait(2000);
      cy.screenshot('PageD2')
      
      cy.get('[data-test-button="update-flow"]').click();
      cy.wait(2000);
      cy.screenshot('PageD3')
      cy.get('[data-test-button="revert-to-draft"]').click();
      cy.wait(2000);
      cy.screenshot('PageD4')




      
    })


  })


  