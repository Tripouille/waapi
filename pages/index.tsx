import ProductsGrid from 'components/ProductsGrid';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <ProductsGrid mt={10} />
    </div>
  );
};

export default Home;
