Cypress.Commands.add('login', (overrides = {}) => {
  Cypress.log({
    name: 'loginViaAuth0',
  });

  const options = {
    method: 'POST',
    url: Cypress.env('auth_url'),
    body: {
      grant_type: 'password',
      username: Cypress.env('auth_username'),
      password: Cypress.env('auth_password'),
      audience: Cypress.env('auth_audience'),
      scope: 'openid profile email',
      client_id: Cypress.env('auth_client_id'),
      client_secret: Cypress.env('auth_client_secret'),
    },
  };
  cy.request(options);
});

describe('redeem voucher', () => {
  beforeEach(() => {
    cy.route('GET', '**/voucher*', {code: "123456", amount: 20})
    cy.route('POST', '**/voucher', {code: "123456", amount: 13})
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
    cy.get('.voucher-code input').type('FW123456')
    cy.get('.get-voucher-details').click()

    cy.get('.redeem-voucher-form')
    cy.get('.confirmed-voucher-code').contains('FW123456')
    cy.get('.amount-left').contains('20')
    cy.get('.deduct-amount input').type('7')
    cy.get('.user-email input').type('test@test.com')
    cy.route('POST', '**/voucher/redeem', {code: "123456", amount: 13})
    cy.get('.submit-deduction').click()

    cy.get('.confirmed-voucher-code').contains('FW123456')
    cy.get('.amount-left').contains('13')
    cy.get('.deduct-amount input').type('5')
    cy.get('.user-email input').type('test@test.com')
    cy.route('POST', '**/voucher/redeem', {code: "123456", amount: 8})
    cy.get('.submit-deduction').click()

    cy.get('.amount-left').contains('8')
  })

})
