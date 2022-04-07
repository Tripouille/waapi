import axios from 'axios';
import { ProductFormData } from 'components/ProductForm';
import useCustomToast from 'hooks/useCustomToast';
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from 'react-query';
import { getMessageFromError } from 'utils/error';
import { Product, ProductQueryResponse, ProductsQueryParams, ProductsQueryResponse } from './types';

export const PRODUCTS_QUERY_KEY = 'products';
export const BASE_URL = 'https://technical-test-frontend.herokuapp.com/api';
export enum Endpoints {
  PRODUCTS = 'products',
}
export const DEFAULT_PRODUCTS_PER_QUERY = 8;
export const DEFAULT_SIMILAR_PRODUCTS_PER_QUERY = 3;

export const productsQuery =
  ({ searchTerms, tags, count = DEFAULT_PRODUCTS_PER_QUERY }: ProductsQueryParams) =>
  async ({ pageParam = 0 }): Promise<ProductsQueryResponse & { nextPage?: number }> => {
    const start = pageParam * DEFAULT_PRODUCTS_PER_QUERY;
    const params = { start, count };

    if (searchTerms) Object.assign(params, { search: searchTerms });
    if (tags) Object.assign(params, { tags });
    const { data } = await axios.get<ProductsQueryResponse>(`${BASE_URL}/${Endpoints.PRODUCTS}`, {
      params,
    });
    return {
      ...data,
      nextPage: start + DEFAULT_PRODUCTS_PER_QUERY < data.count ? pageParam + 1 : undefined,
    };
  };

export const useProductsQuery = ({
  searchTerms,
  tags,
  count = DEFAULT_PRODUCTS_PER_QUERY,
}: ProductsQueryParams) => {
  return useInfiniteQuery(
    [PRODUCTS_QUERY_KEY, searchTerms, tags, count],
    productsQuery({ searchTerms, tags, count }),
    {
      getNextPageParam: lastPage => lastPage.nextPage,
    },
  );
};

/** Always fetch one more product in case the backend returns
 * the current product, then remove current product if included and
 * return the required count
 */
export const useSimilarProductsQuery = ({
  searchTerms,
  tags,
  count = DEFAULT_SIMILAR_PRODUCTS_PER_QUERY,
  currentProductId,
}: ProductsQueryParams & { currentProductId: string }) => {
  const select = (data: ProductsQueryResponse): ProductsQueryResponse['products'] => {
    return data.products.filter(product => product._id !== currentProductId).slice(0, 3);
  };

  return useQuery(
    [PRODUCTS_QUERY_KEY, searchTerms, tags, count + 1],
    productsQuery({ searchTerms, tags, count: count + 1 }),
    {
      select,
    },
  );
};

const productQuery = (productId: string) => async (): Promise<Product> => {
  const { data } = await axios.get<ProductQueryResponse>(
    `${BASE_URL}/${Endpoints.PRODUCTS}/${productId}`,
  );
  return data.product;
};

export const useProductQuery = (productId: string) => {
  return useQuery([PRODUCTS_QUERY_KEY, productId], productQuery(productId), {
    enabled: !!productId,
  });
};

const createProductMutation = (productFormData: ProductFormData) =>
  axios.post(`${BASE_URL}/${Endpoints.PRODUCTS}`, productFormData);

export const useCreateProductMutation = () => {
  const queryClient = useQueryClient();
  const toast = useCustomToast();

  const onSuccess = () => {
    queryClient.invalidateQueries(PRODUCTS_QUERY_KEY);
    toast({
      title: 'Product created',
      status: 'success',
    });
  };
  const onError = (error: unknown) => {
    toast({
      title: 'Oops ...',
      description: getMessageFromError(error),
      status: 'error',
    });
  };

  return useMutation(createProductMutation, {
    onSuccess,
    onError,
  });
};

const updateProductMutation =
  (productId: string) =>
  async (productFormData: ProductFormData): Promise<Product> =>
    axios.put(`${BASE_URL}/${Endpoints.PRODUCTS}/${productId}`, productFormData);

export const useUpdateProductMutation = (productId: string) => {
  const queryClient = useQueryClient();
  const toast = useCustomToast();

  const onSuccess = () => {
    queryClient.invalidateQueries(PRODUCTS_QUERY_KEY);
    toast({
      title: 'Product updated',
      status: 'success',
    });
  };
  const onError = (error: unknown) => {
    toast({
      title: 'Oops ...',
      description: getMessageFromError(error),
      status: 'error',
    });
  };

  return useMutation(updateProductMutation(productId), {
    onSuccess,
    onError,
  });
};
