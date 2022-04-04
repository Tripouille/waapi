import ProductDetails from 'components/ProductDetails';
import { useRouter } from 'next/router';

const ProductDetailsPage = () => {
  const {
    query: { productId },
  } = useRouter();

  if (!productId) return null;

  return <ProductDetails productId={productId as string} />;
};

export default ProductDetailsPage;
