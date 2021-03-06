import ProductForm from 'components/ProductForm';
import { BsPlusLg } from 'react-icons/bs';
import { useCreateProductMutation } from 'services/product';

const CreateProductForm = () => {
  const { mutate: createProduct, isLoading, isSuccess } = useCreateProductMutation();

  return (
    <ProductForm
      title="Add a new product"
      titleIcon={BsPlusLg}
      submitLabel="Add a new product"
      onSubmit={createProduct}
      isLoading={isLoading}
      resetFormAfterSubmit={isSuccess}
    />
  );
};

export default CreateProductForm;
