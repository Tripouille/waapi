import { FC } from 'react';
import { Grid, Heading, HStack } from '@chakra-ui/react';
import ProductCard from 'components/ProductCard';
import { useSimilarProductsQuery } from 'services/product';

export interface SimilarProductsProps {
  tags: string[];
  currentProductId: string;
}

const SimilarProducts: FC<SimilarProductsProps> = ({ tags, currentProductId }) => {
  const { data: similarProducts, isSuccess } = useSimilarProductsQuery({
    tags,
    currentProductId,
  });

  if (isSuccess) {
    return (
      <aside>
        <Heading fontSize="xl" mb={5}>
          Articles similaires
        </Heading>
        {similarProducts.length ? (
          <Grid
            templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
            pr={[0, null, '20%']}
            gap={4}
          >
            {similarProducts.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </Grid>
        ) : (
          <p>Aucun article similaire.</p>
        )}
      </aside>
    );
  }
  return null;
};

export default SimilarProducts;
