describe('find Shelters', () => {
  beforeEach(() => {
    cy.server()
    cy.route('GET', '**/shelters', [
      { name: 'Mile End shelter', price: 20},
      { name: 'Aldgate shelter', price: 30 },
      { name: 'Some shelter', price: 25 }
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
	
	it('displays the name of each shelter', () => {
    cy.visit('/shelters')
		cy.get('.shelter')
			.first()
			.get('.shelterName')
			.contains('Mile End shelter')
	})

	it('fetches price along with each shelter name', () => {
		cy.visit('/shelters')
		cy.get('.shelter')
			.first()
			.get('.shelterPrice')
			.contains('20')
	})
})