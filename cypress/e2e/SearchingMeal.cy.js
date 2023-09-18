describe('SearchingMeal Component', () => {
  beforeEach(() => {
    cy.commonSetup()
    cy.getByDataId('search-icon').click()
  })

  it('Renders the SearchingMeal component', () => {
    cy.get('.container').should('exist')
  })

  it('Finds the input field and enters a search query', () => {
    cy.get('.input-bar input').as('input-bar')
    cy.get('@input-bar').type('Chicken Alfredo')
    cy.get('@input-bar').should('have.value', 'Chicken Alfredo')
  })

  it('Clears the input field when double-clicked', () => {
    cy.get('.input-bar input').as('input-bar')
    cy.get('@input-bar').then(($input) => {
      cy.wrap($input).type('Spaghetti')
      cy.wrap($input).dblclick()
      cy.wrap($input).should('have.value', '')
    })
  })

  it('Displays search results and suggestions', () => {
    cy.get('.input-bar input').type('Kumpir')
    cy.get('.suggestion-item').should('exist')
    cy.get('.suggestion-item').first().click()
    cy.get('.results').contains('Kumpir').should('exist')
    cy.contains('View Recipe').click()
    cy.getByDataId('meal-title').should('contain', 'Kumpir')
  })
})
