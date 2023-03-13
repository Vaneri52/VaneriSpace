describe('template spec', () => 
{
  it('passes', () => 
  {
    cy.visit('https://www.wingo.com/')
  })
  it('failed', () => 
  {
    cy.visit('https://www.wingo23nm.com/')
  })
})