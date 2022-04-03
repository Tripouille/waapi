import { useToast, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { ProductFormData } from 'components/ProductForm';
import { useInfiniteQuery, useMutation, useQueryClient } from 'react-query';
import { TOAST_DURATION } from 'utils/constant';
import { getMessageFromError } from 'utils/error';
import { ProductsQueryResponse } from './types';

export const PRODUCTS_QUERY_KEY = 'products';
export const BASE_URL = 'https://technical-test-frontend.herokuapp.com/api';
export enum Endpoints {
  PRODUCTS = 'products',
  CREATE_PRODUCT = 'products',
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

const createProductMutation = (productFormData: ProductFormData) =>
  axios.post(`${BASE_URL}/${Endpoints.CREATE_PRODUCT}`, productFormData);

export const useCreateProductMutation = () => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const onSuccess = () => {
    queryClient.invalidateQueries(PRODUCTS_QUERY_KEY);
    toast({
      title: 'Product created.',
      status: 'success',
      duration: TOAST_DURATION,
      isClosable: true,
      position: 'bottom-right',
    });
  };
  const onError = (error: unknown) => {
    toast({
      title: 'Oops ...',
      description: getMessageFromError(error),
      status: 'error',
      duration: TOAST_DURATION,
      isClosable: true,
      position: 'bottom-right',
    });
  };

  return useMutation(createProductMutation, {
    onSuccess,
    onError,
  });
};
