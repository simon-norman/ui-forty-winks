describe('redeem voucher', () => {

  beforeEach(() => {
    cy.route('GET', '**/voucher', {code: "123456", amount: 20})
    cy.route('POST', '**/voucher/redeem', {code: "123456", amount: 15})
  })

  it('renders first redemption form', () => {
    cy.visit('/redemption')
    cy.get('.redeem-form-1')
    cy.get('.voucher-code')
    cy.get('.get-voucher-details')
  })

  it('renders second redemption form', () => {
    cy.visit('/redemption')
    cy.get('.redeem-form-1')
    cy.get('.voucher-code').type('123456')
    cy.get('.get-voucher-details').click()
    cy.get('.redeem-form-2')
  })

})
