Given('I open Google page', () => {
  cy.visit('/')
})

Then('I see {string} in the title', (title) => {
  cy.title().should('include', title)
})

Given('I put the {string} text in search', (search_by) => {
  cy.get('#lst-ib')
      .type(search_by)
      .blur()
})

Given('Search it', () => {
  cy.get('#lst-ib')
      .type('{enter}')
})
