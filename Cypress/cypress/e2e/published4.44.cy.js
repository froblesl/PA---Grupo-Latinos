describe('Testing funcionalidad Published en ghost2', () => {


    beforeEach(()=>{
      cy.visit('http://localhost:3002/ghost/#/signin');
      cy.get('input[name="identification"]').clear();
      cy.get('input[name="identification"]').type('camilopenaflorez@hotmail.com');
      cy.get('input[name="password"]').clear();
      cy.get('input[name="password"]').type('Camilo2307');
      cy.get('button[type="submit"]').click();
      cy.wait(2000);
      cy.screenshot('PageL1')
  
    })
  
    it('Probar Post Publicados', () => {
      cy.visit('http://localhost:3002/ghost/#/posts?type=draft');
      cy.wait(3000);
      cy.screenshot('PageP1')
      cy.get('a[href="#/editor/post/655a9a851ba42000017d436d/"').eq(0).click();
      cy.wait(3000);
      cy.screenshot('PageP2')
      cy.get('.gh-publishmenu.ember-view').contains('Publish').click();
      cy.wait(3000);
      cy.screenshot('PageP3')
      cy.get('.gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view').contains('Publish').click();
      cy.wait(3000);
      cy.screenshot('PageP4')
      cy.get('.gh-btn gh-btn-black gh-btn-icon ember-view').contains('Publish').click();
      cy.wait(3000);
      cy.screenshot('PageP5')  
      cy.visit('http://localhost:3002/ghost/#/posts?type=draft');
      cy.wait(3000);
      cy.screenshot('PageP6')
  
      })
      it('Borrar Post Publicados', () => {
      cy.visit('http://localhost:3002/ghost/#/posts?type=published');
      cy.wait(3000);
      cy.screenshot('PageB1')
      cy.get('a[href="#/editor/post/655a9a851ba42000017d436d/"').eq(0).click();
      cy.wait(3000);
      cy.screenshot('PageB3')
      cy.get('.ember-view ember-basic-dropdown-triggergh-btn gh-btn-editor green gh-publishmenu-trigger').contains('Update').click();
      cy.wait(3000);
      cy.screenshot('PageB4')
      cy.get('.gh-publishmenu-radio.active > .gh-publishmenu-radio-button').click();
      cy.wait(3000);
      cy.screenshot('PageB5')
      cy.get('.gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view').contains('Unpublish').click();
      cy.wait(3000);
      cy.screenshot('PageB5')
      cy.visit('http://localhost:3002/ghost/#/posts?type=draft');
      cy.wait(3000);
      cy.screenshot('PageB6')
  
      })
  ;
  
  
  
    })
  
  