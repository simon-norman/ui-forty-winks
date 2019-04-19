describe('find Shelters', () => {
  beforeEach(() => {
    cy.server()
    cy.route('GET', '**/shelters', {shelters:[
      { name: 'Mile End shelter', price: 20, description: 'here is a description' },
      { name: 'Aldgate shelter', price: 30, description: 'here is a description also' },
      { name: 'Some shelter', price: 25, description: 'here is a description again' }
    ]})
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

	it('fetches description of each shelter', () => {
		cy.visit('/shelters')
		cy.get('.shelter')
			.first()
			.get('.shelterDescription')
			.contains('here is a description')
	})
})
