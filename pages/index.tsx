import { Flex, Heading } from '@chakra-ui/react';
import ProductsGrid from 'components/ProductsGrid';
import SearchBar from 'components/SearchBar';
import type { NextPage } from 'next';
import { useState } from 'react';

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
