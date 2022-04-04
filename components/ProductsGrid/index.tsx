import { FC, useEffect, useRef } from 'react';
import { Grid, GridProps, Text } from '@chakra-ui/react';
import ProductCard from 'components/ProductCard';
import ProductCardSkeleton from 'components/ProductCard/ProductCardSkeleton';
import { DEFAULT_PRODUCTS_PER_QUERY, useProductsQuery } from 'services/product';
import ErrorAlertWithRetry from 'components/ErrorAlertWithRetry';

export type ProductsGridProps = { searchTerms: string } & GridProps;

const ProductsGrid: FC<ProductsGridProps> = ({ searchTerms, ...gridProps }) => {
  const skeletonRef = useRef<HTMLDivElement>(null);
  const { data, isFetching, isError, fetchNextPage, hasNextPage, refetch } = useProductsQuery({
    searchTerms,
  });

  /** Handle infinite scrolling
   * In case there is more page, the first skeleton will trigger the fetch of the next page */
  useEffect(() => {
    let eventFetching = isFetching;
    const fetchNextPageIfSkeletonIsVisible = async () => {
      if (skeletonRef && skeletonRef.current) {
        const { top: firstSkeletonTop } = skeletonRef.current.getBoundingClientRect();
        const firstSkeletonIsVisible = firstSkeletonTop < window.innerHeight;

        if (firstSkeletonIsVisible && !eventFetching) {
          eventFetching = true;
          fetchNextPage();
        }
      }
    };

    fetchNextPageIfSkeletonIsVisible();
    document.addEventListener('scroll', fetchNextPageIfSkeletonIsVisible);
    return () => document.removeEventListener('scroll', fetchNextPageIfSkeletonIsVisible);
  }, [skeletonRef, fetchNextPage, isFetching]);

  if (isError) return <ErrorAlertWithRetry onRetry={refetch} />;

  const products = data?.pages.map(page => page.products).flat();
  const shouldDisplaySkeleton = isFetching || hasNextPage;
  const productsQuantity = data?.pages[0].count ?? 0;

  return (
    <>
      {searchTerms && !isFetching && (
        <Text color="secondary" fontWeight="semibold" mt={3} data-cy="search-results-informations">
          {productsQuantity} search result{productsQuantity > 1 ? 's' : ''}
        </Text>
      )}
      <Grid
        as="section"
        templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        gap="4"
        {...gridProps}
      >
        {products && products.map(product => <ProductCard key={product._id} product={product} />)}
        {shouldDisplaySkeleton &&
          [...Array(DEFAULT_PRODUCTS_PER_QUERY)].map((_, index) => (
            <ProductCardSkeleton
              key={`ProductCardSkeleton_${index}`}
              ref={index === 0 && !isFetching ? skeletonRef : undefined}
            />
          ))}
      </Grid>
    </>
  );
};

export default ProductsGrid;
