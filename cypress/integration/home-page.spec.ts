import * as Visit from '../utils/visit';
import * as Intercept from '../utils/intercept';
import * as Select from '../utils/select';
import * as ApiCall from 'cypress/utils/api-call';
import { DEFAULT_PRODUCTS_PER_QUERY } from 'services/product';

describe('Home page', () => {
  beforeEach(() => {
    Intercept.Products();
    Visit.home();

    // Should call products endpoint 2 times since skeletons are visible
    ApiCall.includesParam(Intercept.Alias.PRODUCTS, `start=0&count=${DEFAULT_PRODUCTS_PER_QUERY}`);
    ApiCall.includesParam(
      Intercept.Alias.PRODUCTS,
      `start=${DEFAULT_PRODUCTS_PER_QUERY}&count=${DEFAULT_PRODUCTS_PER_QUERY}`,
    );
  });

  it('should display product cards and hide search results informations', () => {
    Select.productCards().should('exist');
    Select.searchResultsInformations().should('not.exist');
  });

  it('should call products endpoint with correct pagination on skeleton scroll', () => {
    Select.productCardSkeletons().first().scrollIntoView();
    ApiCall.includesParam(
      Intercept.Alias.PRODUCTS,
      `start=${DEFAULT_PRODUCTS_PER_QUERY * 2}&count=${DEFAULT_PRODUCTS_PER_QUERY}`,
    );
  });

  it('products service should handle search terms', () => {
    Select.searchBar().type('blablabla');
    ApiCall.includesParam(Intercept.Alias.PRODUCTS, 'search=blablabla');
  });

  it('should not display product cards since search not match', () => {
    Select.searchBar().type('Tripouille');
    cy.wait(Intercept.Alias.PRODUCTS);
    Select.productCards().should('not.exist');
  });

  it('search bar should work as expected', () => {
    Select.searchBar().type('pizza');
    cy.wait(Intercept.Alias.PRODUCTS);
    Select.productCards().should('have.length', 3);
    Select.searchResultsInformations().contains('3 search results');
  });
});
