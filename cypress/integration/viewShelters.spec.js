describe('find Shelters', () => {
  beforeEach(() => {
    cy.server()
    cy.route('GET', '**/shelters', [
      { name: 'Mile End shelter'},
      { name: 'Aldgate shelter' },
      { name: 'Some shelter' }
    ])
  })

	it('shows a list of shelters', () => {
		cy.visit('/shelters')
		cy.get('.shelter').should('have.length', 3)
  })

  it('redirects to shelters route from index', () => {
    cy.visit('/')
    cy.get('.shelter').should('have.length', 3)
  })
})