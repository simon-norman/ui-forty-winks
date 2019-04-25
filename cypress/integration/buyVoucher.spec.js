describe('purchase voucher', () => {
  it('shows list of vouchers', () => {
    cy.visit('/vouchers')
    cy.get('.voucher-option').should('have.length', 4)
  })
})
