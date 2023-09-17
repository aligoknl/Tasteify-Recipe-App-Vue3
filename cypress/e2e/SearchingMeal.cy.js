// cypress/integration/searchingMeal.spec.js

describe('SearchingMeal Component', () => {
  beforeEach(() => {
    cy.commonSetup()
    cy.get('[data-cy="search-icon"]').click()
  })

  it('Renders the SearchingMeal component', () => {
    cy.get('.container').should('exist')
  })

  it('Finds the input field and enters a search query', () => {
    cy.get('.input-bar input').type('Chicken Alfredo')
    cy.get('.input-bar input').should('have.value', 'Chicken Alfredo')
  })

  it('Clears the input field when double-clicked', () => {
    cy.get('.input-bar input').type('Spaghetti')

    cy.get('.input-bar input').dblclick()

    cy.get('.input-bar input').should('have.value', '')
  })

  it('Displays search results and suggestions', () => {
    cy.get('.input-bar input').type('Kumpir')

    cy.get('.suggestion-item').should('exist', { timeout: 10000 })

    cy.get('.suggestion-item').first().click()

    cy.get('.results').contains('Kumpir').should('exist', { timeout: 10000 })

    cy.contains('View Recipe').click()

    cy.get('[data-cy="meal-title"]').should('contain', 'Kumpir')
  })
})
