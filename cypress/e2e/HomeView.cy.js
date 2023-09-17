describe('HomeView Component', () => {
  beforeEach(() => {
    cy.commonSetup()
  })

  it('Renders the HomeView component', () => {
    cy.get('.container').should('exist')
  })

  it('Clicks the "Bring New Recipe" button', () => {
    cy.get('.random-button button').click()
  })

  it('Clicks the "Bring New Recipe" button multiple times', () => {
    cy.get('.random-button button').as('randomButton')

    // Capture the initial recipe
    cy.get('.random-card').invoke('text').as('initialRecipe')

    // Click the button multiple times
    cy.clickButtonAndCheckRecipeChange()
    cy.clickButtonAndCheckRecipeChange()
  })
})
