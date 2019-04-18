describe('voucher confirmation', () => {
  beforeEach(() => {
    cy.server()
  })

  it('renders thank you text', () => {
    cy.visit('/thank-you')
      .contains('thank you!')
  })
})
