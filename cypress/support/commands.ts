Cypress.Commands.add('dataCy', value => cy.get(`[data-cy=${value}]`));

Cypress.Commands.add('findDataCy', { prevSubject: true }, (subject: Cypress.Chainable, value) => {
  cy.wrap(subject).find(`[data-cy=${value}]`);
});
