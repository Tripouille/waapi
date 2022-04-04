/* eslint-disable @typescript-eslint/no-namespace */
import './commands';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      dataCy(value: string): Chainable<JQuery<HTMLElement>>;
      findDataCy(value: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
