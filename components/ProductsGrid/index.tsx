import { FC, useEffect, useRef } from 'react';
import { Grid, GridProps } from '@chakra-ui/react';
import ProductCard from 'components/ProductCard';
import ProductCardSkeleton from 'components/ProductCard/ProductCardSkeleton';
import { PRODUCTS_PER_QUERY, useProductsQuery } from 'services/product';
import ServerError from 'components/ServerError';

export type ProductsGridProps = GridProps;

const ProductsGrid: FC<ProductsGridProps> = props => {
  const skeletonRef = useRef<HTMLDivElement>(null);
  const { data, isFetching, isError, fetchNextPage, hasNextPage, refetch } = useProductsQuery();

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

  if (isError) return <ServerError onRetry={refetch} />;

  const products = data?.pages.map(page => page.products).flat();
  const shouldDisplaySkeleton = isFetching || hasNextPage;

  return (
    <Grid
      templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
      gap="4"
      {...props}
    >
      {products && products.map(product => <ProductCard key={product._id} product={product} />)}
      {shouldDisplaySkeleton &&
        [...Array(PRODUCTS_PER_QUERY)].map((_, index) => (
          <ProductCardSkeleton
            key={`ProductCardSkeleton_${index}`}
            ref={index === 0 ? skeletonRef : undefined}
          />
        ))}
    </Grid>
  );
};

export default ProductsGrid;
