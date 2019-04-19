describe('find Shelters', () => {
  beforeEach(() => {
    cy.server()
  })

  it('goes to vouchers page when selecting buy vouchers from navbar', () => {
    cy.visit('/shelters')
    cy.get('.load-vouchers-page-button')
      .click()
    cy.location('pathname').should('eq', '/vouchers')
  })
})
