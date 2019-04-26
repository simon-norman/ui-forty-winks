describe('voucher confirmation', () => {
  beforeEach(() => {
    cy.route('GET', '**/voucher*', {code: "123456", amount: 20})
    cy.route('POST', '**/voucher', {code: "123456", amount: 20})
    cy.route('POST', '**/message', {number: "+447777777777", code: "FW5", amount: "26.00"})
  })

  it('renders thank you text', () => {
    cy.visit('/voucher')
      .contains('Thank you!')
  })

  it('creates and returns a voucher', () => {
    cy.visit('/voucher')
    cy.get('.voucher').contains("FW123456")
    cy.get('.voucher').contains("£20")
  })

  it('renders sms sent confirmation message', () => {
    cy.visit('/voucher/success')
    cy.get('#sms-number').type("7777777777")
    cy.get('.send-sms').click({ force: true })
    cy.get('.text-sent-confirmation').contains('The voucher has been sent to +447777777777.')
  })
})
