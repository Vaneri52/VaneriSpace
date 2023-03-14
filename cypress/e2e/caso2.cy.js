describe('Search test cases', function()
{
  it('Search with results', function() 
  {
    cy.visit('https://www.wingo.com/')

    cy.get('.input-origen')
    cy.get('select').should('have.value', 'Bogotá (BOG) El Dorado').click({force: true})

    cy.get('.input-destino').click({force: true})
    cy.get('select').should('have.value', 'Cali (CLO) Alfonso Bonilla Aragón')
    
    cy.get('.btn-search').click()
  })    
})