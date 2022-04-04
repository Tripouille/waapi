import EditProductForm from 'components/EditProductForm';
import ErrorAlertWithRetry from 'components/ErrorAlertWithRetry';
import ProductFormSkeleton from 'components/ProductForm/ProductFormSkeleton';
import { useRouter } from 'next/router';
import { useProductQuery } from 'services/product';

const ProductEditPage = () => {
  const {
    query: { productId },
  } = useRouter();
  const {
    data: product,
    isSuccess,
    isError,
    refetch,
    isLoading,
  } = useProductQuery(productId as string);

  if (isError) {
    return <ErrorAlertWithRetry onRetry={refetch} />;
  }

  if (isLoading) {
    return <ProductFormSkeleton />;
  }

  if (isSuccess) {
    return <EditProductForm product={product} />;
  }
  return null;
};

export default ProductEditPage;
