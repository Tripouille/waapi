import ProductForm from 'components/ProductForm';
import { FC } from 'react';
import { useUpdateProductMutation } from 'services/product';
import { Product } from 'services/product/types';
import { TiPencil } from 'react-icons/ti';

export interface EditProductFormProps {
  product: Product;
}

const EditProductForm: FC<EditProductFormProps> = ({ product }) => {
  const { mutate: updateProduct, isLoading } = useUpdateProductMutation(product._id);

  return (
    <ProductForm
      title="Edit product informations"
      titleIcon={TiPencil}
      submitLabel="Update"
      onSubmit={updateProduct}
      isLoading={isLoading}
      product={product}
    />
  );
};

export default EditProductForm;
