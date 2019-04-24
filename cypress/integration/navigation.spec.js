describe('navigation', () => {

  it('goes to vouchers page when selecting buy vouchers from navbar', () => {
    cy.visit('/shelters')
    cy.get('.load-vouchers-page-button')
      .click()
    cy.location('pathname').should('eq', '/vouchers')
  })

  it('goes to shelters page when selecting shelters from navbar', () => {
    cy.visit('/vouchers')
    cy.get('.load-shelters-page-button')
      .click()
    cy.location('pathname').should('eq', '/shelters')
  })
})
