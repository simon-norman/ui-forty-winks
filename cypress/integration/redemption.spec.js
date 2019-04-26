describe('redeem voucher', () => {
  beforeEach(() => {
    cy.route('GET', '**/voucher*', {code: "123456", amount: 20})
    cy.route('POST', '**/voucher', {code: "123456", amount: 13})
  })

  it('renders first redemption form', () => {
    cy.login()
          .then((resp) => {
            return resp.body;
          })
          .then((body) => {
            const {access_token, expires_in, id_token} = body;
            const auth0State = {
              nonce: '',
              state: 'some-random-state'
            };
            const authUrl = `/login/success#access_token=${access_token}&scope=openid&id_token=${id_token}&expires_in=${expires_in}&token_type=Bearer&state=${auth0State.state}`;
            cy.visit(authUrl, {
              onBeforeLoad(win) {
                win.document.cookie = 'com.auth0.auth.some-random-state=' + JSON.stringify(auth0State);
              }
            });
          });
    cy.get('.redemption-page')
    cy.get('.voucher-code')
    cy.get('.get-voucher-details')
 })

  it('renders second redemption form', () => {
    cy.login()
          .then((resp) => {
            return resp.body;
          })
          .then((body) => {
            const {access_token, expires_in, id_token} = body;
            const auth0State = {
              nonce: '',
              state: 'some-random-state'
            };
            const authUrl = `/login/success#access_token=${access_token}&scope=openid&id_token=${id_token}&expires_in=${expires_in}&token_type=Bearer&state=${auth0State.state}`;
            cy.visit(authUrl, {
              onBeforeLoad(win) {
                win.document.cookie = 'com.auth0.auth.some-random-state=' + JSON.stringify(auth0State);
              }
            });
          });
    cy.get('.redemption-page')
    cy.get('#voucher-code').type('FW123456')
    cy.get('.get-voucher-details').click()
    cy.get('.redeem-voucher-form')
  })

  it('updates voucher amount', () => {
    cy.login()
          .then((resp) => {
            return resp.body;
          })
          .then((body) => {
            const {access_token, expires_in, id_token} = body;
            const auth0State = {
              nonce: '',
              state: 'some-random-state'
            };
            const authUrl = `/login/success#access_token=${access_token}&scope=openid&id_token=${id_token}&expires_in=${expires_in}&token_type=Bearer&state=${auth0State.state}`;
            cy.visit(authUrl, {
              onBeforeLoad(win) {
                win.document.cookie = 'com.auth0.auth.some-random-state=' + JSON.stringify(auth0State);
              }
            });
          });
    cy.get('#voucher-code').type('FW123456')
    cy.get('.get-voucher-details').click()

    cy.get('.redeem-voucher-form')
    cy.get('.confirmed-voucher-code').contains('FW123456')
    cy.get('.amount-left').contains('20')
    cy.get('#deduct-amount').type('7')
    cy.get('#user-email').type('test@test.com')
    cy.route('POST', '**/voucher/redeem', {code: "123456", amount: 13})
    cy.get('.submit-deduction').click()

    cy.get('.confirmed-voucher-code').contains('FW123456')
    cy.get('#amount-left').contains('13')
    cy.get('#deduct-amount').type('5')
    cy.route('POST', '**/voucher/redeem', {code: "123456", amount: 8})
    cy.get('.submit-deduction').click()

    cy.get('.redeem-voucher-form')
    cy.get('#amount-left').contains('8')
  })

})
