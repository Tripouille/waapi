import axios from 'axios';
import { useInfiniteQuery } from 'react-query';
import { ProductsQueryResponse } from './types';

export const PRODUCTS_QUERY_KEY = 'products';
export const BASE_URL = 'https://technical-test-frontend.herokuapp.com/api';
export enum Endpoints {
  PRODUCTS = 'products',
}
export const PRODUCTS_PER_QUERY = 8;

const productsQuery =
  (searchTerms: string) =>
  async ({ pageParam = 0 }): Promise<ProductsQueryResponse & { nextPage?: number }> => {
    const start = pageParam * PRODUCTS_PER_QUERY;
    const params = { start, count: PRODUCTS_PER_QUERY };
    if (searchTerms) Object.assign(params, { search: searchTerms });
    const { data } = await axios.get<ProductsQueryResponse>(`${BASE_URL}/${Endpoints.PRODUCTS}`, {
      params,
    });
    return {
      ...data,
      nextPage: start + PRODUCTS_PER_QUERY < data.count ? pageParam + 1 : undefined,
    };
  };

export const useProductsQuery = (searchTerms: string) => {
  return useInfiniteQuery([PRODUCTS_QUERY_KEY, searchTerms], productsQuery(searchTerms), {
    getNextPageParam: lastPage => lastPage.nextPage,
  });
};
