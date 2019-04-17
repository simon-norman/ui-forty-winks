describe('purchase voucher', () => {
  beforeEach(() => {
    cy.server()
  })

  it('shows simple form to buy a voucher', () => {
    cy.visit('/buy-voucher')
    // cy.get('.purchaseForm')
      .contains('buy a voucher')
  })
})
