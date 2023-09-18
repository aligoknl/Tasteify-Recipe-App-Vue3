Cypress.Commands.add('clickButtonAndCheckRecipeChange', () => {
  cy.get('@randomButton').click()
  cy.get('.random-card').invoke('text').as('currentRecipe').should('not.eq', '@initialRecipe')
})

Cypress.Commands.add('commonSetup', () => {
  cy.visit(Cypress.env('localURL'))
})

Cypress.Commands.add('getByDataId', (id) => {
  return cy.get(`[data-cy="${id}"]`)
})
