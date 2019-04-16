describe('find Shelters', () => {
	it('shows a list of shelters', () => {
    cy.server()
    cy.route('GET', '**/shelters', [
      { name: 'Mile End shelter'},
      { name: 'Aldgate shelter' },
      { name: 'Some shelter' }
    ])

		cy.visit('/')
		cy.get('.shelter').should('have.length', 3)
  })
})