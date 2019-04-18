describe('voucher confirmation', () => {
  beforeEach(() => {
    cy.server()
    cy.route('POST', '**/vouchercode', {voucher: {vouchercode: "123456"}})
  })

  it('renders thank you text', () => {
    cy.visit('/thank-you')
      .contains('thank you!')
  })

  it('renders a voucher code', () => {
    cy.visit('/thank-you')
    cy.get('.voucher').contains("123456")
  })
})
