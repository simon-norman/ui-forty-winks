describe('voucher confirmation', () => {
  beforeEach(() => {
    cy.server()
    cy.route('GET', '**/voucher*', {code: "123456", amount: 20})
    cy.route('POST', '**/voucher', {code: "123456", amount: 20})
    cy.route('GET', '**/message*', {number: "+447777777777", code: "FW5", amount: "26.00"})
    cy.route('POST', '**/message', {number: "+447777777777", code: "FW5", amount: "26.00"})
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

  it('renders sms form', () => {
    cy.visit('/thank-you')
    cy.get('.sms-form')
    cy.get('.sms-number')
    cy.get('.sms-submit')
  })

  it('renders sms sent confirmation message', () => {
    cy.visit('/thank-you')
    cy.get('.sms-number').type("7777777777")
    cy.get('.sms-submit').click({ force: true })
    cy.get('.text-sent-confirmation').contains('Voucher sent to 07777777777!')
  })
})
