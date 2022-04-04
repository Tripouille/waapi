import { FrontRoutes } from 'utils/routes';

export const home = () => {
  cy.visit(FrontRoutes.HOME());
};
