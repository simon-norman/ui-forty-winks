describe('find Shelters', () => {
  beforeEach(() => {
    cy.route('GET', '**/shelters', {shelters:[
      { name: 'Mile End shelter', price: 20, description: 'here is a description', location: 'nearby' ,mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.775190063914!2d-0.07546948426252068!3d51.51734027963678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761caf26599a83%3A0x9b451d586c649129!2sMakers!5e0!3m2!1sen!2suk!4v1555754401793!5m2!1sen!2suk" },
      { name: 'Aldgate shelter', price: 30, description: 'here is a description also', location: 'further away', mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.775190063914!2d-0.07546948426252068!3d51.51734027963678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761caf26599a83%3A0x9b451d586c649129!2sMakers!5e0!3m2!1sen!2suk!4v1555754401793!5m2!1sen!2suk"  },
      { name: 'Some shelter', price: 20, description: 'here is a description again', location: 'farthest away', mapurl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.775190063914!2d-0.07546948426252068!3d51.51734027963678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761caf26599a83%3A0x9b451d586c649129!2sMakers!5e0!3m2!1sen!2suk!4v1555754401793!5m2!1sen!2suk"  }
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

	it('displays info of each shelter', () => {
    cy.visit('/shelters')
		cy.get('.shelter')
			.first()
			.get('.shelterName')
			.contains('Mile End shelter')
      .get('.shelterPrice')
      .contains('20')
      .get('.shelterDescription')
      .contains('here is a description')
      .get('.shelterLocation')
      .contains('nearby')

    cy.get('.shelter').eq(1)
      .get('.shelterName')
      .contains('Aldgate shelter')
      .get('.shelterPrice')
      .contains('30')
      .get('.shelterDescription')
      .contains('here is a description also')
      .get('.shelterLocation')
      .contains('further away')

    cy.get('.shelter').eq(2)
      .get('.shelterName')
      .contains('Some shelter')
      .get('.shelterPrice')
      .contains('20')
      .get('.shelterDescription')
      .contains('here is a description again')
      .get('.shelterLocation')
      .contains('farthest away')
	})

  it('returns map of each shelter', () => {
    cy.visit('/shelters')
    cy.get('.shelter')
      .first()
      .get('.shelterMap')
      .get('iframe')
    cy.get('.shelter').eq(1)
      .get('.shelterMap')
      .get('iframe')
    cy.get('.shelter').eq(2)
      .get('.shelterMap')
      .get('iframe')
  })
})
