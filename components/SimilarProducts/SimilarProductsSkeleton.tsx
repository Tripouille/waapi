import { Grid, Skeleton } from '@chakra-ui/react';
import ProductCardSkeleton from 'components/ProductCard/ProductCardSkeleton';
import { DEFAULT_SIMILAR_PRODUCTS_PER_QUERY } from 'services/product';

const SimilarProductsSkeleton = () => {
  return (
    <div>
      <Skeleton w={44} h={8} mb={5} />
      <Grid
        templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        pr={[0, null, '20%']}
        gap={4}
      >
        {[...Array(DEFAULT_SIMILAR_PRODUCTS_PER_QUERY)].map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </Grid>
    </div>
  );
};

export default SimilarProductsSkeleton;
