describe('find Shelters', () => {
	it('shows a list of shelters', () => {
		cy.visit('/')
		cy.get('.shelter').should('have.length', 2)
  })
})