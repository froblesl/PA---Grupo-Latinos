let login = '';

before(()=>{
    // Given: Se generan datos a priori con Mockaroo
    cy.request({
        method: 'GET',
        url: 'https://api.mockaroo.com/api/d11ff690?count=1&key=13c2cd60'
    }).then((response) => {
        login = response.body[0];
    })
 })

describe('Login Site', () => {
    it('Test search content my a specified member', () => {
        // Given: El usuario accede a la aplicación
        cy.visit('http://localhost:2368/ghost');
        // When: Se escriben los datos generados aleatoriamente de manera previa con Mockaroo
        cy.get('input[name="identification"]').type(login.email);
        cy.get('input[name="password"]').type(login.password);
        // Then: Se hace click en Sign in
        cy.get('button[type="submit"]').click();        
    });
});