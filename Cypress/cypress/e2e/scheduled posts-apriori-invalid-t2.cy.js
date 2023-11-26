let scheduled = '';

describe('Scheduled Posts Features', () => {

    beforeEach(()=>{
        // Given: Se generan datos a priori con Mockaroo
        cy.request({
            method: 'GET',
            url: 'https://api.mockaroo.com/api/95258aa0?count=1&key=13c2cd60'
        }).then((response) => {
            scheduled = response.body[0];
        })
        // Given: El usuario accede al Dashboard
        cy.visit('http://localhost:2368/ghost')
        cy.get('input[name="identification"]').type('da.martin2@uniandes.edu.co');
        cy.get('input[name="password"]').type('L05Am0r35!');
        cy.get('button[type="submit"]').click();
        //cy.screenshot('scheduled-posts-5-0-1');
    })
    
    it('Test the scheduling of a post publishing', () => {
        // Given: El usuario accede al Dashboard
        cy.visit('http://localhost:2368/ghost/#/dashboard').wait(2000);
        //cy.screenshot('scheduled-posts-5-1-1');
        // When: El usuario hace clic para programar un nuevo post
        cy.get('a[href="#/posts/?type=scheduled"]').should('exist').click();
        cy.get('a[href="#/editor/post/"][class="ember-view gh-btn gh-btn-primary"]').should('exist').click();
        //cy.screenshot('scheduled-posts-5-1-2');
        // Then: El editor se abre, se escribe Scheduled Post en el título y se programa la publicación del post
        cy.get('.gh-editor-title').should('exist').type(scheduled.title + '{enter}');
        cy.get('button[data-test-button="publish-flow"]').click();
        cy.get('.gh-publish-setting-trigger').click({ multiple: true });
        //cy.screenshot('scheduled-posts-5-1-3');
    })

    it('Test change of scheduling of a post', () => {
        // Given: El usuario accede al Dashboard
        cy.visit('http://localhost:2368/ghost/#/dashboard').wait(2000);
        //cy.screenshot('scheduled-posts-5-2-1');
        // When: El usuario hace clic en Scheduled Posts y verifica que hay un post con ese mismo título
        cy.get('a[href="#/posts/?type=scheduled"]').should('exist').click();
        cy.get('h3').then(($header)=>{
            expect($header[0].innerText).to.equal('Scheduled Post')
        }).click();
        //cy.screenshot('scheduled-posts-5-2-2');
        // Then: El editor se abre, se modifica un atricuto de la programación
        cy.get('button[data-test-button="update-flow"]').click();
        cy.get('button[data-test-button="revert-to-draft"]').click();
        //cy.screenshot('scheduled-posts-5-2-3');
    })

})