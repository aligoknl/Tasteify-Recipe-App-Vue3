Cypress.Commands.add('clickButtonAndCheckRecipeChange', () => {
  cy.get('@randomButton').click()
  cy.get('.random-card').invoke('text').as('currentRecipe').should('not.eq', '@initialRecipe')
})

Cypress.Commands.add('commonSetup', () => {
  cy.visit('http://localhost:5173')
})
