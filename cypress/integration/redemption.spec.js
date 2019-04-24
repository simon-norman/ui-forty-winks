import auth from '../../src/services/auth'

describe('redeem voucher', () => {

  beforeEach(() => {
    cy.route('GET', '**/voucher', {code: "FW123456", amount: 20})
    cy.route('POST', '**/voucher/redeem', {code: "FW123456", amount: 13})
    const handleAuthenticationStub = cy.stub(auth, 'handleAuthentication')
    handleAuthenticationStub.returns(new Promise((resolve, reject) => {
      resolve()
    }) )
    const getAccessTokenStub = cy.stub(auth, 'getAccessToken')
    getAccessTokenStub.returns('abc')
  })

  it('renders first redemption form', () => {
    cy.visit(`/login/success`)
    cy.visit('/redemption')
    cy.get('.redeem-form-1')
    cy.get('.voucher-code')
    cy.get('.get-voucher-details')
  })

  it('renders second redemption form', () => {
    cy.visit('/redemption')
    cy.get('.redeem-form-1')
    cy.get('.voucher-code').type('FW123456')
    cy.get('.get-voucher-details').click()
    cy.get('.redeem-form-2')
  })

  it('updates voucher amount', () => {
    cy.visit('/redemption')
    cy.get('.voucher-code').type('FW123456')
    cy.get('.get-voucher-details').click()

    cy.get('.redeem-form-2')
    cy.get('.confirmed-voucher-code').contains('FW123456')
    cy.get('.amount-left').contains('20')
    cy.get('.deduct-amount').type('7')
    cy.get('.user-email').type('test@test.com')
    cy.get('.submit-deduction').click()

    cy.get('.confirmed-voucher-code').contains('FW123456')
    cy.get('.amount-left').contains('13')
    cy.get('.deduct-amount').type('5')
    cy.route('POST', '**/voucher/redeem', {code: "123456", amount: 8})
    cy.get('.submit-deduction').click()

    cy.get('.redeem-form-2')
    cy.get('.amount-left').contains('8')
  })

})
