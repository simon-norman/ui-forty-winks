describe('purchase voucher', () => {
  beforeEach(() => {
    cy.server()
  })

  it('shows simple form to buy a voucher', () => {
    cy.visit('/vouchers')
      .contains('Buy')
  })

  it('shows simple form to buy a voucher', () => {
    //cy.visit('/vouchers')
    //cy.get('.buy-voucher')
    //  .click()
  })
})
