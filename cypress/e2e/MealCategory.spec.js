describe('MealCategories Component', () => {
  beforeEach(() => {
    cy.commonSetup()
    cy.getByDataId('category-icon').click()
  })

  it('Renders the MealCategories component', () => {
    cy.get('.container').should('exist')
  })

  it('Displays categories fetched from the API', () => {
    cy.get('.category').should('exist')
  })

  it('Navigates to the correct category page when a category is clicked', () => {
    cy.get('.category-link').first().click()

    cy.url().should('include', '/by-category/')
  })

  it('Displays the HeroSection with the correct title and subtitle', () => {
    cy.get('.hero-section').should('exist')

    cy.get('.hero-section .hero-title').should('contain', 'Picking Your Food Mood')
    cy.get('.hero-section .hero-subtitle').should('contain', 'Dive into Deliciousness')
  })
})
