import { Flex, Heading } from '@chakra-ui/react';
import ProductsGrid from 'components/ProductsGrid';
import SearchBar from 'components/SearchBar';
import type { NextPage } from 'next';
import { useState } from 'react';
import { dehydrate, QueryClient } from 'react-query';
import { PRODUCTS_QUERY_KEY, productsQuery, DEFAULT_PRODUCTS_PER_QUERY } from 'services/product';

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(
    [PRODUCTS_QUERY_KEY, '', null, DEFAULT_PRODUCTS_PER_QUERY],
    productsQuery({}),
  );

  /** Stringify workaround => https://github.com/tannerlinsley/react-query/issues/1458#issuecomment-747716357 */
  return {
    props: {
      dehydratedState: JSON.stringify(dehydrate(queryClient)),
    },
  };
}

const Home: NextPage = () => {
  const [searchTerms, setSearchTerms] = useState('');

  return (
    <>
      <Flex justify="center" alignItems="center" flexDirection={['column', 'row']}>
        <Heading as="h1" mr={['0', '16']} mb={['4', '0']}>
          Welcome!
        </Heading>
        <SearchBar onSearch={setSearchTerms} placeholder="Search a product" />
      </Flex>
      <ProductsGrid mt={['5', '10']} searchTerms={searchTerms} />
    </>
  );
};

export default Home;
