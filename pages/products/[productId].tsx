import { useRouter } from 'next/router';

const ProductDetailsPage = () => {
  const {
    query: { productId },
  } = useRouter();

  return <p>Page de details du produit {productId}</p>;
};

export default ProductDetailsPage;
