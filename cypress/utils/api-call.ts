export const includesParam = (alias: string, param: string) =>
  cy.wait(alias).its('request.url').should('include', param);
