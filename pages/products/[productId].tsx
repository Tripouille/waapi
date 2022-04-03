import ProductDetails from 'components/ProductDetails';
import { useRouter } from 'next/router';

const ProductDetailsPage = () => {
  const {
    query: { productId },
  } = useRouter();

  return <ProductDetails productId={productId as string} />;
};

export default ProductDetailsPage;
