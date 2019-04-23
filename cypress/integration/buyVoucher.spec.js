describe('purchase voucher', () => {
  beforeEach(() => {
    cy.server()
  })

  it('shows simple form to buy a voucher', () => {
    cy.visit('/vouchers')
      .contains('Buy')
  })

  it('shows list of vouchers', () => {
    cy.visit('/vouchers')
    cy.get('.voucher-option').should('have.length', 4)
  })
})
