import { BASE_URL as PRODUCTS_BASE_URL, Endpoints as ProductsEndpoints } from 'services/product';

export enum Alias {
  PRODUCTS = '@products',
}

export const Products = () =>
  cy.intercept(`${PRODUCTS_BASE_URL}/${ProductsEndpoints.PRODUCTS}**`).as(Alias.PRODUCTS.slice(1));
