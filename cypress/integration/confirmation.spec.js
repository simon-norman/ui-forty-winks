describe('voucher confirmation', () => {
  beforeEach(() => {
    cy.route('GET', '**/voucher*', {code: "123456", amount: 20})
    cy.route('POST', '**/voucher', {code: "123456", amount: 20})

  })

  it('renders thank you text', () => {
    cy.visit('/thank-you')
      .contains('thank you!')
  })

  it('renders a voucher code', () => {
    cy.visit('/thank-you')
    cy.get('.voucher').contains("FW123456")
    cy.get('.voucher').contains("£20")
  })

  it('creates and returns a voucher', () => {
    cy.visit('/voucher')
    cy.get('.voucher').contains("FW123456")
    cy.get('.voucher').contains("£20")
  })
})
