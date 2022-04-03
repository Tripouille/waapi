import { Flex, Heading } from '@chakra-ui/react';
import ProductsGrid from 'components/ProductsGrid';
import SearchBar from 'components/SearchBar';
import type { NextPage } from 'next';
import { useState } from 'react';

const Home: NextPage = () => {
  const [searchTerms, setSearchTerms] = useState('');

  return (
    <div>
      <Flex justify="center" alignItems="center" mt={['4', '10']} flexDirection={['column', 'row']}>
        <Heading as="h1" mr={['0', '16']} mb={['4', '0']}>
          Welcome!
        </Heading>
        <SearchBar onSearch={setSearchTerms} placeholder="Search a product" />
      </Flex>
      <ProductsGrid mt={10} searchTerms={searchTerms} />
    </div>
  );
};

export default Home;
